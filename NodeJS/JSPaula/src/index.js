import header from '../_commons/html/header.html';
import './style.css';

import { creaHTMLFormulariAfegir}  from './js/messages/formulari/formulario.js';

let div = document.createElement('div');
div.innerHTML=header
document.body.append(div);

// let messages = new Messages();
creaHTMLFormulariAfegir();