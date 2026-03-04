<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PayoutMethod extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'fields_schema' => 'array',
        ];
    }
}
