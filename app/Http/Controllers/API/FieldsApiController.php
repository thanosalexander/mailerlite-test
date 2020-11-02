<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Field;
use Exception;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class FieldsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     * @throws BindingResolutionException
     */
    public function index()
    {
        return $this->successResponseJson(Field::all()->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $data = $request->json()->all();
        $data = array_filter($data);

        /** @var Validator $validator */
        $validator = app('validator')->make($data, [
            'title' => ['required', 'string', 'max:255'],
            'alias' => ['required', 'string', 'max:255', 'alpha_dash'],
            'type' => ['required', 'string', Rule::in(Field::types())],
            'extra' => ['required_if:type,array', 'array', 'min:1'],
            'extra.*.key' => ['required_if:type,array', 'string'],
            'extra.*.value' => ['required_if:type,array', 'string']
        ]);

        if ($validator->fails()) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY,
                $validator->getMessageBag()->toArray(), "You have validation errors");
        }

        try {
            /** @var Field $field */
            $field = Field::create($validator->getData());

            if (!$field) {
                return $this->failedResponseJson(Response::HTTP_BAD_REQUEST);
            }

            return $this->successResponseJson($field);
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [], "Field could not be created!");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $fieldId
     * @return Response
     */
    public function show(int $fieldId)
    {
        try {
            /** @var Field $field */
            $field = Field::find($fieldId);

            if (!$field) {
                return $this->failedResponseJson(Response::HTTP_NOT_FOUND, [], "Field could not be found!");
            }

            return $this->successResponseJson($field);
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [], "Field could not be found!");
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $fieldId
     * @return Response
     */
    public function update(Request $request, int $fieldId)
    {
        $data = $request->json()->all();
        $data = array_filter($data);

        /** @var Validator $validator */
        $validator = app('validator')->make($data, [
            'title' => ['required', 'string', 'max:255'],
            'alias' => ['required', 'string', 'max:255', 'alpha_dash'],
            'type' => ['required', 'string', Rule::in(Field::types())],
            'extra' => ['required_if:type,array', 'array', 'min:1'],
            'extra.*.key' => ['required_if:type,array', 'string'],
            'extra.*.value' => ['required_if:type,array', 'string']
        ]);

        if ($validator->fails()) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY,
                $validator->getMessageBag()->toArray(), "You have validation errors");
        }

        try {
            /** @var Field $field */
            $field = Field::update($fieldId, $validator->getData());

            if (!$field) {
                return $this->failedResponseJson(Response::HTTP_BAD_REQUEST);
            }

            return $this->successResponseJson($field);
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [], "Field could not be updated!");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $fieldId
     * @return Response
     */
    public function destroy(int $fieldId)
    {
        try {
            /** @var Field $field */
            $field = Field::delete($fieldId);

            if (!$field) {
                return $this->failedResponseJson(Response::HTTP_BAD_REQUEST);
            }

            return $this->successResponseJson();
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [], "Field could not be updated!");
        }
    }
}
