import {MessagesList} from "../messegesList";
import {Messages} from "../messages";


let listamensaje = new MessagesList();
let anadir = new MessagesList();


export function creaHTMLFormulariAfegir() {
   
    let html=`
    <html>
        <p>Message: </p><input type="text" name="message" id="message" required>
        <br>        
        <fieldset>
            <legend>Donde quieres enviar el mensage:</legend>
            <label><input type="radio" name="opciones" id="privado" required> Privado</label>
            <label><input type="radio" name="opciones" id="publico"> Publico</label>
        </fieldset>
        <br>
        <div id="elegir">
        </div>
        <p id="contacte"></p>
        <p id="grupp"></p>
        <input type="button" id="revisar" value="Revisar">
        <input type="submit" id="guardar" value="Guardar y aplicar">
        <input type="button" id="verinfo" value="Ver información">
        <br>
    </html>
    `
    var div = document.createElement("div");
    document.body.appendChild(div);

    // CREAR EL INTPUT MOSTRAR LA INFORMACION
    listamensaje.messages.forEach((v, i, array) => {
        html+= `
            <p>Hola</p>
        `
    });

    div.innerHTML=html;

    // VARIABLES
    var fecha = new Date();  
    var mensa;
    var GuardarDatos;
    var privado;
    var publico;
    var privpub; // SI ES PRIVADO SERA True SI ES PUBLICO SERA False
    var desti;

    // VALIDAR FORMULARIO
    var missatge="^[A-Z a-z 0-9]+";

    // window.addEventListener("load", ()=> {

    //     GuardarDatos = JSON.parse(localStorage.getItem("id"));

    //     // --------- Comprovacion de la exixtencia del LocalStorage y valores---------
    //     if (GuardarDatos != null)  
    //     {
    //         // --------- Buscamos y recogemos los valores de configuracion y los añadimos en el LocalStorage ---------
    //         console.log("localstorage disponible");
    //     }
    //     else
    //     {
    //         // --------- Creamos el LocalStorage ---------
    //         console.log("localstorage NO disponible");
    //         localStorage.setItem("id", "1");
    //         localStorage.setItem("author_id", "1");
    //         localStorage.setItem("message", mensa);
    //         localStorage.setItem("created", fecha);   
    //         localStorage.setItem("privpub", JSON.stringify(privpub));
    //         localStorage.setItem("desti", JSON.stringify(desti));
            
    //     }

    // });

    document.querySelector("#revisar").addEventListener("click",() => {
        (checkForm("#formulario"))
    });


    document.querySelector("#guardar").addEventListener("click",() => {

        if (checkForm("#formulario"))
        {    
            // --------- Recoger los valores de configuracion ---------
            // var Antid = JSON.parse(localStorage.getItem("id"));
            // var Antauthor_id = JSON.parse(localStorage.getItem("author_id"));

            var Antid = 0;
            var Antauthor_id = 0;

            mensa = document.querySelector("#message").value;
            desti = document.querySelector("#desinatario").value;
            Antid = parseInt(listamensaje.lastIndex()) +1;
            Antauthor_id = parseInt(listamensaje.lastIndex()) +1;


            // localStorage.setItem("id", JSON.stringify(Antid));
            // localStorage.setItem("author_id", JSON.stringify(Antauthor_id));
            // localStorage.setItem("message", JSON.stringify(mensa));
            // localStorage.setItem("created", JSON.stringify(fecha));
            // localStorage.setItem("privpub", JSON.stringify(privpub));
            // localStorage.setItem("desti", JSON.stringify(desti));


            // id = localStorage.setItem("id", JSON.stringify(Antid));
            // id_author= localStorage.setItem("author_id", JSON.stringify(Antauthor_id));
            // message = localStorage.setItem("message", JSON.stringify(mensa));
            // created = localStorage.setItem("created", JSON.stringify(fecha));
            // privpub = localStorage.setItem("privpub", JSON.stringify(privpub));
            // desti = localStorage.setItem("desti", JSON.stringify(desti));

            var tabla = new Messages(Antid,Antauthor_id, mensa, fecha, privpub, desti)

            anadir.nouMessages(tabla);

            // JSON.parse(localStorage.getItem("message"));

        }
    });

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
    
        //  TRANSMITIR MENSAJE
        // var parrafo = document.getElementById("mensaje");
        // var select = document.createElement("p");
        // select.innerHTML="adiAAAAAAAos";
        // parrafo.appendChild(select);
        return true;
    }

    // ------------- FORMULARIO CON LOS MENSAJES Y SU INFORMACIÓN -------------
    // document.querySelector("#verinfo").addEventListener("click",() => {
    
    //     console.log(listamensaje.messages);

        

            // var taula = document.getElementById("informacion");
            // var tr = document.createElement("tr");
            // var td = document.createElement("td");
            // var ah = document.createElement("a");
    
            // td.innerHTML=i;
            // tr.appendChild(td);
            
            // td = document.createElement("td");
            
            // td.innerHTML=v;
            // tr.appendChild(td);
            
            // td = document.createElement("td");
            // ah = document.createElement("a")
            // ah.href=""
            // ah.id="en"
            // ah.innerText="X";
            
            // td.appendChild(ah);
            // tr.appendChild(td);
            
            // taula.appendChild(tr);
        // });      
}