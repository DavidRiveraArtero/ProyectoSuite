export class ListaBoards{

     board
    

    constructor(){
        this.board = [];

        this.getLocalStorage();
        
    }

    postBlog(blog){
        this.board.push(blog);
        this.setLocalStorage();
    }

    lastIndex(){
        var ultI = this.board.length
        console.log(ultI);
        if (ultI == 0) return -1
        return this.board[ultI-1].id;
    }

    setLocalStorage(){
        localStorage.setItem('board', JSON.stringify(this.board))
    }

    getLocalStorage(){
        this.board = (localStorage.getItem('board'))
        ? JSON.parse(localStorage.getItem('board'))
        :[];
        return this.board
    }

    getId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.id
            }
        }
        return "id"
    }

    getTitle(id){
        for(let i of this.board){
            if(i.id == id){
                return i.title
            }
        }
        return "Titulo"
    }

    getDescription(id){
        for(let i of this.board)
        {
            if(i.id == id)
            {
                return i.description
            }
        }
       
        return "algo"     }

    getAuthorId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.author_id
            }
        }
        return "AuthorId"
    }

    getTicketId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.ticket_id
            }
        }
        
    }

    getCreated(id){
        for(let i of this.board){
            if(i.id == id){
                return i.created
            }
        }
        return "created"
    }

    delete(id,table){
       
        
        let algo = localStorage.getItem("board");
        let conf = JSON.parse(algo);
       
        for (var i in conf)
        {
            var id2 = conf[i].id
            console.log("id2",id2)
            console.log("id",id)
            if(id2 == id)
            {   
                console.log("dentro de if")
                this.board.splice(i,1);
                this.setLocalStorage();
                break;
            }
        }

        location.reload();
    }

    update(id,updates){
        this.board[id].description = updates[1]
        this.board[id].title = updates[0]
        this.setLocalStorage();
    }


}