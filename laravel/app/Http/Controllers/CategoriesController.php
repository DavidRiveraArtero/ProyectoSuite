<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Models;
use Illuminate\Http\Request;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Support\Facades\Storage;


class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("categories.index", [
            "categories" => Categories::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('categories.create');

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
        ]);

        $ok = Categories::create($request->all());
        if ($ok)
        {
            return redirect()->route('categories.index')->with('success', 'Categoria creada correctamente.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categories  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Categories $category)
    {
        Debugbar::debug($category->name);
        return view("categories.show", [
            'categories' =>$category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categories  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Categories $category)
    {
        return view("categories.edit", [
            'categories' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categories  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categories $category)
    {
        $request->validate([
            'name' => 'required| max:30'
        ]);

        $ok = $category->updateOrFail([
            'name' => $request->name
        ]);

        return redirect()->route('categories.show',$category)->with('success','Success Upadre');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categories  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categories $category)
    {
        Models::deleted($category);
        $category->delete();
        return redirect()->route('categories.index')->with('success', 'Category destroyed');
    }
}
