export class Ticket_statuses {
    constructor (id,ticket_id,status,author_id,notes,created){
        this.id = id;
        this.status = status;        
        this.ticket_id = ticket_id;
        this.author_id = author_id;
        this.notes = notes;
        this.created = created;
    }
}