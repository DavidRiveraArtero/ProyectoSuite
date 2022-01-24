/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_common/html/header.html":
/*!**************************************!*\
  !*** ./src/_common/html/header.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<nav>\\n    <h2 class='header__Titulo titulo'>Projecte J-Suite</h2>\\n</nav>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://incidencies/./src/_common/html/header.html?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://incidencies/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"llistadetickets\": () => (/* binding */ llistadetickets),\n/* harmony export */   \"llistadeassets\": () => (/* binding */ llistadeassets)\n/* harmony export */ });\n/* harmony import */ var _common_html_header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common/html/header.html */ \"./src/_common/html/header.html\");\n/* harmony import */ var _js_formulari_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formulari.js */ \"./src/js/formulari.js\");\n/* harmony import */ var _js_classes_tickets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/classes/tickets.js */ \"./src/js/classes/tickets.js\");\n/* harmony import */ var _js_classes_ticketsList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/classes/ticketsList.js */ \"./src/js/classes/ticketsList.js\");\n/* harmony import */ var _js_classes_assets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/classes/assets.js */ \"./src/js/classes/assets.js\");\n/* harmony import */ var _js_classes_assetsList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/classes/assetsList.js */ \"./src/js/classes/assetsList.js\");\n/* harmony import */ var _js_classes_comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/classes/comments.js */ \"./src/js/classes/comments.js\");\n/* harmony import */ var _js_classes_commentsList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/classes/commentsList.js */ \"./src/js/classes/commentsList.js\");\n/* harmony import */ var _js_classes_statuses_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/classes/statuses.js */ \"./src/js/classes/statuses.js\");\n/* harmony import */ var _js_classes_statusesList_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/classes/statusesList.js */ \"./src/js/classes/statusesList.js\");\n/* harmony import */ var _js_classes_ticket_files_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/classes/ticket_files.js */ \"./src/js/classes/ticket_files.js\");\n/* harmony import */ var _js_classes_ticket_filesList_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/classes/ticket_filesList.js */ \"./src/js/classes/ticket_filesList.js\");\n/* harmony import */ var _js_classes_ticket_statuses_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/classes/ticket_statuses.js */ \"./src/js/classes/ticket_statuses.js\");\n/* harmony import */ var _js_classes_ticket_statusesList_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/classes/ticket_statusesList.js */ \"./src/js/classes/ticket_statusesList.js\");\n/* harmony import */ var _js_classes_usuari_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/classes/usuari.js */ \"./src/js/classes/usuari.js\");\n/* harmony import */ var _js_classes_usuarisList_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/classes/usuarisList.js */ \"./src/js/classes/usuarisList.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet div = document.createElement('div');\ndiv.innerHTML=_common_html_header_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ndocument.body.append(div);\n\nlet llistadetickets = new _js_classes_ticketsList_js__WEBPACK_IMPORTED_MODULE_3__.TicketsList();\nlet llistadeassets= new _js_classes_assetsList_js__WEBPACK_IMPORTED_MODULE_5__.AssetsList();\n\n(0,_js_formulari_js__WEBPACK_IMPORTED_MODULE_1__.crearFormulariHtml)();\n\n//# sourceURL=webpack://incidencies/./src/index.js?");

/***/ }),

/***/ "./src/js/classes/assets.js":
/*!**********************************!*\
  !*** ./src/js/classes/assets.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Assets\": () => (/* binding */ Assets)\n/* harmony export */ });\nclass Assets {\n      constructor(id,model,location) {\n          this.id_asset = id;\n          this.location = location;\n          this.model = model;\n      } \n    }\n    \n    \n    /*\n    [ {\n      \"id_asset\" : 0,\n      \"model\" : \"Monitor BENQ GW240\",\n      \"location\" : \"Servidors\"\n     \n    },\n    {\n      \"id_asset\" : 1,\n      \"model\" : \"Monitor BENQ GW240\",\n      \"location\" : \"Servidors\"\n     \n    },\n    {\n      \"id_asset\" : 2,\n      \"model\" : \"Teclat Lenovo\",\n      \"location\" : \"Servidors\"\n     \n    },\n    {\n      \"id_asset\" : 3,\n      \"model\" : \"Monitor BENQ GW240 / 1\",\n      \"location\" : \"Aula 106\"\n     \n    },{\n      \"id_asset\" : 4,\n      \"model\" : \"Monitor BENQ GW240 / 2\",\n      \"location\" : \"Aula 106\"\n     \n    },{\n      \"id_asset\" : 5,\n      \"model\" : \"Impressora Konica Minolta\",\n      \"location\" : \"Departament Informàtica\"\n     \n    },{\n      \"id_asset\" : 6,\n      \"model\" : \"Router Cisco XXXX\",\n      \"location\" : \"Servidors\"\n     \n    },{\n      \"id_asset\" : 7,\n      \"model\" : \"Projector Optmoa GT670\",\n      \"location\" : \"Aula 110\"\n     \n    },\n    ]\n    */\n\n//# sourceURL=webpack://incidencies/./src/js/classes/assets.js?");

/***/ }),

/***/ "./src/js/classes/assetsList.js":
/*!**************************************!*\
  !*** ./src/js/classes/assetsList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AssetsList\": () => (/* binding */ AssetsList)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./src/index.js\");\n\n\nclass AssetsList {\n\n  assets;\n\n  constructor() {\n      this.assets = [];\n      //this.obtenirDades().then ((data) =>  { this.assets=data; console.log(this.assets) } );\n\n\n      this.assets= [ {\n        \"id_asset\" : 0,\n        \"model\" : \"Monitor BENQ GW240\",\n        \"location\" : \"Servidors\"\n       \n      },\n      {\n        \"id_asset\" : 1,\n        \"model\" : \"Monitor BENQ GW240\",\n        \"location\" : \"Servidors\"\n       \n      },\n      {\n        \"id_asset\" : 2,\n        \"model\" : \"Teclat Lenovo\",\n        \"location\" : \"Servidors\"\n       \n      },\n      {\n        \"id_asset\" : 3,\n        \"model\" : \"Monitor BENQ GW240 / 1\",\n        \"location\" : \"Aula 106\"\n       \n      },{\n        \"id_asset\" : 4,\n        \"model\" : \"Monitor BENQ GW240 / 2\",\n        \"location\" : \"Aula 106\"\n       \n      },{\n        \"id_asset\" : 5,\n        \"model\" : \"Impressora Konica Minolta\",\n        \"location\" : \"Departament Informàtica\"\n       \n      },{\n        \"id_asset\" : 6,\n        \"model\" : \"Router Cisco XXXX\",\n        \"location\" : \"Servidors\"\n       \n      },{\n        \"id_asset\" : 7,\n        \"model\" : \"Projector Optmoa GT670\",\n        \"location\" : \"Aula 110\"\n       \n      },\n      ]\n  }\n\n  async obtenirDades()\n  {\n\n      let data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/assets.json')\n      data1 = await data1.json();\n      \n      return data1;\n  }\n\n  cercaTicketAsset_id(assets_id){\n    for (let i of this.assets)\n    {\n      if (i.id_asset == assets_id){\n        return i.model;\n      }\n    }\n    return \"nufunciunu\";\n  }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/assetsList.js?");

/***/ }),

/***/ "./src/js/classes/comments.js":
/*!************************************!*\
  !*** ./src/js/classes/comments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comments\": () => (/* binding */ Comments)\n/* harmony export */ });\nclass Comments {\n    constructor (id,author_id,ticket_id,msg,created){\n        this.id = id;\n        this.author_id = author_id;\n        this.ticket_id = ticket_id;\n        this.msg = msg;\n        this.created = created;\n    }\n}\n\n\n//# sourceURL=webpack://incidencies/./src/js/classes/comments.js?");

/***/ }),

/***/ "./src/js/classes/commentsList.js":
/*!****************************************!*\
  !*** ./src/js/classes/commentsList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentsList\": () => (/* binding */ CommentsList)\n/* harmony export */ });\nclass CommentsList {\n\n    comentaris;\n\n    constructor()\n    {\n        this.carregarLocalStorage();\n    }\n\n    nouComentari(comentari) {\n        this.comentaris.push(comentari);\n        this.desarLocalStorage();\n    }\n\n    desarLocalStorage(){\n        localStorage.setItem('comentaris',JSON.stringify(this.comentaris));\n    }\n    \n    carregarLocalStorage(){\n        this.comentaris = (localStorage.getItem('comentaris'))\n                        ? JSON.parse(localStorage.getItem('comentaris'))\n                        : [];\n    }\n}\n\n// cl = new CommentsList();\n\n// formulari\n\n// aa= new Comments(ida,id,...)\n\n// cl.nouComentari(aa);\n\n//# sourceURL=webpack://incidencies/./src/js/classes/commentsList.js?");

/***/ }),

/***/ "./src/js/classes/statuses.js":
/*!************************************!*\
  !*** ./src/js/classes/statuses.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Statuses\": () => (/* binding */ Statuses)\n/* harmony export */ });\nclass Statuses {\n    constructor (id,name,parent_id){\n        this.id = id;\n        this.name = name;\n        this.parent_id = parent_id;\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/statuses.js?");

/***/ }),

/***/ "./src/js/classes/statusesList.js":
/*!****************************************!*\
  !*** ./src/js/classes/statusesList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StatusesList\": () => (/* binding */ StatusesList)\n/* harmony export */ });\nclass StatusesList {\n\n    statuses;\n\n    constructor()\n    {\n        this.carregarLocalStorage();\n    }\n\n    nouStatus(status) {\n        this.statuses.push(status);\n        this.desarLocalStorage();\n    }\n\n    desarLocalStorage(){\n        localStorage.setItem('statuses',JSON.stringify(this.statuses));\n    }\n\n    carregarLocalStorage(){\n        this.statuses = (localStorage.getItem('statuses'))\n                        ? JSON.parse(localStorage.getItem('statuses'))\n                        : [];\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/statusesList.js?");

/***/ }),

/***/ "./src/js/classes/ticket_files.js":
/*!****************************************!*\
  !*** ./src/js/classes/ticket_files.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ticket_files\": () => (/* binding */ Ticket_files)\n/* harmony export */ });\nclass Ticket_files {\n    constructor (ticket_id,file_id){\n        this.ticket_id = ticket_id;\n        this.file_id = file_id;\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/ticket_files.js?");

/***/ }),

/***/ "./src/js/classes/ticket_filesList.js":
/*!********************************************!*\
  !*** ./src/js/classes/ticket_filesList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ticket_filesList\": () => (/* binding */ Ticket_filesList)\n/* harmony export */ });\nclass Ticket_filesList {\n\n    ticket_files;\n\n    constructor()\n    {\n        this.carregarLocalStorage();\n    }\n\n    nouTicket_file(ticket_file) {\n        this.ticket_files.push(ticket_file);\n        this.desarLocalStorage();\n    }\n\n    desarLocalStorage(){\n        localStorage.setItem('ticket_files',JSON.stringify(this.ticket_files));\n    }\n\n    carregarLocalStorage(){\n        this.ticket_files = (localStorage.getItem('ticket_files'))\n                        ? JSON.parse(localStorage.getItem('ticket_files'))\n                        : [];\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/ticket_filesList.js?");

/***/ }),

/***/ "./src/js/classes/ticket_statuses.js":
/*!*******************************************!*\
  !*** ./src/js/classes/ticket_statuses.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ticket_statuses\": () => (/* binding */ Ticket_statuses)\n/* harmony export */ });\nclass Ticket_statuses {\n    constructor (id,ticket_id,status,author_id,notes,created){\n        this.id = id;\n        this.status = status;        \n        this.ticket_id = ticket_id;\n        this.author_id = author_id;\n        this.notes = notes;\n        this.created = created;\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/ticket_statuses.js?");

/***/ }),

/***/ "./src/js/classes/ticket_statusesList.js":
/*!***********************************************!*\
  !*** ./src/js/classes/ticket_statusesList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ticket_statusesList\": () => (/* binding */ Ticket_statusesList)\n/* harmony export */ });\nclass Ticket_statusesList {\n\n    ticket_statuses;\n\n    constructor()\n    {\n        this.carregarLocalStorage();\n    }\n\n    nouTicket_status(ticket_status) {\n        this.ticket_statuses.push(ticket_status);\n        this.desarLocalStorage();\n    }\n\n    desarLocalStorage(){\n        localStorage.setItem('ticket_statuses',JSON.stringify(this.ticket_statuses));\n    }\n\n    carregarLocalStorage(){\n        this.ticket_statuses = (localStorage.getItem('ticket_statuses'))\n                        ? JSON.parse(localStorage.getItem('ticket_statuses'))\n                        : [];\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/ticket_statusesList.js?");

/***/ }),

/***/ "./src/js/classes/tickets.js":
/*!***********************************!*\
  !*** ./src/js/classes/tickets.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tickets\": () => (/* binding */ Tickets)\n/* harmony export */ });\nclass Tickets {\n    constructor (id,title,desc,author_id,assigned_id,asset_id,created,updated){\n        this.id = id;\n        this.title = title;\n        this.desc = desc;\n        this.author_id = author_id;\n        this.assigned_id = assigned_id;\n        this.asset_id = asset_id;\n        this.created = created;\n        this.updated = updated;\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/tickets.js?");

/***/ }),

/***/ "./src/js/classes/ticketsList.js":
/*!***************************************!*\
  !*** ./src/js/classes/ticketsList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TicketsList\": () => (/* binding */ TicketsList)\n/* harmony export */ });\n\n\n\nclass TicketsList {\n\n    tickets;\n\n    constructor()\n    {\n        this.carregarLocalStorage();\n    }\n\n    nouTicket(ticket) {\n        this.tickets.push(ticket);\n        this.desarLocalStorage();\n    }\n\n    desarLocalStorage(){\n        localStorage.setItem('tickets',JSON.stringify(this.tickets));\n    }\n    \n    carregarLocalStorage(){\n        this.tickets = (localStorage.getItem('tickets'))\n                        ? JSON.parse(localStorage.getItem('tickets'))\n                        : [];\n    }\n\n    cercaTicketAssigned_id(id) {\n        for (let i of this.tickets)\n        {\n            if (i.id == id){\n                return i.assigned_id;\n            }\n        }\n        return \"nufunciunu\";\n    }\n\n    cercaTicketUpdated(id) {\n        for (let i of this.tickets)\n        {\n            if (i.id == id){\n                if (i.updated == null){\n                    return i.created;\n                }\n                else{return i.updated;}                \n            }\n        }\n    }\n\n    lastIndex(){\n        var last = this.tickets.length;\n        if (last == 0) return -1\n        return this.tickets[last-1].id;\n    }\n\n    delete(idticket){\n        // RECORRER VALORS\n        for(var i in this.tickets){\n            var id = this.tickets[i].id;\n            if(id == idticket){\n                this.tickets.splice(this.tickets[i],1);\n                this.desarLocalStorage();\n                break;\n            }\n        }\n    }\n\n    edit(idticket, edits){\n        // RECORRER VALORS\n        for(var i in this.tickets){\n            var id = this.tickets[i].id;\n            if(id == idticket){\n\n                console.log(this.tickets);\n                this.tickets[i].title = edits[0];\n                this.tickets[i].desc = edits[1];\n                \n                console.log(edits[0],edits[1]);\n                console.table(this.tickets)\n                this.desarLocalStorage();\n                return;\n            }\n        }  \n    }\n\n    filtrarValor(valor){\n        let valors = this.tickets.filter((element) => {\n            console.log(element.title)\n            if (element.title.match(new RegExp(value,\"i\"))) return true;\n        })\n        return valors;\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/ticketsList.js?");

/***/ }),

/***/ "./src/js/classes/usuari.js":
/*!**********************************!*\
  !*** ./src/js/classes/usuari.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Usuari\": () => (/* binding */ Usuari)\n/* harmony export */ });\nclass Usuari {\n\n    constructor(id_usuari,username,password,id_role) {\n    \n      this.id_usuari = id_usuari;\n        this.username = username;\n        this.password = password;\n        this.id_role = id_role;\n    } \n    }\n    /*\n    [ {\n      \"id_usuari\" : 0,\n      \"username\" : \"armand\",\n      \"password\" : \"maletin\",\n      \"id_role\" : 0\n    }, {\n      \"id_usuari\" : 1,\n      \"username\" : \"pep\",\n      \"password\" : \"maletin\",\n      \"id_role\" : 1\n    }, {\n      \"id_usuari\" : 2,\n      \"username\" : \"jordi\",\n      \"password\" : \"maletin\",\n      \"id_role\" : 3\n    }, {\n      \"id_usuari\" : 3,\n      \"username\" : \"alicia\",\n      \"password\" : \"maletin\",\n      \"id_role\" : 2\n    }, {\n      \"id_usuari\" : 4,\n      \"username\" : \"cristina\",\n      \"password\" : \"maletin\",\n      \"id_role\" : 0\n    } ]\n    */\n\n//# sourceURL=webpack://incidencies/./src/js/classes/usuari.js?");

/***/ }),

/***/ "./src/js/classes/usuarisList.js":
/*!***************************************!*\
  !*** ./src/js/classes/usuarisList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsuarisList\": () => (/* binding */ UsuarisList)\n/* harmony export */ });\nclass UsuarisList {\n\n    usuaris;\n\n    constructor() {   \n        this.usuaris = [];\n        this.obtenirDades().then ((data) =>  this.usuaris=data );\n    }\n\n    async obtenirDades()\n    {\n        let data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/usuaris.json')\n        data1 = await data1.json();\n        return data1;\n    }\n}\n\n//# sourceURL=webpack://incidencies/./src/js/classes/usuarisList.js?");

/***/ }),

/***/ "./src/js/formulari.js":
/*!*****************************!*\
  !*** ./src/js/formulari.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearFormulariHtml\": () => (/* binding */ crearFormulariHtml)\n/* harmony export */ });\n/* harmony import */ var _classes_tickets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/tickets.js */ \"./src/js/classes/tickets.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n// IMPORTS\n\n\n\n\n// CREEM FORMULARI\nfunction crearFormulariHtml()\n{\n    // AGAFEM ASSETS\n    let option=\"\";\n    for (let i of _index__WEBPACK_IMPORTED_MODULE_1__.llistadeassets.assets){\n        option += \"<option value='\"+i.id_asset+\"'>\"+i.location+\" \"+i.model+\"</option>\"\n    }\n    \n    // FEM HTML\n    let html = `\n        <div class=\"crear\">\n            <label for=\"title\">TITOL: </label>\n            <input type=\"text\" value=\"Títol a ficar\" name=\"title\" id=\"title\" required /><br><br>\n\n            <label for=\"desc\">DESCRIPCIÓ: </label>\n            <input type=\"text\" value=\"Descripció de ticket\" name=\"desc\" id=\"desc\" required /><br><br>\n\n            <label for=\"asset_id\">ASSET: </label>\n            <select name=\"asset_id\" id=\"asset_id\" required>\n                ${option}\n            </select><br><br>\n\n            <button id=\"enviar\">ENVIAR</button><br><br><br><br>\n        </div>\n\n        <div class=\"filtrar\">\n            <label for=\"filtrar\">FILTRAR: </label>\n            <input type=\"text\" value=\"Filtrar per titol\" name=\"filtrar\" id=\"filtrar\" required/>\n            <button id=\"btnfiltrar\">FILTRAR</button>\n        </div>\n\n        <div class=\"total mostrar\">\n            <h1 class=\"titolmostrarticket\">MOSTRAR TICKETS</h1>\n            <!-- <h3>BUSCADOR:</h3>\n            <input /><br><br> -->\n            <div class=\"agenda\">\n                <table id=\"taula\">\n                    <tr class=\"fila\" id=\"fila\">\n                        <th colspan=\"1\">ID</th>\n                        <th colspan=\"1\">TITLE</th>\n                        <th colspan=\"1\">DESCRIPTION</th>\n                        <th colspan=\"1\">ASSET</th>\n                        <th colspan=\"1\">CREATION DATE</th>\n                        <th colspan=\"1\">OPTIONS</th>\n                        <th colspan=\"1\" class=\"ocultCap\" hidden>ID ASSIGNED</th>\n                        <th colspan=\"1\" class=\"ocultCap\" hidden>UPDATED</th>\n                    </tr>\n            </div>\n        </div>\n    `;\n\n    // CREEM DIV DINS DE BODY\n    var div = document.createElement(\"div\");\n    document.body.appendChild(div);  \n    \n    // MOSTRAR TOTS ELS TICKETS CREATS\n    _index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets.tickets.forEach( (v) => {\n        html += `\n            <tr>\n                <td>${v.id}</td>\n                <td><input type=\"text\" value=\"${v.title}\" readonly /></td>\n                <td><input type=\"text\" value=\"${v.desc}\" readonly /></td>\n                <td>${_index__WEBPACK_IMPORTED_MODULE_1__.llistadeassets.cercaTicketAsset_id(v.asset_id)}</td>\n                <td>${v.created}</td>\n                <td>\n                    <button id=\"aldetall\"><i class=\"aldetall fa fa-eye\" style=\"font-size:28px\"></i></button>\n                    <button class=\"editar\" id=\"editar\"><i class=\"editar material-icons\">settings</i></button>\n                    <button class=\"brosa\" id=\"brosa\"><i style=\"font-size:28px\" class=\"fa\">&#xf1f8;</i></button>\n                </td>\n                <td class=\"ocult\" hidden>${v.assigned_id}</td>\n                <td class=\"ocult\" hidden>${_index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets.cercaTicketUpdated(v.id)}</td>\n            </tr>\n        `\n    }); \n\n    // INTRODUIM AL DIV L'HTML\n    div.innerHTML=html\n\n    // SI FEM CLICK AL BOTÓ ENVIAR\n    var enviar = document.getElementById(\"enviar\");\n    enviar.addEventListener(\"click\", event =>{    \n        event.preventDefault();\n    \n        console.log(\"aaa\")\n        console.log(_index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets)\n        // CREEM NOU TICKET\n\n        var id = parseInt(_index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets.lastIndex())+1;\n        var title = document.getElementById(\"title\");\n        var desc = document.getElementById(\"desc\");\n        var author_id = 1;\n        var asset_id = document.getElementById(\"asset_id\");\n        title = title.value;\n        desc = desc.value;\n        author_id = author_id.value;\n        asset_id = asset_id.value;\n    \n        var created = new Date();\n        var assigned_id = 0;\n        var updated = null;\n        \n        const ticket = new _classes_tickets_js__WEBPACK_IMPORTED_MODULE_0__.Tickets(id,title,desc,author_id,assigned_id,asset_id,created,updated);\n    \n        // INTRODUIM NOU TICKET\n        _index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets.nouTicket(ticket);\n\n        // RECARREGUEM PÀGINA\n        location.reload();\n    });\n\n    // SI FEM CLICK AL BOTÓ FILTRAR\n    var filtrar = document.getElementById(\"btnfiltrar\");\n    filtrar.addEventListener(\"click\", event =>{\n        event.preventDefault();\n\n        // AGAFEM CONTINGUT A FILTRAR\n        var valor = document.getElementById(\"filtrar\").value;\n\n        // MÉTODE RECORRER ARRAY COMPARANT EL VALOR\n        _index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets.filtrarValor(valor);\n        \n    });\n\n    // SI FEM CLICK A CONTINGUTS DE LA TAULA\n    var taula = document.getElementById(\"taula\");\n    var edit = true;\n    var edits = [];\n    var ulls = document.getElementsByClassName(\"aldetall\");\n    var mostrar = true;\n    taula.addEventListener(\"click\", event=>{\n        event.preventDefault();\n\n        // SI FEM CLICK A LA ICONA BROSA\n        if(event.target.className==\"fa\"){\n            event.target.parentNode.parentNode.parentNode.remove();\n            var idticket = event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;\n            console.log(idticket)\n            _index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets[\"delete\"](idticket);\n        }\n        \n        // SI FEM CLICK A LA ICONA EDITAR\n        if(event.target.className.includes(\"editar\")){\n            var idticket = event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;\n            var inputs = event.target.parentNode.parentNode.parentNode.getElementsByTagName(\"input\");\n\n            // SI VOL EDITAR\n            if(edit){\n                for(var i=0; i<inputs.length;i++){\n                    inputs[i].removeAttribute(\"readonly\");\n                }\n                edit=false;\n            }\n            // SI VOL DESAR CANVIS\n            else{\n                for(var i=0; i<inputs.length;i++){\n                    inputs[i].setAttribute(\"readonly\",\"true\");\n                    console.log(inputs[i].value)\n                    edits.push(inputs[i].value);\n                }\n                _index__WEBPACK_IMPORTED_MODULE_1__.llistadetickets.edit(idticket,edits)\n                edits = [];\n                edit=true;\n            }\n        }\n\n        // SI FEM CLICK A LA ICONA ULL\n        if(event.target.className.includes(\"aldetall\")){\n            \n            // RECORRRER TOTS ELS ULLS\n            for(var x=0; x<ulls.length; x++){\n\n                // SI HA SIGUT CLICAT L'ULL D'AQUESTA POSICIÓ\n                ulls[x].addEventListener(\"click\",event=>{\n                    var claseocult = event.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(\"ocult\");\n                    var claseocultcap = event.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(\"ocultCap\");\n\n                    // SI ESTÀ OCULT\n                    if(mostrar){\n                        for(var y=0; y<claseocult.length;y++){\n                            claseocult[y].removeAttribute(\"hidden\");\n                            claseocultcap[y].removeAttribute(\"hidden\");\n                        }\n                    }\n                    // SI NO ESTÀ OCULT\n                    else{\n                        for(var y=0; y<claseocult.length; y++){\n                            claseocult[y].setAttribute(\"hidden\",true);\n                            claseocultcap[y].setAttribute(\"hidden\",true);\n                        }\n                    }\n                });\n            }\n            // CANVIEM EL BOOLEA A OCULT/NO OCULT\n            mostrar = !mostrar;\n        }\n    });\n}\n\n//# sourceURL=webpack://incidencies/./src/js/formulari.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;