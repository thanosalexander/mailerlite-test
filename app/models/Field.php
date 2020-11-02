<?php


namespace App\Models;


class Field extends Model
{
    public const TYPE_DATE = 'date';
    public const TYPE_NUMBER = 'number';
    public const TYPE_STRING = 'string';
    public const TYPE_BOOLEAN = 'boolean';
    public const TYPE_LIST = 'array';

    protected $table = 'fields';

    /**
     * @var array
     */
    protected $fillable = [
        "title",
        "key",
        "type",
        "extra"
    ];

    protected $casts = [
        "extra" => "array"
    ];

    /**
     * @return string[]
     */
    public static function types()
    {
        return [
            self::TYPE_DATE => 'date',
            self::TYPE_NUMBER => 'number',
            self::TYPE_STRING => 'string',
            self::TYPE_BOOLEAN => 'boolean',
            self::TYPE_LIST => 'array',
        ];
    }
}
