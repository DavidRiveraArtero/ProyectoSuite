//import {UsuarisList} from "./classes/usuaris-list-class";
import {Board} from "./classes/boards-class";
import {ListaBoards} from "./classes/boards-list-class"

let anyadir = new ListaBoards()
let listaboards = new ListaBoards()

export function CrearFormularioHTML()
{
    var html = `
        
        <div class="prueba">
            <button class="btn btn-outline-success filtrar" id='boton_listar'>Listar</button>
            <button class="btn btn-outline-primary filtrar" id='boton_filtrar'>Filtrar</button>
            <button class="btn btn-outline-danger filtrar" id="boton_añadir">Añadir</button>
        </div>
        <div hidden id="añadir">
            <label>Title</label><input id='title' type="text"><br><br>
            <label>Description</label><br><textarea id='description' type="text"></textarea><br><br>
            <label>Incidencia</label>
            <select id="incidencia" name="carlist" form="carform">
                <option value="1">Opcion1</option>
                <option value="2">Opcion2</option>
                <option value="3">Opcion3</option>
                <option value="4">Opcion4</option>
            </select><br><br>
            <button class='btn btn-primary' id='guardar'>Guardar</button>
        </div>
        <div hidden class="prueba" id='apartado_filtrar'>
            <input placeholder='Titulo' id="buscador" type="text" >
            <button class="btn btn-primary filtrar" id='filtrarBuscador'>Filtrar</button>
        </div>
        <h1 hidden class='TituloResult' id='titulo_listar'>MOSTRAR RESULTADOS</h1>
        
        <table hidden id="tabla" class="tareas">
        
        
    <tr>
        <td>id</td>
        <td>title</td>
        <td>description</td>
        <td>created</td>
        <td>Opcion</td>
        <td class="ocultoT" hidden>author_id</td>
        <td class="ocultoT" hidden>ticket_id</td>
    <tr>
    `
   
    
    // dom
    var div = document.createElement("div");
    document.body.appendChild(div);
    listaboards.board.forEach((v,i,array)=>{
    
        html += `<tr>
                    <td class='tdid' id='${listaboards.getId(i)}'>${v.id}</td>
                    <th><input class="ocultar_input filtrarTitulo" id="Titulo${listaboards.getId(i)}" type="text" readonly value=${v.title}></th>
                    <th><input class="ocultar_input" id="Description${listaboards.getId(i)}" type="text" readonly value=${v.description}></th>
                    
                    <th>${v.created}</th>
                    <td><button class="delete"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png"/></button><button class="update"><img src="https://img.icons8.com/ios/24/000000/edit--v3.png"/></button><button class="mostrar"><img src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png"/></button></td>
                    <th hidden class="ocultos">${v.author_id}</th>
                    <th hidden class="ocultos">${v.ticket_id}</th>
                </tr>`
    })
    html += `<footer>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </footer>`
 
    div.innerHTML=html;

    var enviar = document.getElementById('guardar')
    var cont = 1;
    var titulos = document.getElementsByClassName("ocultoT")

    var borrar = document.getElementsByClassName('delete')
    var update = document.getElementsByClassName('update')
    var mostrar = document.getElementsByClassName('mostrar')
    //APARTADO AÑADIR
    var añadir = document.getElementById('añadir')
    var botonAñadir = document.getElementById('boton_añadir')
    var boolAñadir = false;
    //APARTADO LISTAR
    var tabla_lista = document.getElementById('tabla');
    var boton_listar = document.getElementById('boton_listar')
    var titulo_listar = document.getElementById('titulo_listar')
    var bool_listar = false
    //APARTADO FILTRAR
    var boton_filtrar = document.getElementById('boton_filtrar')
    var apartado_filtrar = document.getElementById('apartado_filtrar')
    var bool_filtrar = false
    var filtrarBuscador = document.getElementById('filtrarBuscador');
    var inputBuscador = document.getElementById("buscador")

    //INPUTS A FILTRAR
    var tituloFilt = document.getElementsByClassName('filtrarTitulo');

    //OTRAS COSAS
    var edit = true;
    var moreOptions = false;
    var updates = [];
    
    // evento
    enviar.addEventListener('click', event =>
    {

        var title = document.getElementById('title')
        var description = document.getElementById('description')
       
        
        var opcion = document.getElementById('incidencia')

        if (title.value == '' || description.value=='')
        {
            window.alert("TODOS LOS CAMPOS SON OBLIGATORIOS")  
        }
        else
        {
        
            var newIndex = parseInt(listaboards.lastIndex()) + 1

            console.log(newIndex)

            var boards = new Board(newIndex,title.value,description.value,"2000","2001",cont,opcion.value,"2000");
            
            var alog = anyadir.postBlog(boards);
            location.reload();
        
        }
    })

    // ============AÑADIR================
    botonAñadir.addEventListener('click',event=>{
        if(!boolAñadir)
        {
            añadir.removeAttribute('hidden')
            boolAñadir=true
        }else
        {
            añadir.setAttribute('hidden',true)
            boolAñadir=false
        }
        
    })
    // ===============LISTAR==============
    boton_listar.addEventListener('click',event=>{
        if(!bool_listar)
        {
            tabla_lista.removeAttribute('hidden')
            titulo_listar.removeAttribute('hidden')
            bool_listar=true
        }else
        {
            tabla_lista.setAttribute('hidden',true)
            titulo_listar.setAttribute('hidden',true)
            bool_listar=false
        }
    })

    // ==================FILTRAR===============
    boton_filtrar.addEventListener('click',event=>{
        if(!bool_filtrar)
        {
            apartado_filtrar.removeAttribute('hidden')
            tabla_lista.removeAttribute('hidden')
            titulo_listar.removeAttribute('hidden')
            bool_filtrar=true
        }else
        {
            apartado_filtrar.setAttribute('hidden',true)
            tabla_lista.setAttribute('hidden',true)
            titulo_listar.setAttribute('hidden',true)
            bool_filtrar=false
        }
    })

    // FILTRADO BUSCADOR
    filtrarBuscador.addEventListener("click",event=>{
        for(var x = 0;x<tituloFilt.length;x++){
          
            if(tituloFilt[x].filter(inputBuscador.value)){
                console.log("si")
            }
            
            
        }
    });

    for(var x=0;x<borrar.length;x++){
        borrar[x].addEventListener('click', event =>{
            const id = event.target.parentNode.parentNode.parentNode.getElementsByClassName('tdid')[0].innerHTML
            console.log(id);
            const table = event.target.parentNode.parentNode.parentNode
            listaboards.delete(id,table)
            
        })
    }

    for(var x = 0;x<update.length;x++){
        update[x].addEventListener("click", event =>{
            var inputs = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input");
            var id = event.target.parentNode.parentNode.parentNode.getElementsByClassName('tdid')[0].innerHTML
            
            console.log(inputs);
            if(edit){
                for (var y = 0;y<inputs.length;y++){
                   
                    
                    inputs[y].removeAttribute("readonly") 
                }
                edit = false

            }else{
                for (var y = 0;y<inputs.length;y++){
                    inputs[y].setAttribute("readonly", "true");
                    console.log(inputs[y].value)
                    updates.push(inputs[y].value)
                }
                listaboards.update(id,updates);
                updates = [];
                edit = true
            }
        })
    }

    for(var x = 0; x<mostrar.length;x++)
    {
        mostrar[x].addEventListener("click",event =>{
            var prueba = event.target.parentNode.parentNode.parentNode.getElementsByClassName("ocultos");
            
            if(!moreOptions)
            {
                for(var y=0;y<prueba.length;y++)
                {
                    prueba[y].removeAttribute("hidden")
                    titulos[y].removeAttribute("hidden")
                    moreOptions=true
                }
            }else
            {
                for(var y=0;y<prueba.length;y++)
                {
                    prueba[y].setAttribute("hidden",true)
                    titulos[y].setAttribute("hidden",true)
                    moreOptions=false
                }
            }
            
            
        })
    }
    
}