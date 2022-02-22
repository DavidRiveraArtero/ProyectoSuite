// CREEM FORMULARI
export function crearFormulariHtml()
{
   var html = `

        <h1>HELLO WORLD</h1>

   `

    // DOM
    var div = document.createElement("div");
    div.innerHTML = html;
    document.body.append(div);
}