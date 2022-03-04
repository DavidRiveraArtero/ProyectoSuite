<?php

namespace App\Http\Controllers;

use App\Models\Chats;
use App\Models\Messages;
use Illuminate\Http\Request;

class ChatsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $chats = Chats::all();
        return \response($chats, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required | max:30' ,
            'author_id' => 'required'
        ]);
        $chat = Chats::create($request->all());
        return \response($chat);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
            $mensaje = Chats::findOrFail($id);
            return  \response($mensaje, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
            $mensaje = Chats::findOrFail($id)->update($request->all());
            return  \response($mensaje, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Chats::destroy($id);
        return  \response("Ha sido borrado el mensaje: ${id}", 200);
    }
}
