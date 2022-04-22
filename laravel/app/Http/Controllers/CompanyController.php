<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Barryvdh\Debugbar\Facades\Debugbar;
use App\Models\File;

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
            "companies" => Company::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        Debugbar::debug("dentro de create");
        return view("companies.create",[
            'files' => File::all()
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







        Debugbar::debug("dentro");
        Debugbar::debug($request->file);
        // Validar fitxer binari
        $request->validate([
            'file' => 'required| max:2024'
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

            return redirect()->route('companies.show',$file)->with('success',"File successfully saved");

        }else{
            Debugbar::debug("No existe la ruta");
            return redirect()->route('companies.create')->with('error', 'Error uploading file');
        }

        return view("companies.create");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        return view("companies.show", [
            'company' => $company
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        return view("companies.edit", [
            'company' => $company
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        Debugbar::debug($company);
        $ok = Storage::disk('public')->delete($company->filepath);
        Debugbar::debug($ok);
        $company->delete();
        return redirect()->route('companies.index')->with('success', 'Company destroyed');
    }
}