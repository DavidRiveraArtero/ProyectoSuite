export class Ticket_filesList {

    ticket_files;

    constructor()
    {
        this.carregarLocalStorage();
    }

    nouTicket_file(ticket_file) {
        this.ticket_files.push(ticket_file);
        this.desarLocalStorage();
    }

    desarLocalStorage(){
        localStorage.setItem('ticket_files',JSON.stringify(this.ticket_files));
    }

    carregarLocalStorage(){
        this.ticket_files = (localStorage.getItem('ticket_files'))
                        ? JSON.parse(localStorage.getItem('ticket_files'))
                        : [];
    }
}