<?php


namespace App\Models;


class Subscriber extends Model
{
    public const STATE_ACTIVE = 'active';
    public const STATE_UNSUBSCRIBED = 'unsubscribed';
    public const STATE_JUNK = 'junk';
    public const STATE_BOUNCED = 'bounced';
    public const STATE_UNCONFIRMED = 'unconfirmed';

    protected $table = 'subscribers';

    /**
     * @var array
     */
    protected $fillable = [
        "email",
        "address",
        "name",
        "state",
    ];

}
