import { ListaBoards } from "./js/classes/boards-list-class";
import {CrearFormularioHTML} from "./js/formulario";
import "./style.css";
let div = document.createElement("div")
document.body.append(div);

let listaBoards;

var todosx = fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/board.json')
.then(data => data.json())  
.then (todo => {
    console.log(todo)
    const myArrClean = todo.filter(Boolean)
    listaBoards = new ListaBoards(myArrClean);
    CrearFormularioHTML(listaBoards)
})