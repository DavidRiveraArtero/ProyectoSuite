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
                                <td scope="col">Model</td>
                                <td scope="col">Manufacturer</td>
                                <td scope="col">Photo_id</td>
                                <td scope="col">Category_id</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($models as $model)
                                <tr>
                                    <td><a href="{{route("models.show",$model)}}">{{ $model->id }}</a></td>
                                    <td>{{ $model->model }}</td>
                                    <td>{{ $model->manufacturer }}</td>
                                    <td>{{ $model->photo_id }}</td>
                                    <td>{{ $model->category_id }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
