<html>
    <body>
        <form method="post" action="{{route('companies.store')}}" enctype="multipart/form-data">
            @csrf
            <input type="company" name="company">
            <button type="submit">Enviar</button>
        </form>
    </body>
</html>
