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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"table, th, td, h3\\n{\\n    margin: auto;\\n    border: rgb(195, 253, 234) 2px solid;\\n    border-collapse: collapse;\\n    background-color: rgb(235, 253, 247);\\n}\\ncaption, .inf\\n{\\n    font-weight: bolder;\\n}\\n\\ndiv #botones{\\n    background-color: rgb(210, 245, 245);\\n    padding: 1%;\\n    text-align: center;\\n}\\n\\ndiv #afegir{\\n    background-color: rgba(224, 208, 236, 0.753);\\n    text-align: center;\\n    width: 35%;\\n    margin: auto;\\n    padding: 1%;\\n}\\n\\nlegend, .txt{\\n    font-size: 1.8vh;\\n    float: left;\\n}\\n\\n\\ntextarea{\\n    float: left;\\n    margin-right: 3%;\\n}\\n\\nfieldset{\\n    float: left;\\n}\\n\\ncaption{\\n    color: black;\\n    font-size: 2vw;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://chatapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://chatapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://chatapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./_commons/html/header.html":
/*!***********************************!*\
  !*** ./_commons/html/header.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"\\n<header class='header'>\\n    <nav>\\n        <!-- <img class='header__logo' src='_./commons/img/icon.png'/> -->\\n        <!-- <img class='header__user' src='_commons/img/icon.png'/> -->\\n        <h2 class='header__Titulo titulo'>Projecte J-Suite</h2>\\n    </nav>\\n</header>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://chatapp/./_commons/html/header.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://chatapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://chatapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://chatapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://chatapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://chatapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://chatapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://chatapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commons_html_header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_commons/html/header.html */ \"./_commons/html/header.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_messages_formulari_formulario_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/messages/formulari/formulario.js */ \"./src/js/messages/formulari/formulario.js\");\n\n\n\n\n\nlet div = document.createElement('div');\ndiv.innerHTML=_commons_html_header_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\ndocument.body.append(div);\n\n// let messages = new Messages();\n(0,_js_messages_formulari_formulario_js__WEBPACK_IMPORTED_MODULE_2__.creaHTMLFormulariAfegir)();\n\n//# sourceURL=webpack://chatapp/./src/index.js?");

/***/ }),

/***/ "./src/js/messages/formulari/formulario.js":
/*!*************************************************!*\
  !*** ./src/js/messages/formulari/formulario.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creaHTMLFormulariAfegir\": () => (/* binding */ creaHTMLFormulariAfegir)\n/* harmony export */ });\n/* harmony import */ var _messegesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messegesList */ \"./src/js/messages/messegesList.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messages */ \"./src/js/messages/messages.js\");\n\n\n\nlet listamensaje = new _messegesList__WEBPACK_IMPORTED_MODULE_0__.MessagesList();\nlet anadir = new _messegesList__WEBPACK_IMPORTED_MODULE_0__.MessagesList();\n\n\nfunction creaHTMLFormulariAfegir() {\n   \n    let html=`\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <html>\n        <div id=\"botones\">\n            <input class=\"btn btn-outline-success\" type=\"button\" id=\"anadir\" value=\"Añadir\">\n            <input class=\"btn btn-outline-primary\" type=\"button\" id=\"listar\" value=\"Listar\">\n            <input class=\"btn btn-outline-danger\" type=\"button\" id=\"filtrar\" value=\"Filtrar\">\n            <br>\n            <label id=\"filtro\" hidden>\n                <input type=\"text\" name=\"buscar\" id=\"palabra\" required>\n                <input class=\"btn btn-primary\" type=\"button\" id=\"buscar\" value=\"Buscar\">\n            </label>\n        </div>\n\n        <div id=\"afegir\" hidden>\n            <label class=\"txt\">Message: </label>\n            <br>\n            <br>\n\n            <textarea rows=\"2\" cols=\"30\" type=\"text\" name=\"message\" id=\"message\" required></textarea></label>\n\n            <fieldset>\n                <label class=\"txt\">Donde quieres enviar el mensage:</label>\n                <br>\n                <label><input type=\"radio\" name=\"opciones\" id=\"privado\" required> Privado</label>\n                <label><input type=\"radio\" name=\"opciones\" id=\"publico\"> Publico</label>\n            </fieldset>\n            <br>\n            <br>\n\n            <div id=\"elegir\">\n            </div>\n            <p id=\"contacte\"></p>\n            <p id=\"grupp\"></p>\n            <input class=\"btn btn-primary\" type=\"button\" id=\"revisar\" value=\"Revisar\">\n            <input class=\"btn btn-primary\" type=\"submit\" id=\"guardar\" value=\"Guardar y aplicar\">\n            <br>\n\n        </div>\n\n        <br>\n\n\n        <table class=\"default\" id=\"info\" hidden>\n            <caption>Información sobre cada mensaje</caption>\n            <tr class=\"inf\">\n                <td>Id</td>\n                <td>Author</td>\n                <td>Mensaje</td>\n                <td>Opciones</td>\n                <td class=\"ver\" hidden >Fecha</td>\n                <td class=\"ver\" hidden >Privado(true) o Publico(false)</td>\n                <td class=\"ver\" hidden >Destino</td>\n            </tr>\n\n    </html>\n    `\n    var div = document.createElement(\"div\");\n    document.body.appendChild(div);\n\n    // CREAR EL INTPUT MOSTRAR LA INFORMACION\n    listamensaje.messages.forEach((v, i, array) => {\n        html+= `\n            <tr id=\"a\">\n                <td>${v.id}</td>\n                <td>${v.author_id}</td>\n                <td>\n                    <textarea rows=\"2\" cols=\"20\" type=\"text\" id=\"msm\" readonly >${v.message}</textarea>\n                </td>\n                <td>\n                    <button> <i id=\"eliminar\" class=\"fa fa-trash\" aria-hidden=\"true\"></i> </button>\n                    <button> <i id=\"editar\" class=\"fa fa-cog\" aria-hidden=\"true\"></i> </button>\n                    <button> <i id=\"ver\" class=\"fa fa-eye\" aria-hidden=\"true\"></i> </button>\n                </td>\n                <td class=\"ver\" hidden>${v.created}</td=>\n                <td class=\"ver\" hidden>${v.privpub}</td>\n                <td class=\"ver\" hidden>${v.desti}</td>\n\n            </tr>\n        `\n    });\n\n    div.innerHTML=html;\n\n    // VARIABLES\n    var fecha = new Date();  \n    var mensa;\n    var privado;\n    var publico;\n    var privpub; // SI ES PRIVADO SERA True SI ES PUBLICO SERA False\n    var desti;\n\n    var activarEd = true;\n    var activarVer = true;\n    var activarAfegir = true;\n    var activarLista = true;\n    var activarFiltro = true;\n\n\n    var cambios;\n    var missatge=\"^[A-Z a-z 0-9]+\";\n\n    // VALIDAR FORMULARIO\n    document.querySelector(\"#revisar\").addEventListener(\"click\",() => {\n        (checkForm(\"#formulario\"))\n    });\n\n    document.querySelector(\"#guardar\").addEventListener(\"click\",() => {\n\n        if (checkForm(\"#formulario\"))\n        {    \n            // --------- Recoger los valores de configuracion ---------\n            var Antid = 0;\n            var Antauthor_id = 0;\n\n            mensa = document.querySelector(\"#message\").value;\n            desti = document.querySelector(\"#desinatario\").value;\n            Antid = parseInt(listamensaje.lastIndex()) +1;\n            Antauthor_id = parseInt(listamensaje.lastIndex()) +1;\n\n            var tabla = new _messages__WEBPACK_IMPORTED_MODULE_1__.Messages(Antid,Antauthor_id, mensa, fecha, privpub, desti)\n\n            anadir.nouMessages(tabla);\n            location.reload(); // Recargar página\n        }\n    });\n\n    // ---------------------------- BOTONES INFORMACION LISTA\n    document.getElementById(\"botones\").addEventListener(\"click\", (event) => {\n\n        if (event.target.id == \"anadir\")\n        {\n            var verAfegir=document.getElementById(\"afegir\");\n            if (activarAfegir)\n            {\n                verAfegir.removeAttribute(\"hidden\");\n                activarAfegir = false;\n            }\n\n            else{\n                verAfegir.setAttribute(\"hidden\", true);\n                activarAfegir = true;\n            }\n        }\n\n        if (event.target.id == \"listar\")\n        {\n            var verLista=document.getElementById(\"info\");\n            if (activarLista)\n            {\n                verLista.removeAttribute(\"hidden\");\n                activarLista = false;\n            }\n\n            else{\n                verLista.setAttribute(\"hidden\", true);\n                activarLista = true;\n            }\n        }\n\n        if (event.target.id == \"filtrar\")\n        {\n            var verFiltro=document.getElementById(\"filtro\");\n            if (activarFiltro)\n            {\n                verFiltro.removeAttribute(\"hidden\");\n                activarFiltro = false;\n            }\n\n            else{\n                verFiltro.setAttribute(\"hidden\", true);\n                activarFiltro = true;\n            }\n        }\n\n        if (event.target.id == \"buscar\")\n        {\n            var palabra=document.getElementById(\"palabra\");\n            let torna= this.autors.filter((element) => {\n                console.log(element.nom)\n                if (element.nom.match(new RegExp(text,\"i\"))\n                || element.cognoms.match(new RegExp(text,\"i\"))) return true;\n            })\n            return torna;\n            \n        }\n\n\n    });\n\n    // ---------------------------- BOTONES INFORMACION LISTA\n    document.getElementById(\"info\").addEventListener(\"click\", (event) => {\n        var id = event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;\n        var fila = event.target.parentNode.parentNode.parentNode.querySelector(\"input\");\n\n        if (event.target.id == \"eliminar\")\n        {\n            event.target.parentNode.parentNode.parentNode.remove();\n            console.log(\"ID\" + id)\n            listamensaje.delete(id);\n\n        }\n\n        if (event.target.id == \"editar\")\n        {\n            var fila = event.target.parentNode.parentNode.parentNode.querySelector(\"input\");\n            if (activarEd)\n            {   \n                fila.removeAttribute(\"readonly\");\n                activarEd = false;\n            }\n\n            else{\n                fila.setAttribute(\"readonly\", true);\n                activarEd = true;\n                cambios = fila.value\n                console.log(cambios);\n                listamensaje.update(id,cambios);\n            }\n        }\n\n        if (event.target.id == \"ver\")\n        {\n            var detalles = event.target.parentNode.parentNode.parentNode.getElementsByClassName(\"ver\");\n            var titulo = document.getElementsByClassName(\"ver\");\n\n            if (activarVer)\n            {\n                for (var x=0;x<detalles.length; x++)\n                {\n                    titulo[x].removeAttribute(\"hidden\");\n                    detalles[x].removeAttribute(\"hidden\");\n                }\n                activarVer = false;\n            }\n\n            else{\n                for (var x=0;x<detalles.length; x++)\n                {\n                    titulo[x].setAttribute(\"hidden\", true);;\n                    detalles[x].setAttribute(\"hidden\", true);;\n                }\n                activarVer = true;\n            }\n        }\n    })\n\n\n    // FUNCIONES\n    function checkInput(idInput, patt)\n    {\n        return patt.test(document.querySelector(idInput).value) ? true : false;    \n    }\n\n    // COMPROVACIÓN\n    function checkForm(idForm)\n    {\n        var pattM = new RegExp(missatge);\n        var missatgeCorrecte = false;\n\n        privado = document.querySelector(\"#privado\").checked\n        publico = document.querySelector(\"#publico\").checked\n        if (privado) { privpub=true; }\n        if (publico) { privpub=false; }\n\n        if (checkInput(\"#message\",pattM) && ( privado || publico))\n        {\n            console.log(\"Correcte\")\n            missatgeCorrecte=true;\n        }\n        else { \n            console.log(\"---ERROR---\")\n            missatgeCorrecte=false;\n        }\n        if (missatgeCorrecte)\n        {\n            PrivadoPublico(privado)\n        }\n\n        return missatgeCorrecte;\n    }\n\n    // QUE A ESCOGIDO PRIVADO O PUBLICO?\n    function PrivadoPublico(privado)\n    {\n        // COMPROVAR SI EXISTE YA UNA OPCIÓN CREADA\n        var comprovarDesti = document.getElementById(\"destino\");\n        if (comprovarDesti != null)\n        {\n            comprovarDesti.remove();\n        }\n        if (privado)\n        {\n            console.log(\"Ha entrado\");\n            // CREAR EL INTPUT PARA ELEGIR CONTACTO\n            // --------- CREAR OPCIONES DE CONTACTO ---------\n            var elegir = document.getElementById(\"elegir\");\n            var parrafo = document.createElement(\"p\");\n            var select = document.createElement(\"select\");\n            var option = document.createElement(\"option\");\n            parrafo.id=\"destino\";\n            parrafo.innerHTML=\"Contacto:\";\n            select.id=\"desinatario\";\n            option.innerHTML=\"Contacto1\";\n            select.appendChild(option);\n            parrafo.appendChild(select);\n            elegir.appendChild(parrafo);\n        }\n\n        // var comprovarGrupo = document.getElementById(\"grupo\");\n        if (publico)\n        {\n            // CREAR EL INTPUT PARA ELEGIR GRUPO\n            var elegir = document.getElementById(\"elegir\");\n            var parrafo = document.createElement(\"p\");\n            var select = document.createElement(\"select\");\n            var option = document.createElement(\"option\");\n            parrafo.id=\"destino\";\n            parrafo.innerHTML=\"Grupo:\";\n            select.id=\"desinatario\";\n            option.innerHTML=\"Grupo1\";\n            select.appendChild(option);\n            parrafo.appendChild(select);\n            elegir.appendChild(parrafo);\n        }\n        return true;\n    }\n}\n\n//# sourceURL=webpack://chatapp/./src/js/messages/formulari/formulario.js?");

/***/ }),

/***/ "./src/js/messages/messages.js":
/*!*************************************!*\
  !*** ./src/js/messages/messages.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Messages\": () => (/* binding */ Messages)\n/* harmony export */ });\nclass Messages{\n\n    constructor (id,author_id,message,created, privpub, desti)\n    {\n        this.id=id;\n        this.author_id=author_id;\n        this.message=message;\n        this.created=created;     \n        this.privpub=privpub;     \n        this.desti=desti;     \n    }\n       \n}\n\n//# sourceURL=webpack://chatapp/./src/js/messages/messages.js?");

/***/ }),

/***/ "./src/js/messages/messegesList.js":
/*!*****************************************!*\
  !*** ./src/js/messages/messegesList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessagesList\": () => (/* binding */ MessagesList)\n/* harmony export */ });\nclass MessagesList{\n\n    messages;\n\n    constructor ()\n    {\n        this.carregarLocalStorage();           \n    }\n\n    nouMessages(message) {\n        this.messages.push(message);\n        this.desarLocalStorage();\n    }\n\n    desarLocalStorage() {\n        localStorage.setItem('messages',JSON.stringify(this.messages));\n    }\n\n    carregarLocalStorage() {\n        this.messages = ( localStorage.getItem('messages') )\n                        ? JSON.parse( localStorage.getItem('messages') )\n                        : [];\n    }\n       \n    lastIndex(){\n        var ultid = this.messages.length\n        if (ultid == 0) return -1\n        return this.messages[ultid-1].id;\n    }\n\n    delete(idmensaje){\n        let configuracio =  localStorage.getItem(\"messages\"); // RECOGEMOS EL LOCALSTORAGE\n        let conf = JSON.parse(configuracio); // LA PASAMOS A LISTA\n        console.log(\"hola\",conf);\n\n        // --------- Recoger los valores de configuracion ---------\n        for (var i in conf)\n        {\n            var id = conf[i].id;\n            console.log(\"id\" + id);\n            console.log(\"idmensaje \" + idmensaje);\n            if (id == idmensaje)\n            {\n                console.log(\"----A ENTRADO---\");\n\n                this.messages.splice(i,1);\n                this.desarLocalStorage();\n                break;\n            }\n        }\n    }\n    update(idmensaje,cambios){\n        let configuracio =  localStorage.getItem(\"messages\");\n        let conf = JSON.parse(configuracio);\n\n        for (var i in conf)\n        {\n            var id =  conf[i].id;\n            if (id == idmensaje)\n            {\n                this.messages[idmensaje].message = cambios;\n                this.desarLocalStorage();\n                break;\n            }\n        }\n\n\n    }\n}\n\n//# sourceURL=webpack://chatapp/./src/js/messages/messegesList.js?");

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
/******/ 			id: moduleId,
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