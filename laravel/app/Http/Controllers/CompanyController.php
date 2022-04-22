<?php

namespace App\Http\Controllers;

use App\Models\Companies;
use Faker\Provider\Company;
use Illuminate\Http\Request;
use Barryvdh\Debugbar\Facades\Debugbar;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("companies.index", [
            "companies" => Companies::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        Debugbar::debug("dentro de create");
        return view("companies.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$request->validate([
            //'name' => 'required',
            //'phone' => 'required',
            //'email' => 'required',
          //  'logo_id' => 'required'
        //]);

        //$companies = Companies::create($request->all());
        //return \response($companies);

        Debugbar::debug("dentro");
        // Validar fitxer binari
        $request->validate([
            'logo_id' => 'required'
        ]);
        // Pujar fitxer binari al disc dur

        $upload = $request->file('file');
        $fileName = $upload->getClientOriginalName();
        $fileSize = $upload->getSize();
        Debugbar::debug("Storing file '{$fileName}' ($fileSize)...");

        $uploadName = time() . '_' . $fileName;
        $filePath = $upload->storeAs(
            'uploads',
            $uploadName,
            'public'
        );

        if(\Storage::disk('public')->exists($filePath)){
            Debugbar::debug("Existe la ruta");
            $fullPath = \Storage::disk('public')->path($filePath);
            $file = File::create([
                'filepath' => $filePath,
                'filesize' => $fileSize
            ]);

            return redirect()->route('companies.show',$file)->with('success',"Company successfully saved");

        }else{
            Debugbar::debug("No existe la ruta");
            return redirect()->route('companies.create')->with('error', 'Error uploading company');
        }

        return view("companies.create");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Companies  $companies
     * @return \Illuminate\Http\Response
     */
    public function show(Companies $companies)
    {
        //dd($companies);

        return view("companies.show", [
            'company' => $companies
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Companies  $companies
     * @return \Illuminate\Http\Response
     */
    public function edit(Companies $companies)
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
        Companies::findOrFail($id)->update($request->all());
        return \response("Company actualizado");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Companies  $companies
     * @return \Illuminate\Http\Response
     */
    public function destroy(Companies $companies)
    {
        Debugbar::debug($companies);
        $ok = Storage::disk('public')->delete($companies->filepath);
        Debugbar::debug($ok);
        $companies->delete();
        return redirect()->route('companies.destroy')->with('success', 'Company destroyed');
    }
}
