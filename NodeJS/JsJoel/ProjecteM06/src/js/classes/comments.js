export class Comments {
    constructor (id,author_id,ticket_id,msg,created){
        this.id = id;
        this.author_id = author_id;
        this.ticket_id = ticket_id;
        this.msg = msg;
        this.created = created;
    }
}
