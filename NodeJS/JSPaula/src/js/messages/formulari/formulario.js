import {MessagesList} from "../messegesList";
import {MessagesList as ml} from "../messegesList";
import {Messages} from "../messages";

// let listamensaje = new MessagesList();
let anadir = new MessagesList();


export function creaHTMLFormulariAfegir(listamensaje) {
   
    let html=`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <html>
        <div id="botones">
            <input class="btn btn-outline-success" type="button" id="anadir" value="Añadir">
            <input class="btn btn-outline-primary" type="button" id="listar" value="Listar">
            <input class="btn btn-outline-danger" type="button" id="filtrar" value="Filtrar">
            <br>
            <label id="filtro" hidden>
                <input type="text" name="buscar" id="palabra" required>
                <input class="btn btn-primary" type="button" id="buscar" value="Buscar">
            </label>
        </div>
        <div id="afegir" hidden>
            <label class="txt">Libros: </label>
            <br>
            <br>
            <input type="text" id="id_role" placeholder="id_role">
            <input type="text" id="username" placeholder="username">
            <input type="text" id="password" placeholder="password">
            <br>
            <br>

            <input class="btn btn-primary" type="submit" id="guardar" value="Guardar y aplicar">

            <p>Elije:</p>
            <select name="deporte" id="elegir">
      
            </select>
        </div>
        <br>
    </html>
    `
    var divGeneral = document.createElement("div");
    document.body.appendChild(divGeneral);

    var divTablaActualizada = document.createElement("div");
    document.body.appendChild(divTablaActualizada);

    // CREAR EL INTPUT MOSTRAR LA INFORMACION
    divGeneral.innerHTML=anadir.crearTabla(html, listamensaje);

    // var a = anadir.actuMenssage(id).then((o)=> {
    //     console.log(o);
    //     for (var x=0;x<o.length;x++ )
    //     {
    //         if(o[x].id_usuari == id)
    //         {
    //             o[x].username = cambios
    //             listamensaje.update(id,o[x]);
    //         }
    //     }
    // });

    anadir.actualizarTabla().then((value1)=>
    {
        // --------- Crear la tabla con la información añadida ---------
        document.getElementById("elegir").innerHTML=anadir.rellenarSelect(html, value1);
    })


    // VARIABLES
    var activarEd = true;
    var activarVer = true;
    var activarAfegir = true;
    var activarLista = true;
    var activarFiltro = true;

    var cambios;
    var missatge="^[A-Z a-z 0-9]+";

    // VALIDAR FORMULARIO
    document.querySelector("#guardar").addEventListener("click",() => {

        if (checkForm("#formulario"))
        {    
            // --------- Recoger los valores de configuracion ---------
            var id_role = document.querySelector("#id_role").value;
            var username = document.querySelector("#username").value;
            var password = document.querySelector("#password").value;

                var TablaGeneral = document.getElementById("tablaGeneral");
                TablaGeneral.remove(); //  Eliminar
                
                let html3;
                // Sirve para poder acceder a la base de datos
                anadir.actualizarTabla().then((value) => {
                    // --------- Conseguir el ultimo id ---------
                    var lastIndex = 0;

                    for (var x=0; x<value.length; x++)
                    {
                        lastIndex = x;
                    }
                    lastIndex ++;

                    var tabla = new Messages(id_role, lastIndex, username, password)
                    anadir.setMessage(tabla,lastIndex).then(()=>{
                        anadir.actualizarTabla().then((value2)=>
                        {
                            // --------- Crear la tabla con la información añadida ---------
                            html3 = anadir.crearTablaSinHTML(value2);
                            document.getElementById('divGeneral').innerHTML=html3;
                            document.getElementById('tablaGeneral').removeAttribute("hidden");
                        })
                    })
                });
                anadir.crearLocalStorage()
        };
    });

    // ---------------------------- BOTONES INFORMACIÓN LISTA ----------------------------
    document.getElementById("botones").addEventListener("click", (event) => {


        // ~~~~~~~~~~~~~~ AÑADIR MENSAJE ~~~~~~~~~~~~~~ 
        if (event.target.id == "anadir")
        {
            var verAfegir=document.getElementById("afegir");
            if (activarAfegir)
            {
                verAfegir.removeAttribute("hidden");
                activarAfegir = false;
            }

            else{
                verAfegir.setAttribute("hidden", true);
                activarAfegir = true;
            }
        }

        // ~~~~~~~~~~~~~~ LISTAR MENSAJES ~~~~~~~~~~~~~~ 
        if (event.target.id == "listar")
        {
            var verLista=document.getElementById("tablaGeneral");
            if (activarLista)
            {
                verLista.removeAttribute("hidden");
                activarLista = false;
            }

            else{
                verLista.setAttribute("hidden", true);
                activarLista = true;
            }
        }

        // ~~~~~~~~~~~~~~ FILTRAR LISTA ~~~~~~~~~~~~~~ 
        if (event.target.id == "filtrar")
        {
            var verFiltro=document.getElementById("filtro");
            if (activarFiltro)
            {
                verFiltro.removeAttribute("hidden");
                activarFiltro = false;
            }

            else{
                verFiltro.setAttribute("hidden", true);
                activarFiltro = true;
            }
        }
        // ~~~~~~~~~~~~~~ FILTAR BUSCADOR ~~~~~~~~~~~~~~ 
        if (event.target.id == "buscar")
        {
            var buscar=document.getElementById("palabra").value;
            var tabla=document.getElementById("tablaGeneral");
            var tabla2=document.getElementById("tablaRespuesta");

            if (buscar == "")
            {
                tabla.removeAttribute("hidden");
                tabla2.setAttribute("hidden", true);

            }

            else{

                var respuesta = listamensaje.filtrar(buscar);            
                console.log("Respuesta: " , respuesta);
                tabla.setAttribute("hidden", true);

                // ~~~~~~~~~~~~~~ TABLA CON EL RESULTADO ~~~~~~~~~~~~~~ 
                var html = `
                <table class="default" id="tablaRespuesta">
                <caption>Información sobre cada mensaje</caption>
                <tr class="inf">
                    <td>id_usuari</td>
                    <td>id_role</td>
                    <td>usuario</td>
                    <td>botones</td>
                    <td class="ver" hidden >password</td>
                </tr>
                `
                respuesta.forEach((v) => {
                    html += `
                        <tr id="a">
                        <td>${v.id_usuari}</td>
                        <td>${v.id_role}</td>
                        <td>
                            <textarea class="search" rows="2" cols="20" type="text" id="msm" readonly >${v.username}</textarea>
                        </td>
                        <td>
                            <button> <i id="eliminar" class="fa fa-trash" aria-hidden="true"></i> </button>
                            <button> <i id="editar" class="fa fa-cog" aria-hidden="true"></i> </button>
                            <button> <i id="ver" class="fa fa-eye" aria-hidden="true"></i> </button>
                        </td>
                        <td class="ver" hidden>${v.password}</td>
                    </tr>
                    `
                });
                divTablaActualizada.innerHTML=html;
           
            }            
        }
    });


    // ---------------------------- BOTÓNES FUNCIONES ----------------------------
    document.getElementById("divGeneral").addEventListener("click", (event) => {
        var id = event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;
        var fila = event.target.parentNode.parentNode.parentNode.querySelector("input");

        if (event.target.id == "eliminar")
        {
            event.target.parentNode.parentNode.parentNode.remove();
            console.log("ID" + id)
            //listamensaje.delete(id);
            listamensaje.delMenssage(id);
        }

        if (event.target.id == "editar")
        {
            var fila = event.target.parentNode.parentNode.parentNode.querySelector("textarea");
            if (activarEd)
            {   
                fila.removeAttribute("readonly");
                activarEd = false;
            }

            else{
                fila.setAttribute("readonly", true);
                activarEd = true;
                cambios = fila.value
                console.log(cambios);
                console.log("id: ",id);
                var a = anadir.actuMenssage(id).then((o)=> {
                    console.log(o);
                    for (var x=0;x<o.length;x++ )
                    {
                        if(o[x].id_usuari == id)
                        {
                            o[x].username = cambios
                            listamensaje.update(id,o[x]);
                        }
                    }
                });
            }
        }

        if (event.target.id == "ver")
        {
            var detalles = event.target.parentNode.parentNode.parentNode.getElementsByClassName("ver");
            var titulo = document.getElementsByClassName("ver");

            if (activarVer)
            {
                for (var x=0;x<detalles.length; x++)
                {
                    titulo[x].removeAttribute("hidden");
                    detalles[x].removeAttribute("hidden");
                }
                activarVer = false;
            }

            else{
                for (var x=0;x<detalles.length; x++)
                {
                    titulo[x].setAttribute("hidden", true);;
                    detalles[x].setAttribute("hidden", true);;
                }
                activarVer = true;
            }
        }
    })




    // ---------------------------- COMPROVAR DATOS ----------------------------
    var missatge="^[A-Z a-z 0-9]+";

    function checkInput(idInput, patt)
    {
        return patt.test(document.querySelector(idInput).value) ? true : false;    
    }

    // COMPROVACIÓN
    function checkForm(idForm)
    {
        var pattM = new RegExp(missatge);
        var missatgeCorrecte = false;

        if (checkInput("#username",pattM))
        {
            console.log("Correcte")
            missatgeCorrecte=true;
        }
        else { 
            console.log("---ERROR---")
            missatgeCorrecte=false;
        }

        return missatgeCorrecte;
    }
}