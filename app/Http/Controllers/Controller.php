<?php


namespace App\Http\Controllers;


use Symfony\Component\HttpFoundation\Response;

class Controller
{
    /**
     * @param array $data
     * @param string|null $message
     * @return void
     */
    public function successResponseJson(array $data = [], string $message = null)
    {
        return $this->responseJson(Response::HTTP_OK, $data, $message);
    }

    /**
     * @param int $code
     * @param array $data
     * @param string|null $message
     * @return void
     */
    private function responseJson(int $code, array $data = [], string $message = null)
    {
        http_response_code($code);

        echo json_encode([
            'status' => $code === 200 ? 'success' : 'error',
            'data' => $data,
            'message' => $message
        ]);
    }

    /**
     * @param int $code
     * @param array $data
     * @param string|null $message
     * @return void
     */
    public function failedResponseJson(int $code, array $data = [], string $message = null)
    {
        return $this->responseJson($code, $data, $message);
    }
}
