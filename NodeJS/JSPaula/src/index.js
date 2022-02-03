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

    const myArrClean = todo.filter(Boolean);

    listamensaje = new MessagesList(myArrClean);
    creaHTMLFormulariAfegir(listamensaje);

})