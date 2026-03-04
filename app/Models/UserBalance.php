<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserBalance extends Model
{
    protected $primaryKey = 'user_id';
    public $incrementing = false;
    protected $guarded = [];
}
