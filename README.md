# MAILERLITE TEST
Test created for mailerlite hiring process.

----
## Introduction
The app has a backend in php which uses some `illuminate` packages mainly inspired from Laravel's echosystem.
The frontend is created using 'VueJs 3'
 

----
## Installation

1. Download the project or `git clone`
1. Create `.env` file from `.env.example` file and adjust database parameters
1. In order to start php and serve the api, you have to configure the to`VUE_APP_API_URL`, with `/api` suffix, which is located in `.env`  
1. Run `composer install` to fetch php packages and `npm install` to download node packages.
1. Now in order to start up frontend, you'll have to run from root folder `serve -l 9000 ./dist/`  (change 9000 depending tyo your needs)
1. Start php server `php -S localhost:8080 -t public/`  (you can change 8080 depending your needs but change accordingly to `.env` in order to match as frontend uses this url as base api url)
1. Open your browser and navigate in http://127.0.0.1:9000 and you're ready
1. In order to use database i've included `database/mailerlite.full.sql` which has pre-inserted the fields 