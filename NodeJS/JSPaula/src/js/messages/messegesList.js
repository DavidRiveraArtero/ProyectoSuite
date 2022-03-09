export class MessagesList{

    messages;

    constructor (men)
    {
        this.messages = men;
    }

    nouMessage(message) {
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


    // ------------------------------ MÉTODOS TEMA TABLAS ------------------------------
    // CREAR TABLA PARA MOSTRAT UNA LISTA DE LA INFORMACIÓN 
    crearTabla(html,listamensaje)
    {
        html += `
            <div id="divGeneral">
                <table class="default" id="tablaGeneral" hidden>
                <caption>Información sobre cada mensaje</caption>
                <tr class="inf">
                    <td>id_usuari</td>
                    <td>id_role</td>
                    <td>usuario</td>
                    <td>botones</td>
                    <td class="ver" hidden >password</td>
                </tr>
        `
        listamensaje.messages.forEach((v) => {
            html+= `
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
            </div>
            `
        });
        return html;
    }

    crearTablaSinHTML(listamensaje)
    {
        let html = `
        <div id="divGeneral">
            <table class="default" id="tablaGeneral" hidden>
            <caption>Información sobre cada mensaje</caption>
            <tr class="inf">
                <td>id_usuari</td>
                <td>id_role</td>
                <td>usuario</td>
                <td>botones</td>
                <td class="ver" hidden >password</td>
            </tr>
        `
        for(var x=0;x<listamensaje.length;x++)
        {
            html+= `
                    <tr id="a">
                    <td>${listamensaje[x].id_usuari}</td>
                    <td>${listamensaje[x].id_role}</td>
                    <td>
                        <textarea class="search" rows="2" cols="20" type="text" id="msm" readonly >${listamensaje[x].username}</textarea>
                    </td>
                    <td>
                        <button> <i id="eliminar" class="fa fa-trash" aria-hidden="true"></i> </button>
                        <button> <i id="editar" class="fa fa-cog" aria-hidden="true"></i> </button>
                        <button> <i id="ver" class="fa fa-eye" aria-hidden="true"></i> </button>
                    </td>
                    <td class="ver" hidden>${listamensaje[x].password}</td>
                </tr>
            </div>
            `
        };
        return html;
    }

    // RECOGER DE NUEVO LOS DATOS DEL FIREBASE
    async actualizarTabla()
    {
        try{
            let Lmensajes;
            Lmensajes = await fetch('https://proyecto-40ec5-default-rtdb.firebaseio.com/messages.json')
            Lmensajes = await Lmensajes.json();
            return Lmensajes;
        }
        catch(error){
            console.log(error);
        }
    }
    
    // async actualizarTabla()
    // {
    //     let Lmensajes;
    //     try{
    //         let Lmensajes;
    //         Lmensajes = await fetch('https://proyecto-40ec5-default-rtdb.firebaseio.com/messages.json.json')
    //         Lmensajes = await Lmensajes.json();
    //         return Lmensajes;
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    //     return Lmensajes;
    // }

    // ---------------------------- FUNCIONES FETCH ----------------------------
    // Añadir mensajes
    async setMessage(mensaje,id)
    {
        try {
            const res = await fetch('https://proyecto-40ec5-default-rtdb.firebaseio.com/messages/'+id+'.json',
            {
                method: 'PUT',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(mensaje)
            })
            return res;
            
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
            const res= await fetch('https://proyecto-40ec5-default-rtdb.firebaseio.com/messages/'+ id+'.json',
            {    
                method: 'DELETE',
            })
        }
        
        catch (error) {
            body.console.log("Ha sucedido un ERROR.");
        }
    }

    // Actualizar mensajes
    async actuMenssage(id)
    {
        try {
            let datos;
            datos = await fetch('https://proyecto-40ec5-default-rtdb.firebaseio.com/messages.json')

            datos = await datos.json()
            return datos;
        }
        
        catch (error) {
            body.console.log("Ha sucedido un ERROR.");
        }
    }

    // ---------------------------- MÉTODOS BOTÓNES ----------------------------
    filtrar(buscar)
    {
        let torna= this.messages.filter((element) => {
            if (element.username.match(new RegExp(buscar,"i"))
            || element.id_usuari.toString().match(new RegExp(buscar,"i"))) return true;
        })
        return torna;
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

    async update(id,fila){
    // update(idmensaje,cambios){
        // ----- Con LOCALSTORAGE
        // let configuracio =  localStorage.getItem("messages");
        // let conf = JSON.parse(configuracio);
        // console.log(configuracio);
        // for (var i in conf)
        // {   
        //     var id =  conf[i].id;

        //     if (id == idmensaje)
        //     {
        //         this.messages[idmensaje].message = cambios;
        //         this.desarLocalStorage();
        //         break;
        //     }
        // }

        // ----- Con FIREBASE
        try {
            const res = await fetch('https://proyecto-40ec5-default-rtdb.firebaseio.com/messages/'+id+'.json',
            {
                method: 'PUT',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(fila)
            })
            return res;
            
        }
            
        catch (error) 
        {
            body.console.log("Ha sucedido un ERROR.");
        }        
    
    }


    // ---------------------------- LOCAL STORAGE ----------------------------
    crearLocalStorage()
    {
        console.log();
        localStorage.setItem("hola",JSON.stringify(this.messages));
    }

    rellenarSelect(listamensaje)
    {
        console.log("entra")
        for(var x=0;x<listamensaje.length;x++)
        {
            let html = `
                <option value="${o[x].id_usuari}">${o[x].username}</option>

            `
            console.log(o[x].username)

        };
        return html
    }
}