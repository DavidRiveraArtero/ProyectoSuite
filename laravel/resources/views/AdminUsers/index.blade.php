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
                                <td scope="col">Email</td>
                                <td scope="col">Role</td>
                                <td scope="col">Created</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($users as $user)
                                <tr>
                                    <td><a href="{{route("users.show",$user)}}">{{ $user->id }}</a></td>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->email }}</td>

                                    <td>{{ $user->role_id }}</td>
                                    <td>{{ $user->created_at }}</td>
                                </tr>
                            @endforeach
                            </tbody>

                        </table>
                        <a class="btn btn-success" href="{{route("users.create")}}">Crear User</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
