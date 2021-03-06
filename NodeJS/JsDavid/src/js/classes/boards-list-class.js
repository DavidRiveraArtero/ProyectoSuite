export class ListaBoards{


    

    board
    

    constructor(boa){
        this.board = boa;

        //this.getLocalStorage();
        
    }

    postBlog(blog){
        this.board.push(blog);
        this.setLocalStorage();
    }

    lastIndex(){
        var ultI = this.board.length
        console.log(ultI);
        if (ultI == 0) return -1
        return this.board[ultI-1].id;
    }

    setLocalStorage(){
        localStorage.setItem('board', JSON.stringify(this.board))
    }

    getLocalStorage(){
        this.board = (localStorage.getItem('board'))
        ? JSON.parse(localStorage.getItem('board'))
        :[];
       
        return this.board
    }

    getId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.id
            }
        }
        return "id"
    }

    getTitle(id){
        for(let i of this.board){
            if(i.id == id){
                return i.title
            }
        }
        return "Titulo"
    }

    getDescription(id){
        for(let i of this.board)
        {
            if(i.id == id)
            {
                return i.description
            }
        }
       
        return "algo"     }

    getAuthorId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.author_id
            }
        }
        return "AuthorId"
    }

    getTicketId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.ticket_id
            }
        }
        
    }

    getCreated(id){
        for(let i of this.board){
            if(i.id == id){
                return i.created
            }
        }
        return "created"
    }

    delete(id,table){
       
        
        let algo = localStorage.getItem("board");
        let conf = JSON.parse(algo);
       
        for (var i in conf)
        {
            var id2 = conf[i].id
            console.log("id2",id2)
            console.log("id",id)
            if(id2 == id)
            {   
                console.log("dentro de if")
                this.board.splice(i,1);
                this.setLocalStorage();
                break;
            }
        }

        location.reload();
    }

    update(id,updates){
        this.board[id].description = updates[1]
        this.board[id].title = updates[0]
        this.setLocalStorage();
    }
    filtraAutorsPerText(text)
    {
    let torna= this.board.filter((element) => {
        console.log(element.title)
        if (element.title.match(new RegExp(text,"i"))
        || element.description.match(new RegExp(text,"i"))) return true;
        })
<<<<<<< HEAD
        return torna;
    }
=======
        
        return torna;
    }

    async setBoard(board,id)
    {
        try{
            const res=fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/board/'+id+'.json',
            {
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                    
                },
                body:JSON.stringify(board),
                 
                
            })
            return res       

            
        }catch(error){
            body.console.log("error")
            return error
        }


    }

    async delBoard(id) {
        try{
            const res= await fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/board/'+id+'.json',
            {
                method:'DELETE',
            })
        }catch(error){
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea

        }
    }

    crearTabla(html,listaboards){

        html += `<div id="prueba">
        <table id="tabla" class="tareas">
        
        
        <tr>
            <td>id</td>
            <td>title</td>
            <td>description</td>
            <td>created</td>
            <td>Opcion</td>
            <td class="ocultoT" hidden>author_id</td>
            <td class="ocultoT" hidden>ticket_id</td>
        <tr>`
        listaboards.board.forEach((v,i,array)=>{
            //foreach (mensajes of datosBBDD) {
                
            //}
        
            html += `<tr>
                        <td class='tdid' id='${listaboards.getId(i)}'>${v.id}</td>
                        <th><input class="ocultar_input filtrarTitulo" id="Titulo${listaboards.getId(i)}" type="text" readonly value=${v.title}></th>
                        <th><input class="ocultar_input" id="Description${listaboards.getId(i)}" type="text" readonly value=${v.description}></th>
                        
                        <th>${v.created}</th>
                        <td><button class="delete"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png"/>l </button><button class="update"><img src="https://img.icons8.com/ios/24/000000/edit--v3.png"/></button><button class="mostrar"><img src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png"/></button></td>
                        <th hidden class="ocultos">${v.author_id}</th>
                        <th hidden class="ocultos">${v.ticket_id}</th>
                    </tr>
                    </div>`
        })
        html += `<footer>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                </footer>`

        return html
    }

    crearTablaSinHTML(listaboards2){
        console.warn("aaaa",listaboards2)
       let html = `<div id="prueba">
       <table  id="tabla" class="tareas">
        
        
        <tr>
            <td>id</td>
            <td>title</td>
            <td>description</td>
            <td>created</td>
            <td>Opcion</td>
            <td class="ocultoT" hidden>author_id</td>
            <td class="ocultoT" hidden>ticket_id</td>
        <tr>`
        listaboards2.board.forEach((v,i,array)=>{
        
            html += `<tr>
                        <td class='tdid' id='${listaboards2.getId(i)}'>${v.id}</td>
                        <th><input class="ocultar_input filtrarTitulo" id="Titulo${listaboards2.getId(i)}" type="text" readonly value=${v.title}></th>
                        <th><input class="ocultar_input" id="Description${listaboards2.getId(i)}" type="text" readonly value=${v.description}></th>
                        
                        <th>${v.created}</th>
                        <td><button class="delete"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png"/></button><button class="update"><img src="https://img.icons8.com/ios/24/000000/edit--v3.png"/></button><button class="mostrar"><img src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png"/></button></td>
                        <th hidden class="ocultos">${v.author_id}</th>
                        <th hidden class="ocultos">${v.ticket_id}</th>
                    </tr>
                    </div>`
        })
        html += `<footer>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                </footer>`
        
        console.log(html)
        return html
    }

   

    async actualizarLista(){
        try{
            let listaBoards;
            listaBoards = await fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/board.json')
            listaBoards = await listaBoards.json()
            //const myArrClean = listaBoards.filter(Boolean)
            //listaBoards = new this.ListaBoards(myArrClean);
            return listaBoards;
        }catch(error){
            console.log(error)
        }
    }
}