<?php


namespace App\Models;


class SubscriberField extends Model
{
    protected $table = 'subscriber_fields';

    /**
     * @var array
     */
    protected $fillable = [
        "subscriber_id",
        "field_id",
        "value",
    ];

}
