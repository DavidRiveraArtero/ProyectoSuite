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
                    <div class="card-header">{{ __('Companies') }}</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <td scope="col">ID</td>
                                <td scope="col">Name</td>
                                <td scope="col">Phone</td>
                                <td scope="col">Email</td>
                                <td scope="col">Logo_id</td>
                                <td scope="col">Created</td>
                                <td scope="col">Updated</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($companies as $company)
                                <tr>
                                    <td><a href="{{route("companies.show",$company)}}">{{ $company->id }}</a></td>
                                    <td>{{ $company->name }}</td>
                                    <td>{{ $company->phone }}</td>
                                    <td>{{ $company->email }}</td>
                                    <td>{{ $company->logo_id }}</td>
                                    <td>{{ $company->created_at }}</td>
                                    <td>{{ $company->updated_at }}</td>
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
