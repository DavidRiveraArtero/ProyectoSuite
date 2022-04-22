@extends('layouts.app')

@section('content')
    <div class="container">
        @if(session()->has('success'))
            <div class="alert alert-success">
                {{ session()->get('success') }}
            </div>
        @endif
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Files') }}</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <td scope="col">ID</td>
                                <td scope="col">Name</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($categories as $category)
                                <tr>
                                    <td><a href="{{route("categories.show",$category)}}">{{ $category->id }}</a></td>
                                    <td>{{ $category->name }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <a style="margin-right: 20px;" href="{{route("categories.create")}}" type="button" class="btn btn-primary">Crear</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
