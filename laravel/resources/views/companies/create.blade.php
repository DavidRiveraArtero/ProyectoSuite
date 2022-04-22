<html>
    <body>
        <form method="post" action="{{route('companies.store')}}" enctype="multipart/form-data">
            @csrf
            <input type="company" name="company">
            <select>
                @foreach ($files as $file)
                    <option>{{ $file->filepath }}</option>
                @endforeach
            </select>
            <button type="submit">Enviar</button>
        </form>
    </body>
</html>
