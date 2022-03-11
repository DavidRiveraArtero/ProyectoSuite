export class StatusesList {

    statuses;

    constructor()
    {
        this.carregarLocalStorage();
    }

    nouStatus(status) {
        this.statuses.push(status);
        this.desarLocalStorage();
    }

    desarLocalStorage(){
        localStorage.setItem('statuses',JSON.stringify(this.statuses));
    }

    carregarLocalStorage(){
        this.statuses = (localStorage.getItem('statuses'))
                        ? JSON.parse(localStorage.getItem('statuses'))
                        : [];
    }
}