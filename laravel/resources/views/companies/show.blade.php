@extends('layouts.app')

@section('content')
    <div class="container">
        @if(session()->has('success'))
            <div class="alert alert-success">
                {{ session()->get('success') }}
            </div>
        @endif
        <h1 style="text-align: center; font-weight: bold;">Foto Actual</h1>
        <div style="width: 50%; margin: 0% auto">
            <h1 style="text-align: center; font-weight: bold;">TU PADRE</h1>


            <a style="margin-right: 100px" href="{{route("companies.edit",$company)}}" type="button" class="btn btn-primary">Editar</a>

            <form method="post" action="{{route('companies.destroy',$company)}}">
                @csrf
                @method('delete')
                <button class="btn btn-danger">Eliminar</button>
            </form>
        </div>
    </div>
@endsection

