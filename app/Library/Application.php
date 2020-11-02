<?php


namespace App\Library;

use Illuminate\Container\Container;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Contracts\Queue\Factory as QueueFactoryContract;
use Illuminate\Events\Dispatcher;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Filesystem\FilesystemManager;
use Illuminate\Routing\Router;
use Illuminate\Translation\FileLoader;
use Illuminate\Translation\Translator;
use Illuminate\Validation\Factory;

class Application extends Container
{
    protected ?string $basePath = null;

    protected $namespace = 'App\Http\Controllers';

    /**
     * Create a new Illuminate application instance.
     *
     * @param string|null $basePath
     * @return void
     */
    public function __construct($basePath = null)
    {
        if ($basePath) {
            $this->setBasePath($basePath);
        }

        $this->registerBaseBindings();
        $this->registerBaseServiceProviders();
        $this->registerDatabase();
        $this->registerRoutes();

        $this->singleton('files', function () {
            return new Filesystem();
        });

        $this->singleton('translation.loader', function ($app) {
            return new FileLoader($app['files'], resource_path('lang'));
        });


        $this->singleton('translator', function ($app) {
            $loader = $app['translation.loader'];

            $locale = 'en';

            $trans = new Translator($loader, $locale);

            return $trans;
        });

        $this->singleton('validator', function ($app) {
            $validator = new Factory($app['translator'], $app);
            return $validator;
        });
    }

    /**
     * Set the base path for the application.
     *
     * @param string $basePath
     * @return Application
     */
    public function setBasePath($basePath)
    {
        $this->basePath = rtrim($basePath, '\/');

        $this->bindPathsInContainer();

        return $this;
    }

    /**
     * Bind all of the application paths in the container.
     *
     * @return void
     */
    protected function bindPathsInContainer()
    {
        $this->instance('path', $this->path());
        $this->instance('path.base', $this->basePath());
        $this->instance('path.config', $this->configPath());
        $this->instance('path.public', $this->publicPath());
        $this->instance('path.storage', $this->storagePath());
        $this->instance('path.database', $this->databasePath());
        $this->instance('path.resources', $this->resourcePath());
    }

    /**
     * Get the path to the application "app" directory.
     *
     * @param string $path
     * @return string
     */
    public function path($path = '')
    {
        $appPath = $this->basePath . DIRECTORY_SEPARATOR . 'app';

        return $appPath . ($path ? DIRECTORY_SEPARATOR . $path : $path);
    }

    /**
     * Get the base path of the Laravel installation.
     *
     * @param string $path Optionally, a path to append to the base path
     * @return string
     */
    public function basePath($path = '')
    {
        return $this->basePath . ($path ? DIRECTORY_SEPARATOR . $path : $path);
    }

    /**
     * Get the path to the application configuration files.
     *
     * @param string $path Optionally, a path to append to the config path
     * @return string
     */
    public function configPath($path = '')
    {
        return $this->basePath . DIRECTORY_SEPARATOR . 'config' . ($path ? DIRECTORY_SEPARATOR . $path : $path);
    }

    /**
     * Get the path to the public / web directory.
     *
     * @return string
     */
    public function publicPath()
    {
        return $this->basePath . DIRECTORY_SEPARATOR . 'public';
    }

    /**
     * Get the path to the storage directory.
     *
     * @return string
     */
    public function storagePath()
    {
        return $this->basePath . DIRECTORY_SEPARATOR . 'storage';
    }

    /**
     * Get the path to the database directory.
     *
     * @param string $path Optionally, a path to append to the database path
     * @return string
     */
    public function databasePath($path = '')
    {
        return ($this->basePath . DIRECTORY_SEPARATOR . 'database') . ($path ? DIRECTORY_SEPARATOR . $path : $path);
    }

    /**
     * Get the path to the resources directory.
     *
     * @param string $path
     * @return string
     */
    public function resourcePath($path = '')
    {
        return $this->basePath . DIRECTORY_SEPARATOR . 'resources' . ($path ? DIRECTORY_SEPARATOR . $path : $path);
    }

    /**
     * Register the basic bindings into the container.
     *
     * @return void
     */
    protected function registerBaseBindings()
    {
        static::setInstance($this);

        $this->instance('app', $this);

        $this->instance(Container::class, $this);
    }

    protected function registerBaseServiceProviders()
    {
        $this->singleton('events', function ($app) {
            return (new Dispatcher($app))->setQueueResolver(function () use ($app) {
                return $app->make(QueueFactoryContract::class);
            });
        });

        $this->singleton('router', function ($app) {
            return new Router($app['events'], $app);
        });
    }

    private function registerDatabase()
    {
        $this->singleton(DatabaseConnector::class, function ($app) {
            return new Database($app);
        });
    }

    protected function registerRoutes()
    {
        app('router')
            ->namespace($this->namespace . '\API')
            ->prefix('api')
            ->as('api.')
            ->group(base_path('routes/api.php'));
    }

    /**
     * Register the core class aliases in the container.
     *
     * @return void
     */
    public function registerCoreContainerAliases()
    {
        foreach (
            [
                'config' => [\Illuminate\Config\Repository::class, Repository::class],
                'files' => [Filesystem::class],
                'filesystem' => [
                    FilesystemManager::class,
                    \Illuminate\Contracts\Filesystem\Factory::class
                ],
                'filesystem.disk' => [\Illuminate\Contracts\Filesystem\Filesystem::class],
                'hash.driver' => [Hasher::class],
                'translator' => [
                    Translator::class,
                    \Illuminate\Contracts\Translation\Translator::class
                ],
                'validator' => [Factory::class, \Illuminate\Contracts\Validation\Factory::class],
            ] as $key => $aliases
        ) {
            foreach ($aliases as $alias) {
                $this->alias($key, $alias);
            }
        }
    }


}

