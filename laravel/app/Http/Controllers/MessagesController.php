<?php

namespace App\Http\Controllers;

use App\Models\Chats;
use App\Models\Messages;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($cid)
    {
        $messages = Messages::all()->where("chat_id", $cid);
        return \response($messages);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($cid, Request $request)
    {
        $request->validate([
            'message' => 'required | max:255' ,
            'author_id' => 'required'
        ]);

        $messages = Messages::create([
            'message' => $request->message,
            'chat_id' => $cid,
            'author_id' => $request->author_id
        ]);

        return \response($messages);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($cid, $id)
    {
        $messages = Chats::where('id', $cid)->first();
        if ($messages != null)
        {
            $mensaje = Messages::findOrFail($id);
            return  \response($mensaje, 200);
        }
        else{
            return  \response("Mensaje actualizado");
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($cid, Request $request, $id)
    {
        $messages = Chats::where('id', $cid)->first();
        if ($messages != null)
        {
            $mensaje = Messages::findOrFail($id)->where("chat_id", $cid)->update($request->all());
            return  \response($mensaje, 200);
        }
        else{
            return  \response("Mensaje actualizado", 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Messages::destroy($id);
        return  \response("Ha sido borrado el mensaje: ${id}");
    }
}
