<?php

use Monolog\Handler\NullHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\SyslogUdpHandler;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    |
    | This option defines the default log channel that gets used when writing
    | messages to the logs. The name specified in this option should match
    | one of the channels defined in the "channels" configuration array.
    |
    */

    'default' => env('LOG_CHANNEL', 'stack'),

    /*
    |--------------------------------------------------------------------------
    | Deprecations Log Channel
    |--------------------------------------------------------------------------
    |
    | This option controls the log channel that should be used to log warnings
    | regarding deprecated PHP and library features. This allows you to get
    | your application ready for upcoming major versions of dependencies.
    |
    */

    'deprecations' => env('LOG_DEPRECATIONS_CHANNEL', 'null'),

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log channels for your application. Out of
    | the box, Laravel uses the Monolog PHP logging library. This gives
    | you a variety of powerful log handlers / formatters to utilize.
    |
    | Available Drivers: "single", "daily", "slack", "syslog",
    |                    "errorlog", "monolog",
    |                    "custom", "stack"
    |
    */

    'channels' => [
        'stack' => [
            'driver' => 'stack',
<<<<<<< HEAD
            'channels' => ['file','firephp','errorlog'],
=======
            'channels' => ['file','firephp', 'errorlog'],
>>>>>>> 191dc8f55391f64227c1135b8a169b9bf0d81457
            'ignore_exceptions' => false,
        ],

        'file' => [
            'driver' => 'single',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL', 'debug'),
        ],

        'firephp' => [
            'driver' => 'monolog',
            'hander' => Monolog\Hander\FirePHPHander::class,
        ],

        'errorlog' => [
<<<<<<< HEAD
            'driver' => 'errorlog',
            'level' => env('LOG_LEVEL', 'debug'),
        ]
=======
            'driver' => 'slack',
            'level' => env('LOG_LEVEL', 'critical'),
        ],

<<<<<<< HEAD
        'emergency' => [
            'path' => storage_path('logs/laravel.log'),
        ],
        'file'=> [
            'driver' => 'single',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL','debug'),
        ],
        'firephp' => [
            'driver' => 'monolog',
            'handler' => Monolog\Handler\FirePHPHandler::class
        ],
        'errorlog' => [
            'driver' => 'errorlog',
            'level' => env('LOG_LEVEL', 'debug'),
        ]
=======
>>>>>>> 191dc8f55391f64227c1135b8a169b9bf0d81457
>>>>>>> 02491615fc0b721ab6affa301283d014e9edf687
    ],
];
