@extends('layouts.app');

@section('content')
    <style>
        input[type=file]{
            padding:10px;
            background:#2d2d2d;}
    </style>
        <div class="container">
            @if(session()->has('success'))
                <div class="alert alert-success">
                    {{ session()->get('success') }}
                </div>
            @endif
            <h1 style="text-align: center; margin-bottom: 5%">Editar categoria</h1>
            <div style="float: left; width: 50%">
                <h2 style="text-align: center">Categoria actual</h2>
                <label>{{$categories->name}}</label>
            </div>
            <div style="float: left">
                <h2 style="text-align: center">Nueva categoria</h2>
                <form method="post" action="{{route('categories.update',$categories)}}" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <label>Nombre de la categoria: </label>
                    <input type="text" name="name"/>
                    <button type="submit" class="btn btn-primary">Editar</button>
                </form>
            </div>
                <img id="blah" src="http://placehold.it/180" alt="your image" />
        </div>
@endsection


