<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Field;
use App\Models\Subscriber;
use App\Models\SubscriberField;
use Exception;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Validation\Validator;

class SubscribersApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     * @throws BindingResolutionException
     */
    public function index()
    {
        $subscribers = Subscriber::all()
            ->map(function ($item) {
                $subscriberFields = SubscriberField::where('subscriber_id', '=', (int)$item['id']);

                $item['fields'] = $subscriberFields->map(function ($field) {
                    $dbField = Field::find($field['field_id']);

                    return array_merge($dbField, [
                        'value' => $field['value']
                    ]);
                });

                return $item;
            });

        return $this->successResponseJson($subscribers->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return void
     * @throws BindingResolutionException
     */
    public function store(Request $request)
    {
        $data = $request->json()->all();


        if (count(Arr::get($data, 'fields', [])) === 0) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [], "There are no fields");
        }

        $validatorData = collect($data['fields'])->map(function ($item) {
            return $item['value'];
        })->toArray();


        /** @var Validator $validator */
        $validator = app('validator')->make($validatorData, [
            'email' => ['required', 'string', 'max:255', 'email:rfc,dns'],
        ]);

        if ($validator->fails()) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY,
                $validator->getMessageBag()->toArray(), "You have validation errors");
        }

        try {
            /** @var Subscriber $subscriber */
            $subscriber = Subscriber::create([]);

            foreach ($data['fields'] as $fieldsAlias => $field) {
                SubscriberField::create([
                    "subscriber_id" => Arr::get($subscriber, 'id'),
                    "field_id" => Arr::get($field, 'id'),
                    "value" => Arr::get($field, 'value'),
                ]);
            }

            if (!$subscriber) {
                return $this->failedResponseJson(Response::HTTP_BAD_REQUEST);
            }

            $subscriber = array_merge($subscriber, $data);

            return $this->successResponseJson($subscriber);
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [],
                "Subscriber could not be created!");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $subscriberId
     * @return void
     */
    public function show(int $subscriberId)
    {
        try {
            /** @var Subscriber $subscriber */
            $subscriber = Subscriber::find($subscriberId);

            $subscriberFields = SubscriberField::where('subscriber_id', '=', $subscriber['id']);

            $subscriber['fields'] = $subscriberFields->map(function ($field) {
                $dbField = Field::find($field['field_id']);

                return array_merge($dbField, [
                    'value' => $field['value'],
                    'subscriber_field_id' => $field['id']
                ]);
            });

            if (!$subscriber) {
                return $this->failedResponseJson(Response::HTTP_NOT_FOUND, [], "Subscriber could not be found!");
            }

            return $this->successResponseJson($subscriber);
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [], "Subscriber could not be found!");
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $subscriberId
     * @return void
     * @throws BindingResolutionException
     */
    public function update(Request $request, int $subscriberId)
    {
        $data = $request->json()->all();

        if (count(Arr::get($data, 'fields', [])) === 0) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [], "There are no fields");
        }

        $validatorData = collect($data['fields'])->map(function ($item) {
            return $item['value'];
        })->toArray();


        /** @var Validator $validator */
        $validator = app('validator')->make($validatorData, [
            'email' => ['required', 'string', 'max:255', 'email:rfc,dns'],
        ]);

        if ($validator->fails()) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY,
                $validator->getMessageBag()->toArray(), "You have validation errors");
        }


        try {
            /** @var Subscriber $subscriber */
            $subscriber = Subscriber::find($subscriberId);

            foreach ($data['fields'] as $field) {
                SubscriberField::update($field['subscriber_field_id'], [
                    "value" => Arr::get($field, 'value'),
                ]);
            }

            if (!$subscriber) {
                return $this->failedResponseJson(Response::HTTP_BAD_REQUEST);
            }

            $subscriber = array_merge($subscriber, $data);

            return $this->successResponseJson($subscriber);
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [],
                "Subscriber could not be updated!");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $subscriberId
     * @return Response
     */
    public function destroy(int $subscriberId)
    {
        try {
            /** @var Subscriber $subscriber */
            $subscriber = Subscriber::find($subscriberId);

            $subscriberFields = SubscriberField::where('subscriber_id', '=', $subscriber['id']);

            foreach ($subscriberFields as $field) {
                SubscriberField::delete($field['id']);
            }

            if (!Subscriber::delete($subscriberId)) {
                return $this->failedResponseJson(Response::HTTP_BAD_REQUEST);
            }

            return $this->successResponseJson();
        } catch (Exception $exception) {
            return $this->failedResponseJson(Response::HTTP_UNPROCESSABLE_ENTITY, [],
                "Subscriber could not be updated!");
        }
    }
}
