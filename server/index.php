<?php


require __DIR__.'/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createMutable(dirname(__DIR__));
$dotenv->load();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Origin');

/** @var \App\Library\Application $app */
$app = new \App\Library\Application($_ENV['APP_BASE_PATH'] ?? dirname(__DIR__));

/** @var \Illuminate\Http\Request $request */
$request = Illuminate\Http\Request::capture();

/** @var \Illuminate\Http\Response $response */
$response = app('router')->dispatch($request);
