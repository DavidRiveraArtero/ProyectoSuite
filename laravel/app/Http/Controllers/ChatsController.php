<?php

namespace App\Http\Controllers;

use App\Models\Chats;
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

        /*        $idChats = Chats::where('id', $cid)->first();

        if($idChats!=null)
        {
            $request->validate([
                'name' => 'required | max:30' ,
                'author_id' => 'required'
            ]);
            $chats = Chats::create([
                'name' => $request ->body ,
                'author_id' => $cid
            ]);
            return \response($chats, 201);
        }
        else{
            return \response(["cid" => "no existe"], 404);

        }*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
