<?php


namespace App\Library;


use App\Models\Model;
use Illuminate\Support\Collection;

interface DatabaseConnector
{
    /**
     * @param string $table
     * @return Collection
     */
    public function all(string $table);

    /**
     * @param string $table
     * @param array $data
     * @return Model
     */
    public function create(string $table, array $data);

    /**
     * @param string $table
     * @param int $id
     * @return Model
     */
    public function find(string $table, int $id);

    /**
     * @param string $table
     * @param int $id
     * @param array $data
     * @return Model
     */
    public function update(string $table, int $id, array $data);

    /**
     * @param string $table
     * @param int $id
     * @return bool
     */
    public function destroy(string $table, int $id);

    /**
     * string $table
     * @param string $field
     * @param string $operator
     * @param $value
     * @return Collection
     */
    public function where(string $table, string $field, string $operator, $value);
}