<?php

namespace App\Http\Controllers;
use App\Models\Orders;
use App\Http\Resources\Orders as OrdersResource;
use App\Http\Resources\OrdersCollection as OrdersCollection;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function index()
    {
        return new OrdersCollection(Orders::all());
    }

    public function show($id)
    {
        return new OrdersResource(Orders::findOrFail($id));
    }

    public function store(Request $request)
    {

        $order = Orders::create($request->all());

        return (new OrdersResource($order))
                ->response()
                ->setStatusCode(201);
    }
    public function update(Request $request, $id)
    {

        // Encontra o usuário pelo ID
        $order = Orders::findOrFail($id);

        // Atualiza os campos
        $order->user_id = $request->input('user_id');
        $order->title = $request->input('title');
        $order->description = $request->input('description');
        $order->status = $request->input('status');
        // Salva as alterações
        $order->save();

        return response()->json(['message' => 'Ordem atualizada com sucesso'], 200);
    }
    public function delete($id)
    {
        $order = Orders::findOrFail($id);
        $order->delete();
        return response()->json(null, 204);
    }

}
