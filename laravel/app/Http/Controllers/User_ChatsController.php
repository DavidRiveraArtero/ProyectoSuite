<?php

namespace App\Http\Controllers;

use App\Models\User_chats;
use Illuminate\Http\Request;

class User_ChatsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $chats = User_chats::all();
        return \response($chats, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($cid ,Request $request)
    {
        $idChats = User_chats::where('id', $cid)->first();

        if($idChats!=null)
        {
            $request->validate([
                'name' => 'required | max:30' ,
                'author_id' => 'required'
            ]);
            $chats = User_chats::create([
                'name' => $request ->body ,
                'author_id' => $cid
            ]);

            return \response(["cid" => "existe"], 201);
        }
        else{
            return \response(["cid" => "no existe"], 404);

        }

        $chats = User_chats::create($request->all());
        return \response($chats);
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
