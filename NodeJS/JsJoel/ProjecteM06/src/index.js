import header from "./_common/html/header.html";
import {crearFormulariHtml} from "./js/formulari.js";
import {Tickets} from "./js/classes/tickets.js";
import {TicketsList} from "./js/classes/ticketsList.js";
import {Assets} from "./js/classes/assets.js";
import {AssetsList} from "./js/classes/assetsList.js";
import {Comments} from "./js/classes/comments.js";
import {CommentsList} from "./js/classes/commentsList.js";
import {Statuses} from "./js/classes/statuses.js";
import {StatusesList} from "./js/classes/statusesList.js";
import {Ticket_files} from "./js/classes/ticket_files.js";
import {Ticket_filesList} from "./js/classes/ticket_filesList.js";
import {Ticket_statuses} from "./js/classes/ticket_statuses.js";
import {Ticket_statusesList} from "./js/classes/ticket_statusesList.js";
import {Usuari} from "./js/classes/usuari.js";
import {UsuarisList} from "./js/classes/usuarisList.js";
import "./styles.css";
import 'jquery';

console.log("cccccc");

let div = document.createElement('div');
div.innerHTML=header;
document.body.append(div);

export let llistadetickets = new TicketsList();
export let llistadeassets= new AssetsList();
console.log("zzzz");
var dadestickets = fetch("https://proyectomir-c4255-default-rtdb.europe-west1.firebasedatabase.app/tickets.json")
.then(data => data.json())  
.then(tot => {
    console.log("bbbbb");
    const myArrClean = tot.filter(Boolean);
    console.log("aaaaa",myArrClean)
    llistadetickets = new TicketsList(myArrClean);
    console.error(llistadetickets)
    crearFormulariHtml(llistadetickets);
})