// IMPORTS
import {Tickets} from "./classes/tickets.js"
import {llistadetickets} from "../index"
import {llistadeassets} from "../index"
import {setTicket} from "./classes/ticketsList";
import {delTicket} from "./classes/ticketsList";

// CREEM FORMULARI
export function crearFormulariHtml()
{
    // AGAFEM ASSETS
    let option="";
    for (let i of llistadeassets.assets){
        option += "<option value='"+i.id_asset+"'>"+i.location+" "+i.model+"</option>"
    }
    
    // FEM HTML
    let html = `
        <div id="botonsPrincipals">
            <button id="botoAfegir" type="button" class="btn btn-outline-success">AFEGIR</button>
            <button id="botoLlistar" type="button" class="btn btn-outline-warning">LLISTAR</button>
            <button id="botoFiltrar" type="button" class="btn btn-outline-danger">FILTRAR</button>
        </div>
        <div class="crear" hidden>
            <label for="title">TITOL: </label>
            <input type="text" value="Títol a ficar" name="title" id="title" required /><br><br>

            <label for="desc">DESCRIPCIÓ: </label>
            <input type="text" value="Descripció de ticket" name="desc" id="desc" required /><br><br>

            <label for="asset_id">ASSET: </label>
            <select name="asset_id" id="asset_id" required>
                ${option}
            </select><br><br>

            <button id="enviar">ENVIAR</button><br><br><br><br>
        </div>

        <div class="filtrar" hidden>
            <label for="filtrar">FILTRAR: </label>
            <input type="text" value="Filtrar per titol" name="filtrar" id="filtrar" required/>
            <button id="btnfiltrar">FILTRAR</button><br><br><br><br>
        </div>

        <div class="total mostrar" hidden>
            <h1 class="titolmostrarticket">MOSTRAR TICKETS</h1>
            <!-- <h3>BUSCADOR:</h3>
            <input /><br><br> -->
            
        
    `;

    // CREEM DIVS DINS DE BODY
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    document.body.appendChild(div);  
    document.body.appendChild(div2);

    // CREEM TAULA DE TICKETS
    html = llistadetickets.crearTaula(html,llistadetickets, llistadeassets);

    // INTRODUIM AL DIV L'HTML
    div.innerHTML=html;

    // SI FEM CLICK AL BOTÓ ENVIAR
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", event =>{    
        event.preventDefault();

        // CREEM NOU TICKET
        var id = parseInt(llistadetickets.lastIndex())+1;
        var title = document.getElementById("title");
        var desc = document.getElementById("desc");
        var author_id = 1;
        var asset_id = document.getElementById("asset_id");
        title = title.value;
        desc = desc.value;
        author_id = author_id.value;
        asset_id = asset_id.value;
    
        var created = new Date();
        var assigned_id = 0;
        var updated = null;
        
        const ticket = new Tickets(id,title,desc,author_id,assigned_id,asset_id,created,updated);
    
        // INTRODUIM NOU TICKET A LOCALSTORAGE
        llistadetickets.nouTicket(ticket);

        // AFEGIM NOU TICKET CREAT A FIREBASE
        setTicket(ticket,id);

        // BORRAR TAULA ANTIGA
        taula.remove();

        // AFEGIR TAULA NOVA
        var html3 = llistadetickets.crearTaulaSenseHTML(llistadetickets,llistadeassets);
        agenda.innerHTML = html3;
    });

    // SI FEM CLICK AL BOTÓ FILTRAR
    var filtrar = document.getElementById("btnfiltrar");
    filtrar.addEventListener("click", event =>{
        event.preventDefault();

        // AGAFEM CONTINGUT A FILTRAR
        var valor = document.getElementById("filtrar").value;
        var novallista = llistadetickets.filtraPerTitol(valor);
       
        // CREEM NOU HTML PART TAULA

        let hidden = "";
        var html2 = `
            <div class="total mostrar">
                <div class="agenda">
                    <br><br><br><h1>ÚLTIMA BÚSQUEDA</h1>
                    <table id='taula2' ${hidden}>
                        <tr class="fila" id="fila">
                            <th colspan="1">ID</th>
                            <th colspan="1">TITLE</th>
                            <th colspan="1">DESCRIPTION</th>
                            <th colspan="1">ASSET</th>
                            <th colspan="1">CREATION DATE</th>
                            <th colspan="1">OPTIONS</th>
                            <th colspan="1" class="ocultCap" hidden>ID ASSIGNED</th>
                            <th colspan="1" class="ocultCap" hidden>UPDATED</th>
                        </tr>
                </div>
            </div>
        `
        // VALOR BUIT
        if(valor==""){
            taula.removeAttribute("hidden");
        }
        // VALOR AMB CONTINGUT
        else{
            taula.setAttribute("hidden",true);
            hidden = "";
          
            novallista.forEach( (v,i,array) => {
                html2 += `
                    <tr>
                        <td>${v.id}</td>
                        <td><input type="text" value="${v.title}" readonly /></td>
                        <td><input type="text" value="${v.desc}" readonly /></td>
                        <td>${llistadeassets.cercaTicketAsset_id(v.asset_id)}</td>
                        <td>${v.created}</td>
                        <td>
                            <button id="aldetall"><i class="aldetall fa fa-eye" style="font-size:28px"></i></button>
                            <button class="editar" id="editar"><i class="editar material-icons">settings</i></button>
                            <button class="brosa" id="brosa"><i style="font-size:28px" class="fa">&#xf1f8;</i></button>
                        </td>
                        <td class="ocult" hidden>${v.assigned_id}</td>
                        <td class="ocult" hidden>${llistadetickets.cercaTicketUpdated(v.id)}</td>
                    </tr>
                `
            });
            div2.innerHTML=html2;
        } 
    });
    
    // SI FEM CLICK A CONTINGUTS DE LA TAULA
    var agenda = document.getElementById("agenda");
    var taula = document.getElementById("taula");
    var edit = true;
    var edits = [];
    var ulls = document.getElementsByClassName("aldetall");
    var mostrar = true;
    agenda.addEventListener("click", event=>{
        event.preventDefault();

        // SI FEM CLICK A LA ICONA BROSA
        if(event.target.className=="fa"){
            event.target.parentNode.parentNode.parentNode.remove();
            var idticket = event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;

            // BORRAR EN LOCALSTORAGE
            llistadetickets.delete(idticket);

            // BORRAR EN FIREBASE
            delTicket(idticket);
        }
        
        // SI FEM CLICK A LA ICONA EDITAR ///////////////////MIRAR ESTO
        if(event.target.className.includes("editar")){
            var idticket = event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;
            var inputs = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input");
            var ticketedit = new Tickets(idticket,inputs[0],inputs[1],author_id,assigned_id,asset_id,created,updated);
            // SI VOL EDITAR
            if(edit){
                for(var i=0; i<inputs.length;i++){
                    inputs[i].removeAttribute("readonly");
                }
            }
            // SI VOL DESAR CANVIS
            else{
                for(var i=0; i<inputs.length;i++){
                    inputs[i].setAttribute("readonly","true");
                    edits.push(inputs[i].value);
                }

                // EDITEM LOCALSTORAGE AMB NOVES DADES
                llistadetickets.edit(idticket,edits)

                // EDITEM FIREBASE AMB NOVES DADES
                setTicket(ticketedit,idticket)
                edits = [];
            }
            edit = !edit;
        }

        // SI FEM CLICK A LA ICONA ULL
        if(event.target.className.includes("aldetall")){
            
            // RECORRRER TOTS ELS ULLS
            for(var x=0; x<ulls.length; x++){

                // SI HA SIGUT CLICAT L'ULL D'AQUESTA POSICIÓ
                ulls[x].addEventListener("click",event=>{
                    var claseocult = event.target.parentNode.parentNode.parentNode.getElementsByClassName("ocult");
                    var claseocultcap = event.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("ocultCap");

                    // SI ESTÀ OCULT
                    if(mostrar){
                        for(var y=0; y<claseocult.length;y++){
                            claseocult[y].removeAttribute("hidden");
                            claseocultcap[y].removeAttribute("hidden");
                        }
                    }
                    // SI NO ESTÀ OCULT
                    else{
                        for(var y=0; y<claseocult.length; y++){
                            claseocult[y].setAttribute("hidden",true);
                            claseocultcap[y].setAttribute("hidden",true);
                        }
                    }
                });
            }
            // CANVIEM EL BOOLEA A OCULT/NO OCULT
            mostrar = !mostrar;
        }
    });

    // TRES BOTONS INICIALS
    var botoAfegir = document.getElementById("botoAfegir");
    var botoLlistar = document.getElementById("botoLlistar");
    var botoFiltrar = document.getElementById("botoFiltrar");
    // ESTATS DEL FORMULARI
    var estatAfegir = true;
    var estatLlistar = true;
    var estatFiltrar = true;
    // DIVS A ACTIVAR
    var creardiv = document.querySelector(".crear");
    var mostrardiv = document.querySelector(".total");
    var filtrardiv = document.querySelector(".filtrar");

    // MOSTRAR/OCULTAR AFEGIR
    botoAfegir.addEventListener("click",event=>{
        // SI ESTÀ OCULT
        if(estatAfegir){
            creardiv.removeAttribute("hidden");
        }
        // SI NO ESTÀ OCULT
        else{
            creardiv.setAttribute("hidden",true);
        }
        estatAfegir = !estatAfegir;
    });

    // MOSTRAR/OCULTAR LLISTAR
    botoLlistar.addEventListener("click",event=>{
        // SI ESTÀ OCULT
        if(estatLlistar){
            mostrardiv.removeAttribute("hidden");
        }
        // SI NO ESTÀ OCULT
        else{
            mostrardiv.setAttribute("hidden",true);
        }
        estatLlistar = !estatLlistar;
    });

    // MOSTRAR/OCULTAR FILTRAR
    botoFiltrar.addEventListener("click",event=>{
        // SI ESTÀ OCULT
        if(estatFiltrar){
            filtrardiv.removeAttribute("hidden");
        }
        // SI NO ESTÀ OCULT
        else{
            filtrardiv.setAttribute("hidden",true);
        }
        estatFiltrar = !estatFiltrar;
    });
}