<html>
    <body>
        <form method="post" action="{{route('companies.store')}}" enctype="multipart/form-data">
            @csrf
            <input type="company" name="company">
            @foreach ($files as $file)
                <tr>
                    <td><a href="{{route("companies.show",$delivery)}}">{{ $delivery->id }}</a></td>
                    <td>{{ $delivery->hours }}</td>
                </tr>
            @endforeach
            <button type="submit">Enviar</button>
        </form>
    </body>
</html>
