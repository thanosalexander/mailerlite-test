<?php


use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

if (!function_exists('app')) {
    /**
     * Get the available container instance.
     *
     * @param string|null $abstract
     * @param array $parameters
     * @return Container
     * @throws BindingResolutionException
     */
    function app($abstract = null, array $parameters = [])
    {
        if (is_null($abstract)) {
            return Container::getInstance();
        }

        return Container::getInstance()->make($abstract, $parameters);
    }
}

if (!function_exists('base_path')) {
    /**
     * Get the path to the base of the install.
     *
     * @param string $path
     * @return string
     * @throws BindingResolutionException
     */
    function base_path($path = '')
    {
        return app()->basePath($path);
    }
}


if (!function_exists('resource_path')) {
    /**
     * Get the path to the resources folder.
     *
     * @param string $path
     * @return string
     */
    function resource_path($path = '')
    {
        return app()->resourcePath($path);
    }
}


if (!function_exists('response')) {
    /**
     * Return a new response from the application.
     *
     * @param View|string|array|null $content
     * @param int $status
     * @param array $headers
     * @return Response|ResponseFactory
     */
    function response($content = '', $status = 200, array $headers = [])
    {
        return new Response($content, $status, $headers);
    }
}
