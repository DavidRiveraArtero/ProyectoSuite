export class Ticket_statusesList {

    ticket_statuses;

    constructor()
    {
        this.carregarLocalStorage();
    }

    nouTicket_status(ticket_status) {
        this.ticket_statuses.push(ticket_status);
        this.desarLocalStorage();
    }

    desarLocalStorage(){
        localStorage.setItem('ticket_statuses',JSON.stringify(this.ticket_statuses));
    }

    carregarLocalStorage(){
        this.ticket_statuses = (localStorage.getItem('ticket_statuses'))
                        ? JSON.parse(localStorage.getItem('ticket_statuses'))
                        : [];
    }
}