


export class TicketsList {

    tickets;

    constructor()
    {
        this.carregarLocalStorage();
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
        console.log(torna)
        return torna;
    }
}