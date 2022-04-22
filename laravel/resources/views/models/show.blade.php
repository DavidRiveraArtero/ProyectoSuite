@extends('layouts.app')

@section('content')
    <div class="container">
        @if(session()->has('success'))
            <div class="alert alert-success">
                {{ session()->get('success') }}
            </div>
        @endif
        <h1 style="text-align: center; font-weight: bold;">Categoria actual</h1>
        <div style="width: 50%; margin: 0% auto;margin-top:50px;">
            <form method="post" action="{{route('models.destroy',$models)}}">
                @csrf
                @method('delete')
                <label style="float:left;padding-top: 18px; margin-left: 160px; margin-right: 10px">{{$models->name}}</label>

                <div style="float:left; padding-top: 10px;">
                    <a style="margin-right: 20px;" href="{{route("models.edit",$models)}}" type="button" class="btn btn-primary">Editar</a>
                    <button class="btn btn-danger">Eliminar</button>
                </div>
            </form>
        </div>

    </div>
@endsection

