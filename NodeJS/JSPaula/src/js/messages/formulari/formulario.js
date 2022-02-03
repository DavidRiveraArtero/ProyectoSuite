import {MessagesList} from "../messegesList";
import {Messages} from "../messages";

//let listamensaje = new MessagesList();
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
            <label class="txt">Message: </label>
            <br>
            <br>

            <textarea rows="2" cols="30" type="text" name="message" id="message" required></textarea></label>

            <fieldset>
                <label class="txt">Donde quieres enviar el mensage:</label>
                <br>
                <label><input type="radio" name="opciones" id="privado" required> Privado</label>
                <label><input type="radio" name="opciones" id="publico"> Publico</label>
            </fieldset>
            <br>
            <br>

            <div id="elegir">
            </div>
            <p id="contacte"></p>
            <p id="grupp"></p>
            <input class="btn btn-primary" type="button" id="revisar" value="Revisar">
            <input class="btn btn-primary" type="submit" id="guardar" value="Guardar y aplicar">
            <br>

        </div>

        <br>
    </html>
    `
    var divTabla = document.createElement("div");
    document.body.appendChild(divTabla);

    var div2 = document.createElement("div");
    document.body.appendChild(div2);

    // CREAR EL INTPUT MOSTRAR LA INFORMACION
<<<<<<< HEAD
    divTabla.innerHTML=anadir.crearTabla(html, listamensaje);
=======
    listamensaje.messages.forEach((v, i, array) => {
        html+= `
            <tr id="a">
                <td>${v.id}</td>
                <td class="search" >${v.author_id}</td>
                <td>
                    <textarea class="search" rows="2" cols="20" type="text" id="msm" readonly >${v.message}</textarea>
                </td>
                <td>
                    <button> <i id="eliminar" class="fa fa-trash" aria-hidden="true"></i> </button>
                    <button> <i id="editar" class="fa fa-cog" aria-hidden="true"></i> </button>
                    <button> <i id="ver" class="fa fa-eye" aria-hidden="true"></i> </button>
                </td>
                <td class="ver" hidden>${v.created}</td=>
                <td class="ver" hidden>${v.privpub}</td>
                <td class="ver" hidden>${v.desti}</td>

            </tr>
        `
    });
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea


    // VARIABLES
    var fecha = new Date();  
    var mensa;
    var privado;
    var publico;
    var privpub; // SI ES PRIVADO SERA True SI ES PUBLICO SERA False
    var desti;

    var activarEd = true;
    var activarVer = true;
    var activarAfegir = true;
    var activarLista = true;
    var activarFiltro = true;

    var cambios;
    var missatge="^[A-Z a-z 0-9]+";

    // VALIDAR FORMULARIO
    document.querySelector("#revisar").addEventListener("click",() => {
        (checkForm("#formulario"))
    });

    document.querySelector("#guardar").addEventListener("click",() => {

        if (checkForm("#formulario"))
        {    
            // --------- Recoger los valores de configuracion ---------
            var Antid = 0;
            var Antauthor_id = 0;

            mensa = document.querySelector("#message").value;
            desti = document.querySelector("#desinatario").value;
            Antid = parseInt(listamensaje.lastIndex()) +1;
            Antauthor_id = parseInt(listamensaje.lastIndex()) +1;

            var tabla = new Messages(Antid,Antauthor_id, mensa, fecha, privpub, desti)
            console.log(tabla);
            //anadir.nouMessages(tabla);
            anadir.setMessage(tabla,Antid).then; // Añadir mensaje
            var TablaInfo = document.getElementById("info");
            TablaInfo.remove();

            var divid2 = document.getElementById('2')
            console.log(divid2)
            divid2.innerHTML=anadir.crearTabla(html, listamensaje);
        }
    });

    // ---------------------------- BOTONES INFORMACION LISTA
    document.getElementById("botones").addEventListener("click", (event) => {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

        // ~~~~~~~~~~~~~~ AÑADIR MENSAJE ~~~~~~~~~~~~~~ 
>>>>>>> b1.1_Paula
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea
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
            var verLista=document.getElementById("info");
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

<<<<<<< HEAD
        if (event.target.id == "buscar")
        {
            var palabra = document.getElementById("palabra").value;

            var search = document.querySelectorAll(".search");

            for (var i=0; i< search.length; i++)
            {
                var revisar = search[i].innerHTML;

                console.log("La palabra es: ",palabra);// me cambia la palabra ERROR
                console.log("Resultado: ", revisar);

                for (palabra in revisar)
                {

                    console.log("Bien");

                    document.querySelectorAll(".search")[i].style.backgroundColor = "#9ED5FD";
                }
            }
        }
=======
        // ~~~~~~~~~~~~~~ FILTAR BUSCADOR ~~~~~~~~~~~~~~ 
        if (event.target.id == "buscar")
        {
            var buscar=document.getElementById("palabra").value;
            var tabla=document.getElementById("info");
            var tabla2=document.getElementById("tabla2");

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
                var html2 = `
                <table class="default" width="50%" id="tabla2">
                <caption>Información sobre cada mensaje</caption>
                <tr class="inf">
                    <td>Id</td>
                    <td>Author</td>
                    <td>Mensaje</td>
                    <td>Opciones</td>
                    <td class="ver" hidden >Fecha</td>
                    <td class="ver" hidden >Privado(true) o Publico(false)</td>
                    <td class="ver" hidden >Destino</td>
                </tr>
                `
                respuesta.forEach((v) => {
                    html2 += `
                        <tr id="a">
                            <td>${v.id}</td>
                            <td class="search" >${v.author_id}</td>
                            <td>
                                <textarea class="search" rows="2" cols="20" type="text" id="msm" readonly >${v.message}</textarea>
                            </td>
                            <td>
                                <button> <i id="eliminar" class="fa fa-trash" aria-hidden="true"></i> </button>
                                <button> <i id="editar" class="fa fa-cog" aria-hidden="true"></i> </button>
                                <button> <i id="ver" class="fa fa-eye" aria-hidden="true"></i> </button>
                            </td>
                            <td class="ver" hidden>${v.created}</td=>
                            <td class="ver" hidden>${v.privpub}</td>
                            <td class="ver" hidden>${v.desti}</td>
                        </tr>
                    `
                });
                div2.innerHTML=html2;
            
            }            
        }
<<<<<<< HEAD
=======


>>>>>>> b1.1_Paula
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea
    });

    // ---------------------------- BOTONES INFORMACION LISTA
    document.getElementById("info").addEventListener("click", (event) => {
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
                listamensaje.update(id,cambios);
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


    // FUNCIONES
    function checkInput(idInput, patt)
    {
        return patt.test(document.querySelector(idInput).value) ? true : false;    
    }

    // COMPROVACIÓN
    function checkForm(idForm)
    {
        var pattM = new RegExp(missatge);
        var missatgeCorrecte = false;

        privado = document.querySelector("#privado").checked
        publico = document.querySelector("#publico").checked
        if (privado) { privpub=true; }
        if (publico) { privpub=false; }

        if (checkInput("#message",pattM) && ( privado || publico))
        {
            console.log("Correcte")
            missatgeCorrecte=true;
        }
        else { 
            console.log("---ERROR---")
            missatgeCorrecte=false;
        }
        if (missatgeCorrecte)
        {
            PrivadoPublico(privado)
        }

        return missatgeCorrecte;
    }

    // QUE A ESCOGIDO PRIVADO O PUBLICO?
    function PrivadoPublico(privado)
    {
        // COMPROVAR SI EXISTE YA UNA OPCIÓN CREADA
        var comprovarDesti = document.getElementById("destino");
        if (comprovarDesti != null)
        {
            comprovarDesti.remove();
        }
        if (privado)
        {
            console.log("Ha entrado");
            // CREAR EL INTPUT PARA ELEGIR CONTACTO
            // --------- CREAR OPCIONES DE CONTACTO ---------
            var elegir = document.getElementById("elegir");
            var parrafo = document.createElement("p");
            var select = document.createElement("select");
            var option = document.createElement("option");
            parrafo.id="destino";
            parrafo.innerHTML="Contacto:";
            select.id="desinatario";
            option.innerHTML="Contacto1";
            select.appendChild(option);
            parrafo.appendChild(select);
            elegir.appendChild(parrafo);
        }

        // var comprovarGrupo = document.getElementById("grupo");
        if (publico)
        {
            // CREAR EL INTPUT PARA ELEGIR GRUPO
            var elegir = document.getElementById("elegir");
            var parrafo = document.createElement("p");
            var select = document.createElement("select");
            var option = document.createElement("option");
            parrafo.id="destino";
            parrafo.innerHTML="Grupo:";
            select.id="desinatario";
            option.innerHTML="Grupo1";
            select.appendChild(option);
            parrafo.appendChild(select);
            elegir.appendChild(parrafo);
        }
        return true;
    }
}