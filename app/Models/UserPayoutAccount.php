<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPayoutAccount extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'details' => 'array',
            'is_default' => 'boolean',
        ];
    }
}
