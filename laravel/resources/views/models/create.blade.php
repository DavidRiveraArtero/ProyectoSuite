<html>
    <body>
        <form method="post" action="{{route('models.store')}}" enctype="multipart/form-data">
            @csrf
            <p>Manufacturer:</p>
            <input type="text" name="manufacturer">
            <p>Model:</p>
            <input type="text" name="model">
            <p>Photo_id:</p>
            <input type="text" name="photo_id"> // No debe de estar
            <p>Category:</p>
            <select name="categoria">
                <option>aa</option>
                @foreach($categories as $category)
                <option>
                    {{$category->name}}
                </option>
                @endforeach
            </select>
            <p>Price:</p>
            <input type="text" name="price">

            <button type="submit">Enviar</button>
        </form>
    </body>
</html>
