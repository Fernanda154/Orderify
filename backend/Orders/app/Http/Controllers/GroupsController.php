<?php

namespace App\Http\Controllers;
use App\Models\Groups;
use App\Http\Resources\Groups as GroupResource;
use App\Http\Resources\GroupsCollection as GroupCollection;
use Illuminate\Http\Request;

class GroupsController extends Controller
{
    public function index()
    {
        return new GroupCollection(Groups::all());
    }

    public function show($id)
    {
        return new GroupResource(Groups::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $group = Groups::create($request->all());

        return (new GroupResource($group))
                ->response()
                ->setStatusCode(201);
    }
    public function update(Request $request, $id)
    {
        // Validação dos dados do request
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Encontra o usuário pelo ID
        $group = Groups::findOrFail($id);

        // Atualiza os campos
        $group->name = $request->input('name');
        // Salva as alterações
        $group->save();

        return response()->json(['message' => 'Grupo atualizado com sucesso'], 200);
    }
    public function delete($id)
    {
        $user = Groups::findOrFail($id);
        $user->delete();

        return response()->json(null, 204);
    }

}
