<?php

namespace App\Http\Controllers;
use App\Models\Users;
use App\Http\Resources\Users as UsersResource;
use App\Http\Resources\UsersCollection as UsersCollection;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        return new UsersCollection(Users::all());
    }

    public function show($id)
    {
        return new UsersResource(Users::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $player = Users::create($request->all());

        return (new UsersResource($player))
                ->response()
                ->setStatusCode(201);
    }
    public function update(Request $request, $id)
    {
        // Validação dos dados do request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
        ]);

        // Encontra o usuário pelo ID
        $user = Users::findOrFail($id);

        // Atualiza os campos
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        // Salva as alterações
        $user->save();

        return response()->json(['message' => 'Usuário atualizado com sucesso'], 200);
    }
    public function delete($id)
    {
        $user = Users::findOrFail($id);
        $user->delete();

        return response()->json(null, 204);
    }

}
