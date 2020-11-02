<?php


namespace App\Library;


use App\Models\Model;
use Exception;
use Illuminate\Container\Container;
use Illuminate\Support\Collection;
use PDO;
use PDOException;
use PDOStatement;

class Database implements DatabaseConnector
{
    protected Container $container;

    protected $host;
    protected $database;
    protected $user;
    protected $pass;
    /**
     * @var PDO
     */
    protected $conn;

    /**
     * Database constructor.
     * @param Container $container
     */
    public function __construct(Container $container)
    {
        $this->container = $container;

        $this->setupConnection();
    }

    private function setupConnection()
    {
        $this->host = env('DB_HOST');
        $this->database = env('DB_DATABASE');
        $this->user = env('DB_USERNAME');
        $this->pass = env('DB_PASSWORD');

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database, $this->user,
                $this->pass);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Database could not be connected: " . $exception->getMessage();
        }
    }


    /**
     * @param string $table
     * @return Collection
     */
    public function all(string $table)
    {
        $sqlQuery = "SELECT * FROM " . $table;
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();

        $itemCount = $stmt->rowCount();

        $collection = new Collection();

        if ($itemCount > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $collection->push($row);
            }
        }

        return $collection;
    }

    /**
     * @param string $table
     * @param array $data
     * @return false|Model
     */
    public function create(string $table, array $data)
    {
        try {
            $this->conn->beginTransaction();

            if (count($data) === 0) {
                $sqlQuery = "insert into " . $table . " values ()";
            } else {
                $sqlQuery = "INSERT INTO " . $table . " SET";

                foreach ($data as $key => $value) {
                    reset($data);

                    $sqlQuery .= " $key = :$key ";

                    end($data);
                    if ($key !== key($data)) {
                        $sqlQuery .= ",";
                    }
                }
            }


            /** @var PDOStatement $stmt */
            $stmt = $this->conn->prepare($sqlQuery);

            // sanitize and bind data
            // sanitize and bind data
            foreach ($data as $key => $value) {
                if (is_array($value)) {
                    // sanitize
                    $sanitizedValue = [];

                    foreach ($value as $index => $items) {
                        $newItem = [];

                        foreach ($items as $itemKey => $itemValue) {
                            $newItem[htmlspecialchars(strip_tags($itemKey))] = htmlspecialchars(strip_tags($itemValue));
                        }

                        $sanitizedValue[$index] = $newItem;
                    }

                    $stmt->bindParam(":" . $key, json_encode($sanitizedValue));
                } else {
                    $stmt->bindParam(":" . $key, htmlspecialchars(strip_tags($value)));
                }
            }

            if ($result = $stmt->execute()) {
                $data['id'] = $this->conn->lastInsertId();

                $this->conn->commit();

                return $data;
            }

            $this->conn->rollBack();

            return false;
        } catch (Exception $exception) {
            $this->conn->rollBack();

            return false;
        }
    }

    /**
     * @param string $table
     * @param int $id
     * @return Model|false|mixed
     */
    public function find(string $table, int $id)
    {
        $sqlQuery = "SELECT * FROM " . $table . " WHERE id = :id LIMIT 0,1";

        /** @var PDOStatement $stmt */
        $stmt = $this->conn->prepare($sqlQuery);

        // sanitize and bind data
        $stmt->bindParam(":id", htmlspecialchars(strip_tags($id)));


        if ($result = $stmt->execute()) {
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);

            return $dataRow;
        }

        $this->conn->rollBack();

        return false;
    }

    public function update(string $table, int $id, array $data)
    {
        try {
            $this->conn->beginTransaction();

            $sqlQuery = "UPDATE " . $table . " SET";

            if (array_key_exists('id', $data)) {
                unset($data['id']);
            }

            foreach ($data as $key => $value) {
                reset($data);

                $sqlQuery .= " $key = :$key ";

                end($data);
                if ($key !== key($data)) {
                    $sqlQuery .= ",";
                }
            }

            $sqlQuery .= "WHERE id = :id";

            /** @var PDOStatement $stmt */
            $stmt = $this->conn->prepare($sqlQuery);

            // sanitize and bind data
            foreach ($data as $key => $value) {
                if (is_array($value)) {
                    // sanitize
                    $sanitizedValue = [];

                    foreach ($value as $index => $items) {
                        $newItem = [];

                        foreach ($items as $itemKey => $itemValue) {
                            $newItem[htmlspecialchars(strip_tags($itemKey))] = htmlspecialchars(strip_tags($itemValue));
                        }

                        $sanitizedValue[$index] = $newItem;
                    }

                    $stmt->bindParam(":" . $key, json_encode($sanitizedValue));
                } else {
                    $stmt->bindParam(":" . $key, htmlspecialchars(strip_tags($value)));
                }
            }

            // sanitize and bind data
            $stmt->bindParam(":id", htmlspecialchars(strip_tags($id)));


            if ($result = $stmt->execute()) {
                $data['id'] = $id;

                $this->conn->commit();

                return $data;
            }

            $this->conn->rollBack();

            return false;
        } catch (Exception $exception) {
            $this->conn->rollBack();

            return false;
        }
    }

    /**
     * @param string $table
     * @param int $id
     * @return bool
     */
    public function destroy(string $table, int $id)
    {
        try {
            $this->conn->beginTransaction();

            $sqlQuery = "DELETE FROM " . $table . " WHERE id = :id";

            /** @var PDOStatement $stmt */
            $stmt = $this->conn->prepare($sqlQuery);

            // sanitize and bind data
            $stmt->bindParam(":id", htmlspecialchars(strip_tags($id)));

            if ($stmt->execute()) {
                $this->conn->commit();

                return true;
            }

            $this->conn->rollBack();

            return false;
        } catch (Exception $exception) {
            $this->conn->rollBack();

            return false;
        }
    }

    /**
     * string $table
     * @param string $table
     * @param string $field
     * @param string $operator
     * @param $value
     * @return Collection|void
     */
    public function where(string $table, string $field, string $operator, $value)
    {
        $sqlQuery = "SELECT * FROM " . $table . " where {$field} {$operator} {$value}";
        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->execute();

        $itemCount = $stmt->rowCount();

        $collection = new Collection();

        if ($itemCount > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $collection->push($row);
            }
        }

        return $collection;
    }
}