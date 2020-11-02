<?php


namespace App\Providers;


use Illuminate\Support\Facades\Route;

class ServiceProvider
{
    public function boot()
    {
        Route::group(base_path('routes/web.php'));
    }
}
