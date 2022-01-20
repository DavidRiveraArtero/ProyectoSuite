export class MessagesList{

    messages;

    constructor ()
    {
        this.carregarLocalStorage();           
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
            || element.message.match(new RegExp(buscar,"i"))) return true;
        })
        return torna;
    }
}