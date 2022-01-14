// --------- Leer la Cookie ---------

function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1) {micookie=lista[i]}
        }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual+1);
    return valor;
}

// --------- Leer la cookie para saber su valor ---------
var fondo = leerCookie("fondo");
var img_color = leerCookie("img_color_borde");
var img_borde = leerCookie("img_tam_borde");

console.log("La cookie fondo: ",fondo);
console.log("La cookie img_color_borde: ",img_color);
console.log("La cookie img_tam_borde: ",img_borde);

// --------- Implementación de los valores en el style ---------
document.body.style.backgroundColor = fondo;
imgs = document.querySelectorAll("img");
for (i=0; i< imgs.length; i++)
{
    document.getElementsByTagName("img")[i].style.border = img_borde + " solid " + img_color ;
}