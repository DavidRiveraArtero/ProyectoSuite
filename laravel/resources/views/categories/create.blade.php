<html>
    <body>
        <form method="post" action="{{route('categories.store')}}" enctype="multipart/form-data">
            @csrf
            <p>Nombre de la categoria:</p>
            <input type="text" name="name">
            <button type="submit">Enviar</button>
        </form>
    </body>
</html>
