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
                                <td scope="col">Hours</td>
                                <td scope="col">Price</td>
                                <td scope="col">Company_id</td>
                                <td scope="col">Created</td>
                                <td scope="col">Updated</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($deliveries as $delivery)
                                <tr>
                                    <td><a href="{{route("companies.show",$delivery)}}">{{ $delivery->id }}</a></td>
                                    <td>{{ $delivery->hours }}</td>
                                    <td>{{ $delivery->price }}</td>
                                    <td>{{ $delivery->company_id }}</td>
                                    <td>{{ $delivery->created_at }}</td>
                                    <td>{{ $delivery->updated_at }}</td>
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
