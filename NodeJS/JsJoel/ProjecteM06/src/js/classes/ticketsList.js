export class TicketsList {

    tickets;

    constructor(v)
    {
        this.tickets = v
        //this.carregarLocalStorage();
    }

    nouTicket(ticket) {
        this.tickets.push(ticket);
        this.desarLocalStorage();
    }

    desarLocalStorage(){
        localStorage.setItem('tickets',JSON.stringify(this.tickets));
    }
    
    carregarLocalStorage(){
        this.tickets = (localStorage.getItem('tickets'))
                        ? JSON.parse(localStorage.getItem('tickets'))
                        : [];
    }

    cercaTicketAssigned_id(id) {
        for (let i of this.tickets)
        {
            if (i.id == id){
                return i.assigned_id;
            }
        }
        return "nufunciunu";
    }

    cercaTicketUpdated(id) {
        for (let i of this.tickets)
        {
            if (i.id == id){
                if (i.updated == null){
                    return i.created;
                }
                else{return i.updated;}                
            }
        }
    }

    lastIndex(){
        var last = this.tickets.length;
        if (last == 0) return -1
        return this.tickets[last-1].id;
    }

    delete(idticket){
        // RECORRER VALORS
        for(var i in this.tickets){
            var id = this.tickets[i].id;
            if(id == idticket){
                this.tickets.splice(this.tickets[i],1);
                this.desarLocalStorage();
                break;
            }
        }
    }

    edit(idticket, edits){
        // RECORRER VALORS
        for(var i in this.tickets){
            var id = this.tickets[i].id;
            if(id == idticket){

                console.log(this.tickets);
                this.tickets[i].title = edits[0];
                this.tickets[i].desc = edits[1];
                
                console.log(edits[0],edits[1]);
                console.table(this.tickets)
                this.desarLocalStorage();
                return;
            }
        }  
    }

    filtraPerTitol(text)
    {
        let torna = this.tickets.filter((element) => {
            console.log(element.title)
        if (element.title.match(new RegExp(text,"i"))) return true;})
        return torna;
    }

    crearTaula(html,llistadetickets,llistadeassets){
        html+=
                `
                    <div class="agenda" id="agenda">
                        <table id="taula">
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
        llistadetickets.tickets.forEach( (v) => {
            html += `
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
        return html;
    }

    crearTaulaSenseHTML(llistadetickets, llistadeassets){
        let html =
                `
                    <div class="agenda" id="agenda">
                        <table id="taula">
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
        llistadetickets.tickets.forEach( (v) => {
            html += `
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
        return html;
    }
}

export async function setTicket(ticket,id) {
    try {
        const res= await fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/tickets/'+id+'.json',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        })
    }
    catch (error){
        console.log(error)
    }
}

export async function delTicket(id){
    try {
        const res= await fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/tickets/'+id+'.json',
        {
            method: 'DELETE',
        })
    }
    catch (error){
        console.log(error)
    }
}