@extends('layouts.app')

@section('content')

    <h1 style="text-align: center">Datos Usuario</h1>
    <div style="width: 70%; margin: 0% auto; padding-top: 150px">
        <div style="width: 33%;  margin-left: 200px; float: left">
            <h2 style="text-align: center">Name</h2>
            <h3>{{$user->name}}</h3>
            <hr>
        </div>

        <div style="width: 33%; margin-left: 100px; float: left">
            <h2 style="text-align: center">Role</h2>
            @if($user->role_id == 1)
                <h3>Usuario Basico</h3>
            @elseif($user->role_id == 2)
                <h3>Usuario Coord</h3>
            @elseif($user->role_id == 3)
                <h3>Usuario Admin</h3>
            @endif
            <hr>
        </div>

        <div style="width: 33%;  margin-left: 200px; margin-top: 100px; float: left">
            <h2 style="text-align: center">Email</h2>
            <h3>{{$user->email}}</h3>
            <hr>
        </div>

        <div style="width: 33%;  margin-left: 100px; margin-top: 100px; float: left">
            <h2 style="text-align: center">Password</h2>
            <h3>{{$user->password}}</h3>
            <hr>
        </div>


    </div>

@endsection
