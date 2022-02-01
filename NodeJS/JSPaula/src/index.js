import {MessagesList}  from "./js/messages/messegesList"
import header from '../_commons/html/header.html';
import './style.css';

import { creaHTMLFormulariAfegir}  from './js/messages/formulari/formulario.js';

let div = document.createElement('div');
div.innerHTML=header
document.body.append(div);

// let messages = new Messages();

let listamensaje;

fetch('https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/messages.json')
.then(data => data.json())
.then(todo => {
    //    const myArrClean = data[0].filter(Boolean)

    console.log(todo);
    listamensaje = new MessagesList(myArrClean);
    creaHTMLFormulariAfegir(listamensaje);

    console.log(todo); // Array con la base de datos
})