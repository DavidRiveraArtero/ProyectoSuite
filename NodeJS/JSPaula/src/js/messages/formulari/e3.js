const fecha = new Date();  
var listaM = [];

// VALIDAR FORMULARIO
var missatge="^[A-Z a-z 0-9]+";

window.addEventListener("load", ()=> {

    GuardarDatos = JSON.parse(localStorage.getItem("id"));

    // --------- Comprovacion de la exixtencia del LocalStorage y valores---------
    if (GuardarDatos != null)  
    {
        // --------- Buscamos y recogemos los valores de configuracion y los añadimos en el LocalStorage ---------
        console.log("localstorage disponible");
    }
    else
    {
        // --------- Creamos el LocalStorage ---------
        console.log("localstorage NO disponible");
        localStorage.setItem("id", "1");
        localStorage.setItem("author_id", "1");
        localStorage.setItem("message", listaM);
        localStorage.setItem("created", fecha);    
    }
    privado = document.querySelector("#privado").checked
    document.body.innerHTML += "<p>Publico "+valor+"</p>";
    if (privado)
    {
        
    }
   
    publico = document.querySelector("#publico").checked
});

document.querySelector("#guardar").addEventListener("click",() => {

    
    if (checkForm("#formulario"))
    {    
        // --------- Recoger los valores de configuracion ---------
        var Antid = JSON.parse(localStorage.getItem("id"));
        var Antauthor_id = JSON.parse(localStorage.getItem("author_id"));

        listaM.push(document.querySelector("#message").value);
        Antid = Antid + 1;
        Antauthor_id = Antauthor_id + 1;

        localStorage.setItem("id", JSON.stringify(Antid));
        localStorage.setItem("author_id", JSON.stringify(Antauthor_id));
        localStorage.setItem("message", JSON.stringify(listaM));
        localStorage.setItem("created", JSON.stringify(fecha));

        JSON.parse(localStorage.getItem("message"));

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

    if (checkInput("#message",pattM))
    {
        console.log("Correcte")
        missatgeCorrecte=true;

    }
    else { console.log("---ERROR---")}

    if (missatgeCorrecte)
    {
        opciones = document.getElementsByName("opciones");

        var seleccionado = false;
        for(var i=0; i<opciones.length; i++) {
            if(opciones[i].checked) 
            {
                seleccionado = true;
            }
        }
    
        if(!seleccionado) {
        return false;
        }
        else{return true;}
    }
    
}