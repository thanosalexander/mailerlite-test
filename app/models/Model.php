<?php


namespace App\Models;


use App\Library\DatabaseConnector;
use App\traits\HasRelationships;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class Model
{
    protected array $attributes = [];
    private DatabaseConnector $database;
    /**
     * @var DatabaseConnector
     */
    private DatabaseConnector $connector;

    public function __construct(DatabaseConnector $connector)
    {
        $this->connector = $connector;
    }

    public static function where($field, $operator, $value)
    {
        $table = Arr::get(get_class_vars(get_called_class()), 'table');

        return app(DatabaseConnector::class)->where($table, $field, $operator, $value)
            ->map(function ($item) {
                /** @var Model $model */
                $model = app(get_called_class());
                $model->setAttributes($item);
                return $model->getAttributes();
            });
    }

    /**
     * @return array
     */
    public function getAttributes(): array
    {
        return $this->attributes;
    }

    /**
     * @param array $attributes
     */
    public function setAttributes(array $attributes): void
    {
        $casts = $this->casts ?? [];

        foreach ($attributes as $key => $value) {
            if (in_array($key, array_keys($casts))) {
                if ($casts[$key] === 'array') {
                    $attributes[$key] = json_decode($value, true);
                }
            }
        }

        $this->attributes = $attributes;
    }

    /**
     * @return Collection
     * @throws BindingResolutionException
     */
    public static function all()
    {
        $table = Arr::get(get_class_vars(get_called_class()), 'table');

        return app(DatabaseConnector::class)->all($table)
            ->map(function ($item) {
                /** @var Model $model */
                $model = app(get_called_class());
                $model->setAttributes($item);
                return $model->getAttributes();
            });
    }

    /**
     * @param $data
     * @return array|false
     * @throws BindingResolutionException
     */
    public static function create($data)
    {
        $table = Arr::get(get_class_vars(get_called_class()), 'table');

        /** @var array|false $result */
        $result = app(DatabaseConnector::class)->create($table, $data);

        if ($result === false) {
            return false;
        }

        /** @var Model $model */
        $model = app(get_called_class());

        $model->setAttributes($result);

        return $model->toJSON();
    }

    /**
     * @return array
     */
    public function toJSON()
    {
        return $this->getAttributes();
    }

    /**
     * @param int $id
     * @return array|false
     * @throws BindingResolutionException
     */
    public static function find(int $id)
    {
        $table = Arr::get(get_class_vars(get_called_class()), 'table');

        /** @var array|false $result */
        $result = app(DatabaseConnector::class)->find($table, $id);

        if ($result === false) {
            return false;
        }

        /** @var Model $model */
        $model = app(get_called_class());

        $model->setAttributes($result);

        return $model->toJSON();
    }

    /**
     * @param int $id
     * @param $data
     * @return array|false
     * @throws BindingResolutionException
     */
    public static function update(int $id, $data)
    {
        $table = Arr::get(get_class_vars(get_called_class()), 'table');

        /** @var array|false $result */
        $result = app(DatabaseConnector::class)->update($table, $id, $data);

        if ($result === false) {
            return false;
        }

        /** @var Model $model */
        $model = app(get_called_class());

        $model->setAttributes($result);

        return $model->toJSON();
    }

    /**
     * @param int $id
     * @return bool
     * @throws BindingResolutionException
     */
    public static function delete(int $id)
    {
        $table = Arr::get(get_class_vars(get_called_class()), 'table');

        /** @var array|false $result */
        $result = app(DatabaseConnector::class)->destroy($table, $id);

        if ($result === false) {
            return false;
        }

        return true;
    }
}
