/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_formulario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/formulario */ \"./src/js/formulario.js\");\n\nlet div = document.createElement(\"div\")\n\ndocument.body.append(div);\n(0,_js_formulario__WEBPACK_IMPORTED_MODULE_0__.CrearFormularioHTML)()\n\n\n\n\n\n\n\n//# sourceURL=webpack://incidencias/./src/index.js?");

/***/ }),

/***/ "./src/js/classes/boards-class.js":
/*!****************************************!*\
  !*** ./src/js/classes/boards-class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\nclass Board{\n    constructor (id,title,description, date_from,date_to, author_id, ticket_id, created){\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.date_from = date_from;\n        this.date_to = date_to;\n        this.author_id = author_id;\n        this.ticket_id = ticket_id;\n        this.created = created;\n    }\n}\n\n//# sourceURL=webpack://incidencias/./src/js/classes/boards-class.js?");

/***/ }),

/***/ "./src/js/classes/boards-list-class.js":
/*!*********************************************!*\
  !*** ./src/js/classes/boards-list-class.js ***!
  \*********************************************/
/***/ (() => {

eval("class ListaBoards{\n\n    board;\n\n    constructor(){\n        this.getLocalStorage();\n    }\n\n    postBlog(blog){\n        this.board.push(blog);\n        this.setLocalStorage();\n    }\n\n    setLocalStorage(){\n        localStorage.setItem('board', JSON.stringify)\n    }\n\n    getLocalStorage(){\n        this.board = (localStorage.getItem('board'))\n        ? JSON.parse(localStorage.getItem('board'))\n        :[];\n    }\n}\n\n//# sourceURL=webpack://incidencias/./src/js/classes/boards-list-class.js?");

/***/ }),

/***/ "./src/js/formulario.js":
/*!******************************!*\
  !*** ./src/js/formulario.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CrearFormularioHTML\": () => (/* binding */ CrearFormularioHTML)\n/* harmony export */ });\n/* harmony import */ var _classes_boards_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/boards-class */ \"./src/js/classes/boards-class.js\");\n/* harmony import */ var _classes_boards_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/boards-list-class */ \"./src/js/classes/boards-list-class.js\");\n/* harmony import */ var _classes_boards_list_class__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_classes_boards_list_class__WEBPACK_IMPORTED_MODULE_1__);\n//import {UsuarisList} from \"./classes/usuaris-list-class\";\n\n\nlet anyadir = new _classes_boards_list_class__WEBPACK_IMPORTED_MODULE_1__.ListaBoards()\n\nfunction CrearFormularioHTML(){\n    let html = `\n\n        <label>Title</label><input id='title' type=\"text\"><br><br>\n        <label>Description</label><input id='description' type=\"text\"><br><br>\n        <label>Incidencia</label>\n        <select id=\"incidencia\" name=\"carlist\" form=\"carform\">\n            <option value=\"1\">Opcion1</option>\n            <option value=\"2\">Opcion2</option>\n            <option value=\"3\">Opcion3</option>\n            <option value=\"4\">Opcion4</option>\n        </select><br><br>\n        <button id='guardar'>Guardar</button>\n\n    `\n    \n    // dom\n    var div = document.createElement(\"div\");\n    document.body.appendChild(div);\n    div.innerHTML=html;\n\n    var enviar = document.getElementById('guardar')\n    var cont = 1;\n \n    // evento\n    enviar.addEventListener('click', event =>{\n\n        var title = document.getElementById('title')\n        var description = document.getElementById('description')\n    \n        var opcion = document.getElementById('incidencia')\n\n        if (title.value == '' || description.value==''){\n            window.alert(\"TODOS LOS CAMPOS SON OBLIGATORIOS\")  \n        }\n        else{\n            console.log(\"title.value\");\n            let Title = localStorage.setItem(\"Title\",title.value)\n            let Description = localStorage.setItem(\"description\",description.value) \n            let Author = localStorage.setItem(\"author\",1)   \n            cont++;\n            var boards = new _classes_boards_class__WEBPACK_IMPORTED_MODULE_0__.Board(cont,title.value,description.value,\"2000\",\"2001\",cont,opcion.value,\"2000\");\n            \n            var alog = anyadir.postBlog(boards);\n        \n            console.log(boards);\n\n        }\n    })\n\n\n}\n\n//# sourceURL=webpack://incidencias/./src/js/formulario.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;