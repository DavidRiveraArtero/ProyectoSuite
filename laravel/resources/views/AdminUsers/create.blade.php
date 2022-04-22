<html>
    <body>
        <form method="post" action="{{route('users.store')}}">
            @csrf
            <input type="text" name="name" placeholder="Nombre Usuario">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Enviar</button>
        </form>
    </body>
</html>
