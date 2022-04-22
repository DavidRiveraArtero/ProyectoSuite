<?php

namespace App\Http\Controllers;

use App\Models\Models;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApiModelsController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'manufacturer' => 'required | max:30' ,
            'model' => 'required | max:30',
            'category_id' => 'required',
            'price' => 'required'
        ]);

        $ok = Models::create($request->all());
        if ($ok)
        {
            return redirect('models.index')->whith('success', 'Modelo creado correctamente.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Models  $model
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Model $model)
    {
        return view("models.show", [
            'model' => $model
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Models  $model
     * @return \Illuminate\Http\Response
     */
    public function edit(Model $model)
    {
        return view("models.edit", [
            'model' => $model
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Models  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Model $model)
    {
        $request->validate([
            'manufacturer' => 'required',
            'model' => 'required| max:30',
            'price' => 'required'
        ]);

        return redirect()->route('models.show',$model)->with('success','Success Upadre');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Models  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy(Model $model)
    {
        $model->delete();
        return redirect()->route('models.index')->with('success', 'Model destroyed');
    }
}
