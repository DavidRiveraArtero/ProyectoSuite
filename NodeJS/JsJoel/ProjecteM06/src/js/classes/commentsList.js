export class CommentsList {

    comentaris;

    constructor()
    {
        this.carregarLocalStorage();
    }

    nouComentari(comentari) {
        this.comentaris.push(comentari);
        this.desarLocalStorage();
    }

    desarLocalStorage(){
        localStorage.setItem('comentaris',JSON.stringify(this.comentaris));
    }
    
    carregarLocalStorage(){
        this.comentaris = (localStorage.getItem('comentaris'))
                        ? JSON.parse(localStorage.getItem('comentaris'))
                        : [];
    }
}

// cl = new CommentsList();

// formulari

// aa= new Comments(ida,id,...)

// cl.nouComentari(aa);