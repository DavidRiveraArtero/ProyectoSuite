<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Ticket;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($tid)
    {
        $comment = Comment::all()->where('ticket_id',$tid);
        return \response($comment, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($tid, Request $request)
    {
        $ticket = Ticket::where('id',$tid)->first();
        if($ticket!=null){
            $request->validate([
                'msg' => 'required||max:255'
            ]);

            $comment = Comment::create([
                'ticket_id' => $tid,
                'author_id' => 1,
                'msg' => $request->msg
            ]);
            return \response($comment,201);
        }
        else {
            return \response(["tid" => "no existe"], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($tid, $id)
    {
        $ticket = Ticket::where('id',$tid)->first();
        if($ticket == null){
            \response("No existe el comentario que quiere ver ni el ticket");
        }
        else{
            $comment = Comment::findOrFail($id);
            return \response($comment);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($tid, Request $request, $id)
    {
        Comment::findOrFail($id)->where('ticket_id',$tid)->update($request->all());
        return \response("Comentario actualizado", 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($tid, $id)
    {
        $ticket = Ticket::where('id',$tid)->first();
        if($ticket == null){
            \response("No existe el comentario que quiere ver ni el ticket");
        }
        else{
            Comment::destroy($id);
            return \response(200);
        }
    }
}
