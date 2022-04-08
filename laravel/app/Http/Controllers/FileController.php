<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Barryvdh\Debugbar\Facades\Debugbar;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("files.index", [
            "files" => File::all()
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
        return view("files.create");
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

            return redirect()->route('files.show',$file)->with('success',"File successfully saved");

        }else{
            Debugbar::debug("No existe la ruta");
            return redirect()->route('files.create')->with('error', 'Error uploading file');
        }

        return view("files.create");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\File  $file
     *
     * @return \Illuminate\Http\Response
     */
    public function show(File $file)
    {

        return view("files.show", [
            'file' => $file
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function edit(File $file)
    {
        return view("files.edit", [
            'file' => $file
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, File $file)
    {
        $request->validate([
            'file' => 'required| max:2024'
        ]);
        Debugbar::debug("Tarea Actualizada");

        Debugbar::debug($file);

        $upload = $request->file('file');
        $fileName = $upload->getClientOriginalName();
        $fileSize = $upload->getSize();
        $uploadName = time() . '_' . $fileName;

        $filePath = $upload->storeAs(
            'uploads',
            $uploadName,
            'public'
        );

        if(\Storage::disk('public')->exists($filePath)) {
            $fullPath = \Storage::disk('public')->path($filePath);
            $ok = $file->updateOrFail([
                'filepath' => $filePath,
                'filesize'=> $fileSize
            ]);
        }

        Debugbar::debug($ok ? "Desat!" : "Not working! :(");
        Debugbar::debug($file);

        return redirect()->route('files.show',$file)->with('success','Success Upadre');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function destroy(File $file)
    {
        Debugbar::debug($file);
        $ok = Storage::disk('public')->delete($file->filepath);
        Debugbar::debug($ok);
        $file->delete();
        return redirect()->route('files.index')->with('success', 'File destroyed');

    }
}
