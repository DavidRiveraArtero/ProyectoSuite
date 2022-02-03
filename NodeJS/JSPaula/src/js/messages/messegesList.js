export class MessagesList{

    messages;

    constructor (men)
    {
        //this.carregarLocalStorage();           
        this.messages = men;
    }

    nouMessages(message) {
        this.messages.push(message);
        this.desarLocalStorage();
    }

    desarLocalStorage() {
        localStorage.setItem('messages',JSON.stringify(this.messages));
    }

    carregarLocalStorage() {
        this.messages = ( localStorage.getItem('messages') )
                        ? JSON.parse( localStorage.getItem('messages') )
                        : [];
    }
       
    lastIndex(){
        var ultid = this.messages.length
        if (ultid == 0) return -1
        return this.messages[ultid-1].id;
    }

    crearTabla(html,listamensaje)
    {
        html+= `
            <div id="2">
                <table class="default" id="info" hidden>
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
        listamensaje.messages.forEach((v) => {
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

            </div>
            `
        });
        return html;
        }
    
    delete(idmensaje){
        let configuracio =  localStorage.getItem("messages"); // RECOGEMOS EL LOCALSTORAGE
        let conf = JSON.parse(configuracio); // LA PASAMOS A LISTA
        console.log("hola",conf);

        // --------- Recoger los valores de configuracion ---------
        for (var i in conf)
        {
            var id = conf[i].id;
            console.log("id" + id);
            console.log("idmensaje " + idmensaje);
            if (id == idmensaje)
            {
                console.log("----A ENTRADO---");

                this.messages.splice(i,1);
                this.desarLocalStorage();
                break;
            }
        }
    }

    update(idmensaje,cambios){
        let configuracio =  localStorage.getItem("messages");
        let conf = JSON.parse(configuracio);
<<<<<<< HEAD
        console.log(configuracio);
=======
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea
        for (var i in conf)
        {   
            var id =  conf[i].id;

            if (id == idmensaje)
            {
                this.messages[idmensaje].message = cambios;
                this.desarLocalStorage();
                break;
            }
        }
    }

    filtrar(buscar)
    {
        let torna= this.messages.filter((element) => {
            if (element.message.match(new RegExp(buscar,"i"))
            || element.author_id.toString().match(new RegExp(buscar,"i"))) return true;
        })
        return torna;
    }

    // Añadir mensajes
    async setMessage(mensaje,id)
    {
        try {
            const res = await fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/messages/'+id+'.json',
            {
                method: 'PUT',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(mensaje)
            })
            
        }
            
        catch (error) 
        {
            body.console.log("Ha sucedido un ERROR.");
        }        
    }

    // Borrar mensajes
    async delMenssage(id)
    {
        try {
            const res= await fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/messages/'+ id+'.json',
            {    
                method: 'DELETE',
            })
        }
        
        catch (error) {
            body.console.log("Ha sucedido un ERROR.");
        }
    }

    // Actualizar mensajes
    // async delMenssage(id)
    // {
    //     try {
    //         const res= await fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/messages/'+ id+'.json',
    //         {    
    //             method: 'DELETE',
    //         })
    //     }
        
    //     catch (error) {
    //         body.console.log("Ha sucedido un ERROR.");
    //     }
    // }
}