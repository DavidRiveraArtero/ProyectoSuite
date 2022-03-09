import {MessagesList}  from "./js/messages/messegesList"
import header from '../_commons/html/header.html';
import './style.css';
import 'jquery';
import { creaHTMLFormulariAfegir}  from './js/messages/formulari/formulario.js';

let div = document.createElement('div');
div.innerHTML=header
document.body.append(div);

// let messages = new Messages();

export let listamensaje;

fetch('https://proyecto-40ec5-default-rtdb.firebaseio.com/messages.json')
.then(data => data.json())
.then(todo => {

    console.log(todo);
    const todoLimpio = todo.filter(Boolean);

    listamensaje = new MessagesList(todoLimpio);
    creaHTMLFormulariAfegir(listamensaje);

})