//import {UsuarisList} from "./classes/usuaris-list-class";
import {Board} from "./classes/boards-class";
import {ListaBoards} from "./classes/boards-list-class"
import  { listaBoards as lb }  from "../index.js"

let anyadir = new ListaBoards()
//let listaboards = new ListaBoards()
//
export function CrearFormularioHTML(listaboards)
{
    
    var html = `
        
        <div class="prueba">
            <button class="btn btn-outline-success filtrar" id='boton_listar'>Listar</button>
            <button class="btn btn-outline-primary filtrar" id='boton_filtrar'>Filtrar</button>
            <button class="btn btn-outline-danger filtrar" id="boton_añadir">Añadir</button>
        </div>
        <div  id="añadir">
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
<<<<<<< HEAD
        <div class="prueba" id='apartado_filtrar'>
=======
        <div hidden class="prueba" id='apartado_filtrar'>
<<<<<<< HEAD
<<<<<<< HEAD
            <input placeholder='Titulo' id="buscador" type="text" >
=======
            <input placeholder='Titulo' class="buscador" id="inputBuscador" type="text" >
>>>>>>> b1.1_David
=======
>>>>>>> a5aa1c4e4cd1582753fd310901a1b61af4991f42
            <input placeholder='Titulo' id="buscador" type="text" >
            
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea
            <button class="btn btn-primary filtrar" id='filtrarBuscador'>Filtrar</button>
        </div>
        <h1 class='TituloResult' id='titulo_listar'>MOSTRAR RESULTADOS</h1>
        
        
    `
   
    
    // dom
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    document.body.appendChild(div);
    var html3 = ``
    
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

    div.innerHTML= anyadir.crearTabla(html,listaboards);

    var cont = 1;
    var titulos =$(".ocultoT")

    var borrar = $('.delete')
    var update = $('.update')
    var mostrar = $('.mostrar')
    //APARTADO AÑADIR
    var boolAñadir = false;

    //APARTADO LISTAR
    var tabla_lista = $('#tabla');
   
    var bool_listar = false

    //APARTADO FILTRAR
    var bool_filtrar = false
    var inputBuscador = $("#buscador")
    

    var filtrarBuscador = document.getElementById('filtrarBuscador');
    var inputBuscador = document.getElementById("buscador")

    //INPUTS A FILTRAR
    var tituloFilt = document.getElementsByClassName('filtrarTitulo');
    var inputBuscador = document.getElementById('inputBuscador');
    var inputBuscador = document.getElementById("buscador")
    

    //INPUTS A FILTRAR
    var tituloFilt = document.getElementsByClassName('filtrarTitulo');
    //OTRAS COSAS
    var edit = true;
    var moreOptions = false;
    var updates = [];

    // JQUERY
    $('#añadir').hide()
    $('#tabla').hide()
    $('#titulo_listar').hide()
    $('#apartado_filtrar').hide() 

    // ===============AÑADIR TAREAS==============
    $('#guardar').on({
        click:((event)=>{
            var title = document.getElementById('title')
            var description = document.getElementById('description')
           
            
            var opcion = document.getElementById('incidencia')
    
            if (title.value == '' || description.value=='')
            {
                window.alert("TODOS LOS CAMPOS SON OBLIGATORIOS")  
            }
            else
            {
                let html3;
                var newIndex = parseInt(listaboards.lastIndex()) + 1
               
                console.log(newIndex)
    
                var boards = new Board(newIndex,title.value,description.value,"2000","2001",cont,opcion.value,"2000");
                anyadir.setBoard(boards,newIndex).then((value2)=>{
                    tabla_lista.remove();
                    let listaboards2 =  anyadir.actualizarLista().then((value) => {
                        lb.board = value;
                        console.log("HOLA",value)
                        html3 = anyadir.crearTablaSinHTML(lb);
                        $('#prueba').html(html3)
                    });
                })
            }
        })
    })
   
    // ===============AÑADIR===============
    $('#boton_añadir').on({
        click:((event)=>{
            if(!boolAñadir)
            {
                $('#añadir').show('slow')
                
                boolAñadir=true
            }else
            {
                $('#añadir').hide('slow')
            
                boolAñadir=false
            }
        })
    })
   
    // ===============LISTAR==============
    $('#boton_listar').on({
        click:((event)=>{
            if(!bool_listar)
            {
                $('#tabla').show('slow')
                $('#titulo_listar').show('slow')
                bool_listar=true
            }else
            {
                $('#tabla').hide('slow')
                $('#titulo_listar').hide('slow')
                bool_listar=false
            }
        })
    })
   
    // ==================FILTRAR===============
    $('#boton_filtrar').on({
        click:((event)=>{
            if(!bool_filtrar)
            {
                $('#apartado_filtrar').show('slow')
                $('#tabla').show('slow')
                $('#titulo_listar').show('slow')
                bool_filtrar=true
            }else
            {
                $('#apartado_filtrar').hide('slow')
                $('#tabla').hide('slow')
                $('#titulo_listar').hide('slow')
                bool_filtrar=false
            }
        })
    })
    

    // FILTRADO BUSCADOR
    filtrarBuscador.addEventListener("click",event=>{
        for(var x = 0;x<tituloFilt.length;x++){
          
            if(tituloFilt[x].filter(inputBuscador.value)){
                console.log("si")
            }
            
            
        }
    });
    // ====================NUEVA TABLA=================
    filtrarBuscador.addEventListener('click',event=>{
        var algo = listaboards.filtraAutorsPerText(inputBuscador.value);
    // ====================NUEVA TABLA=================
    $('#filtrarBuscador').on({
        click:((event)=>{
            var nuevaLista = listaboards.filtraAutorsPerText(inputBuscador.value);
            var html2 = `<table id="tabla2" class="tareas">
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>description</td>
                    <td>created</td>
                    <td>Opcion</td>
                    <td class="ocultoT" hidden>author_id</td>
                    <td class="ocultoT" hidden>ticket_id</td>
                <tr>`
            var tabla2 = $('#tabla2');
    filtrarBuscador.addEventListener('click',event=>{
        var nuevaLista = listaboards.filtraAutorsPerText(inputBuscador.value);
        var html2 = `<table id="tabla2" class="tareas">
            <tr>
                <td>id</td>
                <td>title</td>
                <td>description</td>
                <td>created</td>
                <td>Opcion</td>
                <td class="ocultoT" hidden>author_id</td>
                <td class="ocultoT" hidden>ticket_id</td>
            <tr>`
        var tabla2 = document.getElementById('tabla2');
        
        if(inputBuscador.value == "")
        {
            console.log("Input vacio")
            tabla_lista.removeAttribute("hidden")
        }else
        {
            console.log(algo);
            tabla_lista.setAttribute("hidden",true)
            algo.forEach((v,i,array)=>{
    
                console.log("hola",v.author_id)
                
            })
            div.innerHTML=html;

        }
    })
            tabla2.setAttribute("hidden",true)
        }else
        {
            document.body.appendChild(div2);
            tabla_lista.setAttribute("hidden",true)
            //apartado_filtrar.removeAttribute('hidden')
            
            if(inputBuscador.value == "")
            {
                console.log("Input vacio")
                tabla_lista.removeAttribute("hidden")
                tabla2.setAttribute("hidden",true)
            }else
            {
                document.body.appendChild(div2);
                tabla_lista.setAttribute("hidden",true)
                //apartado_filtrar.removeAttribute('hidden')
                
                
                nuevaLista.forEach((v,i,array)=>{
                   
                   html2 += `<tr>
                   <td class='tdid' id='${listaboards.getId(i)}'>${v.id}</td>
                   <th><input class="ocultar_input filtrarTitulo" id="Titulo${listaboards.getId(i)}" type="text" readonly value=${v.title}></th>
                   <th><input class="ocultar_input" id="Description${listaboards.getId(i)}" type="text" readonly value=${v.description}></th>
                   
                   <th>${v.created}</th>
                   <td><button class="delete"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png"/></button><button class="update"><img src="https://img.icons8.com/ios/24/000000/edit--v3.png"/></button><button class="mostrar"><img src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png"/></button></td>
                   <th hidden class="ocultos">${v.author_id}</th>
                   <th hidden class="ocultos">${v.ticket_id}</th>
               </tr>`
                    
                $(div2).html(html2);
                })
            }
        })
    })
    
    // ====================BOTON ELIMINAR====================
=======
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea

>>>>>>> a5aa1c4e4cd1582753fd310901a1b61af4991f42
    for(var x=0;x<borrar.length;x++){
        $(borrar[x]).on({
            click:((event)=>{
                const id = event.target.parentNode.parentNode.parentNode.getElementsByClassName('tdid')[0].innerHTML
                const table = event.target.parentNode.parentNode.parentNode
                anyadir.delBoard(id).then((value2)=>{
                    tabla_lista.remove();
                    let listaboards2 =  anyadir.actualizarLista().then((value) => {
                        lb.board = value;
                        html3 = anyadir.crearTablaSinHTML(lb);
                        $('#prueba').html(html3)
                    });
                })
            })
        })
    }

    // ====================BOTON ACTUALIZAR====================
    for(var x = 0;x<update.length;x++){
        $(update[x]).on({
            click:((event)=>{
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
                        updates.push(inputs[y].value)
                    }

                    anyadir.setBoard(updates,id).then((value2)=>{
                 
                    })
                    updates = [];
                    edit = true
                }
            })
        })
    }

    // ====================BOTON MOSTRAR MÁS INFORMACION====================
    for(var x = 0; x<mostrar.length;x++)
    {
        $(mostrar[x]).on({
            click:((event)=>{
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
        })
    }
    
}