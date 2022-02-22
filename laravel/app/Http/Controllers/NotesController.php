<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notes;
use App\Models\Task;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = Notes::all();
        return \response($notes,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($tid, Request $request)
    {
        $task = Task::where('id', $tid)->first();
        if($task!=null){
            $request->validate([
                'body'=>'required|max:255'

            ]);
            // return \response(["tid" => $tid]);
            $nota = Notes::create([
                "body" => $request->body,
                "task_id" => $tid
            ]);
            return \response($nota,201);
        }else{
            return \response(["tid" => 'no existe'], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($tid,$id)
    {
        $task = Task::where('id', $tid)->first();
        if($task!=null){
            $notes = Notes::findOrFail($id);
            return \response($notes);
        }else{
            return \response(["tid" => 'no existe'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($tid,Request $request, $id)
    {
        $task = Task::where('id', $tid)->first();
        if($task!=null){
            $notes = Notes::findOrFail($id)->update($request->all());
            return \response($notes);
        }else{
            return \response(["tid" => 'no existe'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($tid,$id)
    {
        $task = Task::where('id', $tid)->first();
        if($task!=null){
            Notes::destroy($id);
            return \response("La tarea con id :${id} ha sido destruido");
        }else{
            return \response(["tid" => 'no existe'], 404);
        }
    }
}
