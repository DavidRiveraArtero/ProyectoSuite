<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Models;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ModelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("models.index", [
            "models" => Models::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('models.create', [
            'categories' => Categories::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $id = Categories::all()->where('name', $request->categoria);

        $request->validate([
            'manufacturer' => 'required | max:30' ,
            'model' => 'required | max:30',
            'categoria' => 'required',
            'price' => 'required'
        ]);


        $ok = Models::create([
            'manufacturer' => $request->manufacturer ,
            'model' => $request->model,
            'category_id' => $id[0]->id,
            'price' => $request->price
        ]);
        if ($ok)
        {
            return redirect()->route('models.index')->with('success', 'Modelo creado correctamente.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Models  $model
     * @return \Illuminate\Http\Response
     */
    public function show(Models $model)
    {
        $a = Models::find(2);
        #dd($a);
        #dd($models);
        return view("models.show", [
            'models' =>$model
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Models  $models
     * @return \Illuminate\Http\Response
     */
    public function edit(Models $models)
    {
        return view("models.edit", [
            'models' => $models
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Models  $models
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Models $models)
    {
        $request->validate([
            'manufacturer' => 'required | max:30' ,
            'model' => 'required | max:30',
            'category_id' => 'required',
            'price' => 'required'

        ]);

        $ok = $models->updateOrFail([
            'manufacturer' => $request->manufacturer,
            'model' => $request->model,
            'category_id' => $request->categoria,
            'price' => $request->price
        ]);

        return redirect()->route('models.show',$models)->with('success','Success Upadre');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Models  $models
     * @return \Illuminate\Http\Response
     */
    public function destroy(Models $models)
    {
        Models::deleted($models);
        $models->delete();
        return redirect()->route('models.index')->with('success', 'Model destroyed');
    }
}
