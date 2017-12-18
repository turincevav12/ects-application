/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _electron = __webpack_require__(0);

var _fs = __webpack_require__(1);

var _module = __webpack_require__(3);

_electron.ipcRenderer.on('data', function (event, arg) {});
_electron.ipcRenderer.send('getData');
var data = JSON.parse((0, _fs.readFileSync)('./data.json'));

document.getElementsByClassName('button-min-sv-close')[0].onclick = function () {
    close();
};

document.getElementsByClassName('button-top-line')[0].onclick = function () {
    document.getElementsByClassName('window-menu')[0].innerHTML = '';

    (0, _module.new_applicant)();
};
document.getElementsByClassName('button-top-line')[1].onclick = function () {
    document.getElementsByClassName('window-menu')[0].innerHTML = '';

    (0, _module.baza_applicant)();
};

document.getElementsByClassName('button-top-line')[2].onclick = function () {
    document.getElementsByClassName('window-menu')[0].innerHTML = '';

    (0, _module.seting_applicant)();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.new_applicant = new_applicant;
exports.baza_applicant = baza_applicant;
exports.seting_applicant = seting_applicant;

var _electron = __webpack_require__(0);

var _fs = __webpack_require__(1);

var _export_applicant = __webpack_require__(6);

_electron.ipcRenderer.on('data', function (event, arg) {});
_electron.ipcRenderer.send('getData');

var window_menu = document.getElementsByClassName('window-menu')[0];

function uppFile() {
	window.specional = JSON.parse((0, _fs.readFileSync)('./seting.json'));
	window.data = JSON.parse((0, _fs.readFileSync)('./data.json'));
	window.data_lenght = data.applicants.length;
}

function enter_baza_applicant(e) {
	var accept_window = document.getElementById('block_accept');
	if (accept_window != null) {
		accept_window.remove();
	}

	var block_accept = document.createElement('div');
	block_accept.id = 'block_accept';

	var top_line_block_accept = document.createElement('div');
	top_line_block_accept.id = 'top_line_block_accept';
	top_line_block_accept.innerText = data.applicants[e.target.id].ФИО;
	window.number_blocka = e.target.id;

	var container_text_accept = document.createElement('div');
	container_text_accept.id = 'container_text_accept';

	var text_accept = document.createElement('span');
	text_accept.id = 'text_accept';
	text_accept.innerText = "Что желаете сделать?";
	container_text_accept.appendChild(text_accept);

	var bottom_line_block_accept = document.createElement('div');
	bottom_line_block_accept.id = 'bottom_line_block_accept';

	var open_accep_block = document.createElement('div');
	open_accep_block.className = 'accep_block';
	open_accep_block.innerText = "Открыть";
	open_accep_block.onclick = function (e) {
		forma_applicant_baza();
		document.getElementById('block_accept').remove();
	};
	bottom_line_block_accept.appendChild(open_accep_block);

	var close_accep_block = document.createElement('div');
	close_accep_block.className = 'accep_block';
	close_accep_block.innerText = "Закрыть";
	close_accep_block.onclick = function (e) {
		document.getElementById('block_accept').remove();
	};
	bottom_line_block_accept.appendChild(close_accep_block);

	block_accept.appendChild(top_line_block_accept);
	block_accept.appendChild(container_text_accept);
	block_accept.appendChild(bottom_line_block_accept);
	document.body.appendChild(block_accept);
}

function new_applicant() {
	window_menu.innerHTML = '\n        <div id="bottom">\n\t\t\t<div id="image">\t\t\t\n\t\t\t</div>\n\t\t\t<div id="text-bottom">\n\t\t\t\t<div id="line-bottom-text">\n\t\t\t\t\t<span class="text-big" id="regestration-number">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u2116_____</span>\n\t\t\t\t\t<span class="text-small"  id="text-bottom-right">\n\t\t\t\t\t\t\u0417\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043D\u0430 ______ \u043A\u0443\u0440\u0441<br>\n\t\t\t\t\t\t\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438___________<br>\n\t\t\t\t\t\t\u041F\u0440\u0438\u043A\u0430\u0437 \u2116_____ \u043E\u0442 "__"_______ 2017\u0433.<br>\n\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440____________ \u0414.\u0412.\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E\n\t\t\t\t\t</span>\n\t\t\t\t</div><br>\n\t\t\t\t<div id="line-top-text">\n\t\t\t\t\t<span class="text-big" id="text-line-top">\n\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0443 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E<br>\n\t\t\t\t\t\t\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436<br>\n\t\t\t\t\t\t\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E \u0414\u0435\u043D\u0438\u0441\u0443 \u0412\u0430\u043B\u0435\u0440\u044C\u0435\u0432\u0438\u0447\u0443<br>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="data-name-persona">\n\t\t\t<div id="ot-FIO" class="block-data-name-persona">\n                <span id="text-ot-FIO">\u043E\u0442 (\u0424\u0418\u041E) </span>\n                <input id="input_text-ot-FIO" class="proverkaInput"></input>\n\t\t\t</div>\n\t\t\t<div id="data-city-citizenship-data" class="block-data-name-persona">\n\t\t\t\t<span id="text-data-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t<input class="proverkaInput" id="text-data-placeholder" type="date" class="placeholder-text-data"></input>\n\n\t\t\t\t<span id="text-city-label"> \u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t<input  class="proverkaInput" id="text-city-placeholder" class="placeholder-text-data"></input>\n\n\t\t\t\t<span id="text-citizenship-label"> \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E </span>\n\t\t\t\t<input  class="proverkaInput" id="text-citizenship-placeholder" class="placeholder-text-data"></input>\n\t\t\t</div>\n\t\t\t<div id="document-identity-serial-number" class="block-data-name-persona">\n\t\t\t\t<span id="text-document-identity">\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u0439 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C </span>\n\t\t\t\t<select id="placeholder-document-identity" class="placeholder-document-identity-serial-number">\n\t\t\t\t\t<option>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</option>\n\t\t\t\t\t<option>\u041F\u0430\u0441\u043F\u043E\u0440\u0442</option>\n\t\t\t\t\t<option>\u0412\u043F\u0438\u0441\u0430\u0442\u044C</option>\n\t\t\t\t</select>\n\t\t\t\t\n\t\t\t\t<span id="text-serial">\u0441\u0435\u0440\u0438\u044F</span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t\t\n\t\t\t\t<span id="text-number">\u2116</span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t</div>\n\t\t\t<div id="when-and-by-whom-issued" class="block-data-name-persona">\n\t\t\t\t<span id="text-when-and-by-whom-issued">\u041A\u043E\u0433\u0434\u0430 \u0438 \u043A\u0435\u043C \u0432\u044B\u0434\u0430\u043D: </span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-when-and-by-whom-issued"></input>\n\t\t\t</div>\n\t\t\t<div id="Registration-address-(as-in-passport)" \u0421>\n\t\t\t\t<span id="text-registration-address-(as-in-passport)">\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043C\u0435\u0441\u0442\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 (\u043F\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0443)</span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-registration-address-as-in-passport"></input>\n\t\t\t</div>\n\t\t\t<div id="the-actual-address" class="block-data-name-persona">\n\t\t\t\t<span id="text-the-actual-address">\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F (\u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439)</span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-the-actual-address"></input>\n\t\t\t</div>\n\t\t\t<div id="index-cellphone-homephone" class="block-data-name-persona">\n\t\t\t\t<span id="text-index">\u0438\u043D\u0434\u0435\u043A\u0441</span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-index" class="placeholder-index-cellphone-homephone"></input>\n\n\t\t\t\t<span id="text-cellphone">\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B.</span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t\t\n\t\t\t\t<span id="text-homephone">\u0434\u043E\u043C. \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input  class="proverkaInput" id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="statement">\n\t\t\t<span class="statement_center">\u0417\u0410\u042F\u0412\u041B\u0415\u041D\u0418\u0415</span><br>\n\t\t\t<span class="statement_bottom">\u041F\u0440\u043E\u0448\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043C\u0435\u043D\u044F \u0432 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t<select id="specional">\n\n\t\t\t</select>\n\t\t\t<span class="statement_bottom">\u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043A / \u0443\u0433\u043B\u0435\u0431\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C) \u043F\u043E \u043E\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F, \u043D\u0430 \u043C\u0435\u0441\u0442\u0430, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0438\u0437 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0430 / \u0437\u0430 \u0441\u0447\u0435\u0442 \u0441\u0447\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 (\u0438\u043B\u0438) \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 (\u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043E\u0431 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438) (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t</div>\n\n\t\t<div id="">\n\t\t\t<span class="statement_center">\u041E \u0421\u0415\u0411\u0415 \u0421\u041E\u041E\u0411\u0429\u0410\u042E \u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0415\u0415: </span><br>\n\t\t\t<div>\n\t\t\t\t<span>1.\u041E\u043A\u043E\u043D\u0447\u0438\u043B (\u0430) \u0432 </span>\n\t\t\t\t<input  class="proverkaInput" id="yers" type="date"></input>\n\t\t\t\t<span> \u0433\u043E\u0434\u0443 </span>\n\t\t\t\t<input  class="proverkaInput" id="name_school"></input>\n\t\t\t\t<span>(\u043F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F)</span><br>\n\t\t\t\t<span>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E\u0431 \u043E\u0431\u0440\u043E\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0438 (\u0438\u043B\u0438) \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0438\u044F </span>\n\t\t\t\t<input  class="proverkaInput" id="seria_document_school"></input>\n\t\t\t\t<span> \u2116 </span>\n\t\t\t\t<input  class="proverkaInput" id="number_document_school"></input>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>2. \u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A: \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u043A\u0438\u0439, \u0434\u0440\u0443\u0433\u043E\u0435, \u043D\u0435 \u0438\u0437\u0443\u0447\u0430\u043B (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>3. \u0412 \u043E\u0431\u0449\u0435\u0436\u0438\u0442\u0438\u0438 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>4. \u0421\u0432\u0435\u0434\u0438\u043D\u0438\u044F \u043E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445: </span><br>\n\t\t\t\t<span>\u041E\u0442\u0435\u0446 (\u0444\u0438\u043E)</span>\n\t\t\t\t<input  class="proverkaInput" id="fio_faser"></input><br>\n\n\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t<input  class="proverkaInput" id="mesto_job_f"></input>\n\n\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<input  class="proverkaInput" id="doljnost_f"></input><br>\n\n\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t<input  class="proverkaInput" id="tell_job_f"></input>\n\n\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input  class="proverkaInput" id="tell_my_f"></input><br>\n\n\n\t\t\t\t<span>\u043C\u0430\u0442\u044C (\u0444\u0438\u043E)</span>\n\t\t\t\t<input  class="proverkaInput" id="fio_mazer"></input><br>\n\n\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t<input  class="proverkaInput" id="mesto_job_m"></input>\n\n\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<input  class="proverkaInput" id="doljnost_m"></input><br>\n\n\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t<input  class="proverkaInput" id="tell_job_m"></input>\n\n\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input  class="proverkaInput" id="tell_my_m"></input>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>5. \u0421\u043B\u0443\u0436\u0431\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0410\u0440\u043C\u0438\u0438: \u0434\u0430 / \u043D\u0435\u0442 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>6. \u0418\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F</span>\n\t\t\t\t<input  class="proverkaInput" id=\'dr_sv\'></input>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div style="width: 100%">\n\t\t\t<span style="font-weight: bold">\u041A \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0433\u0430\u044E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: </span><br>\n\n\t\t\t<div style="left: 50px" class="list_document">\n\t\t\t\t<span>1 \u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0442 / \u0434\u0438\u043F\u043B\u043E\u043C \u2116 </span><br>\n\t\t\t\t<span>2 \u041A\u043E\u043F\u0438\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430</span><br>\n\t\t\t\t<span>3 \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 (3*4)</span><br>\n\t\t\t\t<span>4 \u041A\u043E\u043F\u0438\u044F \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445 \u0415\u0413\u042D / \u0413\u0418\u0410 </span><br>\n\t\t\t\t<span>5 \u041A\u043E\u043F\u0438\u044F \u043F\u0440\u0438\u0432\u0438\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430</span><br>\n\t\t\t\t<span>6 \u041C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430 086-\u0443</span><br>\n\t\t\t\t<span>7 \u041A\u043E\u043F\u0438\u044F \u043C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430</span><br>\n\t\t\t\t<span>8 \u041A\u043E\u043F\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t<span>9 \u041A\u043E\u043F\u0438\u044F \u0432\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u043B\u0435\u0442\u0430 \u0438\u043B\u0438 \u043F\u0440\u0438\u043F\u0438\u0441\u043D\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t<span>10 \u041A\u043E\u043F\u0438\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t\t<span>11 \u041E\u0442\u0440\u044B\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0431\u043B\u0430\u043D\u043A\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u0438 \u0432 \u0420\u0424 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D) </span><br>\n\t\t\t\t<span>12 \u0412\u0438\u0437\u0430 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t</div>\n\t\t\t<div style="height: 185px" class="list_document">\n\t\t\t\t<span>(\u043A\u043E\u043F\u0438\u044F / \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B)</span><br>\n\t\t\t\t<span>2 \u0448\u0442.</span><br>\n\t\t\t\t<span>6 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="signature_block">\n\t\t\t<div id="signature"></div>\n\t\t\t<span>(\u0424\u0418\u041E, \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0449\u0435\u0433\u043E)</span>\n\t\t</div>\n\n\t\t<div id="column">\n\t\t\t<div class="column_text" id="column_text_1">\n\t\t\t\t\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0430\u044E, \u0447\u0442\u043E: \n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class="column_text" id="column_text_2">\n\t\t\t\t\u041F\u043E\u0434\u043F\u0438\u0441\u044C\n\t\t\t</div>\n\t\t</div>\n\t<div id=\'output\' class="buttons">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</div>\n\t\n\t';

	document.getElementById('output').onclick = function () {
		(0, _export_applicant.export_applicant)();
	};
	uppFile();
	setTimeout(function () {
		specional = specional.specionals;
		var sel = document.getElementById('specional');
		for (var i = 0; i != specional.length; i++) {
			var opt = document.createElement('option');
			opt.innerText = specional[i];
			sel.appendChild(opt);
		}
	}, 1000);
}

function baza_applicant() {
	uppFile();
	setTimeout(function () {
		specional = specional.specionals;
		for (var i = 0; i != specional.length; i++) {
			var j = i;
			var keyFalse = false;
			var keyTrue = false;
			var block_specional = document.createElement('div');
			var span = document.createElement('span');

			block_specional.className = 'block_specional';
			block_specional.id = i;
			span.innerText = specional[i];
			block_specional.appendChild(span);

			window_menu.appendChild(block_specional);

			block_specional.onclick = function (e) {
				window_menu.innerHTML = '';
				for (var i = 0; i != data_lenght; i++) {
					if (data.applicants[i].специальност == specional[e.target.id]) {
						keyTrue = true;

						var block_content = document.createElement('div');
						block_content.className = 'block_content';
						block_content.innerText = data.applicants[i].ФИО;
						block_content.id = i;

						block_content.onclick = function (e) {
							return function (e) {
								enter_baza_applicant(e);
								window.p = e.target.id;
							};
						}(i);
						window_menu.appendChild(block_content);
					} else {
						keyFalse = true;
					}
				}
				if (keyFalse == true && keyTrue === false) {
					baza_applicant();
					alert('В данной группе нет абитуриентов');
				}
			};
		}
	}, 1000);
}

function forma_applicant_baza() {
	uppFile();
	setTimeout(function () {
		var window_applicant_baza = document.createElement('div');
		window_applicant_baza.id = 'window_applicant_baza';

		window_applicant_baza.innerHTML = '\n\t\t\t<div id="bottom">\n\t\t\t\t<div id="image">\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div id="text-bottom">\n\t\t\t\t\t<div id="line-bottom-text">\n\t\t\t\t\t\t<span class="text-big" id="regestration-number">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u2116_____</span>\n\t\t\t\t\t\t<span class="text-small"  id="text-bottom-right">\n\t\t\t\t\t\t\t\u0417\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043D\u0430 ______ \u043A\u0443\u0440\u0441<br>\n\t\t\t\t\t\t\t\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438___________<br>\n\t\t\t\t\t\t\t\u041F\u0440\u0438\u043A\u0430\u0437 \u2116_____ \u043E\u0442 "__"_______ 2017\u0433.<br>\n\t\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440____________ \u0414.\u0412.\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div><br>\n\t\t\t\t\t<div id="line-top-text">\n\t\t\t\t\t\t<span class="text-big" id="text-line-top">\n\t\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0443 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E<br>\n\t\t\t\t\t\t\t\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436<br>\n\t\t\t\t\t\t\t\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E \u0414\u0435\u043D\u0438\u0441\u0443 \u0412\u0430\u043B\u0435\u0440\u044C\u0435\u0432\u0438\u0447\u0443<br>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="data-name-persona">\n\t\t\t\t<div id="ot-FIO" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-ot-FIO">\u043E\u0442 (\u0424\u0418\u041E) </span>\n\t\t\t\t\t<span id="span_text-ot-FIO"></span>\n\t\t\t\t</div>\n\t\t\t\t<div id="data-city-citizenship-data" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-data-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t\t<span id="text-data-placeholder" type="date" class="placeholder-text-data"></span>\n\n\t\t\t\t\t<span id="text-city-label"> \u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t\t<span id="text-city-placeholder" class="placeholder-text-data"></span>\n\n\t\t\t\t\t<span id="text-citizenship-label"> \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E </span>\n\t\t\t\t\t<span id="text-citizenship-placeholder" class="placeholder-text-data"></span>\n\t\t\t\t</div>\n\t\t\t\t<div id="document-identity-serial-number" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-document-identity">\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u0439 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C </span>\n\t\t\t\t\t<span id="placeholder-document-identity" class="placeholder-document-identity-serial-number">\n\t\t\t\t\t\t\n\t\t\t\t\t</span>\n\t\t\t\t\t\n\t\t\t\t\t<span id="text-serial">\u0441\u0435\u0440\u0438\u044F</span>\n\t\t\t\t\t<span id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></span>\n\t\t\t\t\t\n\t\t\t\t\t<span id="text-number">\u2116</span>\n\t\t\t\t\t<span id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></span>\n\t\t\t\t</div>\n\t\t\t\t<div id="when-and-by-whom-issued" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-when-and-by-whom-issued">\u041A\u043E\u0433\u0434\u0430 \u0438 \u043A\u0435\u043C \u0432\u044B\u0434\u0430\u043D: </span>\n\t\t\t\t\t<span id="placeholder-when-and-by-whom-issued"></span>\n\t\t\t\t</div>\n\t\t\t\t<div id="Registration-address-(as-in-passport)" \u0421>\n\t\t\t\t\t<span id="text-registration-address-(as-in-passport)">\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043C\u0435\u0441\u0442\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 (\u043F\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0443)</span>\n\t\t\t\t\t<span id="placeholder-registration-address-as-in-passport"></span>\n\t\t\t\t</div>\n\t\t\t\t<div id="the-actual-address" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-the-actual-address">\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F (\u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439)</span>\n\t\t\t\t\t<span id="placeholder-the-actual-address"></span>\n\t\t\t\t</div>\n\t\t\t\t<div id="index-cellphone-homephone" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-index">\u0438\u043D\u0434\u0435\u043A\u0441</span>\n\t\t\t\t\t<span id="placeholder-index" class="placeholder-index-cellphone-homephone"></span>\n\n\t\t\t\t\t<span id="text-cellphone">\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B.</span>\n\t\t\t\t\t<span id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></span>\n\t\t\t\t\t\n\t\t\t\t\t<span id="text-homephone">\u0434\u043E\u043C. \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t\t<span id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="statement">\n\t\t\t\t<span class="statement_center">\u0417\u0410\u042F\u0412\u041B\u0415\u041D\u0418\u0415</span><br>\n\t\t\t\t<span class="statement_bottom">\u041F\u0440\u043E\u0448\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043C\u0435\u043D\u044F \u0432 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<span id="specional"></span>\n\t\t\t\t<span class="statement_bottom">\u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043A / \u0443\u0447\u0435\u0431\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C) \u043F\u043E \u043E\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F, \u043D\u0430 \u043C\u0435\u0441\u0442\u0430, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0438\u0437 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0430 / \u0437\u0430 \u0441\u0447\u0435\u0442 \u0441\u0447\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 (\u0438\u043B\u0438) \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 (\u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043E\u0431 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438) (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\n\t\t\t<div id="">\n\t\t\t\t<span class="statement_center">\u041E \u0421\u0415\u0411\u0415 \u0421\u041E\u041E\u0411\u0429\u0410\u042E \u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0415\u0415: </span><br>\n\t\t\t\t<div>\n\t\t\t\t\t<span>1.\u041E\u043A\u043E\u043D\u0447\u0438\u043B (\u0430) \u0432 </span>\n\t\t\t\t\t<span id="yers" type="date"></span>\n\t\t\t\t\t<span> \u0433\u043E\u0434\u0443 </span>\n\t\t\t\t\t<span id="name_school"></span>\n\t\t\t\t\t<span>(\u043F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F)</span><br>\n\t\t\t\t\t<span>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E\u0431 \u043E\u0431\u0440\u043E\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0438 (\u0438\u043B\u0438) \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0438\u044F </span>\n\t\t\t\t\t<span id="seria_document_school"></span>\n\t\t\t\t\t<span> \u2116 </span>\n\t\t\t\t\t<span id="number_document_school"></span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>2. \u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A: \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u043A\u0438\u0439, \u0434\u0440\u0443\u0433\u043E\u0435, \u043D\u0435 \u0438\u0437\u0443\u0447\u0430\u043B (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>3. \u0412 \u043E\u0431\u0449\u0435\u0436\u0438\u0442\u0438\u0438 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>4. \u0421\u0432\u0435\u0434\u0438\u043D\u0438\u044F \u043E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445: </span><br>\n\t\t\t\t\t<span>\u041E\u0442\u0435\u0446 (\u0444\u0438\u043E)</span>\n\t\t\t\t\t<span id="fio_faser"></span><br>\n\n\t\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t\t<span id="mesto_job_f"></span>\n\n\t\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t\t<span id="doljnost_f"></span><br>\n\n\t\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t\t<span id="tell_job_f"></span>\n\n\t\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t\t<span id="tell_my_f"></span><br>\n\n\n\t\t\t\t\t<span>\u043C\u0430\u0442\u044C (\u0444\u0438\u043E)</span>\n\t\t\t\t\t<span id="fio_mazer"></span><br>\n\n\t\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t\t<span id="mesto_job_m"></span>\n\n\t\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t\t<span id="doljnost_m"></span><br>\n\n\t\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t\t<span id="tell_job_m"></span>\n\n\t\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t\t<span id="tell_my_m"></span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>5. \u0421\u043B\u0443\u0436\u0431\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0410\u0440\u043C\u0438\u0438: \u0434\u0430 / \u043D\u0435\u0442 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>6. \u0418\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F</span>\n\t\t\t\t\t<span id=\'dr_sv\'></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div style="width: 100%">\n\t\t\t\t<span style="font-weight: bold">\u041A \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0433\u0430\u044E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: </span><br>\n\n\t\t\t\t<div style="left: 50px" class="list_document">\n\t\t\t\t\t<span>1 \u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0442 / \u0434\u0438\u043F\u043B\u043E\u043C \u2116 </span><br>\n\t\t\t\t\t<span>2 \u041A\u043E\u043F\u0438\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430</span><br>\n\t\t\t\t\t<span>3 \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 (3*4)</span><br>\n\t\t\t\t\t<span>4 \u041A\u043E\u043F\u0438\u044F \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445 \u0415\u0413\u042D / \u0413\u0418\u0410 </span><br>\n\t\t\t\t\t<span>5 \u041A\u043E\u043F\u0438\u044F \u043F\u0440\u0438\u0432\u0438\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430</span><br>\n\t\t\t\t\t<span>6 \u041C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430 086-\u0443</span><br>\n\t\t\t\t\t<span>7 \u041A\u043E\u043F\u0438\u044F \u043C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430</span><br>\n\t\t\t\t\t<span>8 \u041A\u043E\u043F\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t\t<span>9 \u041A\u043E\u043F\u0438\u044F \u0432\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u043B\u0435\u0442\u0430 \u0438\u043B\u0438 \u043F\u0440\u0438\u043F\u0438\u0441\u043D\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t\t<span>10 \u041A\u043E\u043F\u0438\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t\t\t<span>11 \u041E\u0442\u0440\u044B\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0431\u043B\u0430\u043D\u043A\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u0438 \u0432 \u0420\u0424 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D) </span><br>\n\t\t\t\t\t<span>12 \u0412\u0438\u0437\u0430 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t\t</div>\n\t\t\t\t<div style="height: 185px" class="list_document">\n\t\t\t\t\t<span>(\u043A\u043E\u043F\u0438\u044F / \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B)</span><br>\n\t\t\t\t\t<span>2 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>6 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id="signature_block">\n\t\t\t\t<div id="signature"></div>\n\t\t\t\t<span>(\u0424\u0418\u041E, \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0449\u0435\u0433\u043E)</span>\n\t\t\t</div>\n\n\t\t\t<div id="column">\n\t\t\t\t<div class="column_text" id="column_text_1">\n\t\t\t\t\t\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0430\u044E, \u0447\u0442\u043E: \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="column_text" id="column_text_2">\n\t\t\t\t\t\u041F\u043E\u0434\u043F\u0438\u0441\u044C\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t<div id="print" class="buttons">\u041F\u0435\u0447\u0430\u0442\u044C</div>\n\n\t\t<div id="redact" class="buttons">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</div>\n\n\t\t<div id="delete" class="buttons">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</div>\n\n\t\t<div id="close" class="buttons">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</div>\t\n\n\t\t';
		document.body.appendChild(window_applicant_baza);

		document.getElementById('close').onclick = function () {
			document.getElementById('window_applicant_baza').remove();
		};

		document.getElementById('delete').onclick = function () {
			data.applicants.splice(window.p, 1);

			(0, _fs.writeFile)('./data.json', JSON.stringify(data, null, '\t'), function (err) {
				if (err) throw err;else {
					alert('Успешно');
				};
			});
			document.getElementById('window_applicant_baza').remove();
			document.getElementsByClassName('window-menu')[0].innerHTML = '';
			forma_applicant_baza();
		};

		var key = Number.parseInt(p);
		document.getElementById('span_text-ot-FIO').innerText = data.applicants[key].ФИО;
		document.getElementById('text-data-placeholder').innerText = data.applicants[key].Дата_рождения;
		document.getElementById('text-city-placeholder').innerText = data.applicants[key].Место_рождения;
		document.getElementById('text-citizenship-placeholder').innerText = data.applicants[key].Гражданство;
		document.getElementById('placeholder-document-identity').innerText = data.applicants[key].Документ_удостоверяющий_личность;
		document.getElementById('placeholder-serial').innerText = data.applicants[key].Серия;
		document.getElementById('placeholder-number').innerText = data.applicants[key].Номер;
		document.getElementById('placeholder-when-and-by-whom-issued').innerText = data.applicants[key].Кем_и_когда_выдан;
		document.getElementById('placeholder-registration-address-as-in-passport').innerText = data.applicants[key].Адрес_регистрации_места_жительства_по_паспорту;
		document.getElementById('placeholder-the-actual-address').innerText = data.applicants[key].Адрес_проживания_фактический;
		document.getElementById('placeholder-index').innerText = data.applicants[key].индекс;
		document.getElementById('placeholder-cellphone').innerText = data.applicants[key].сот_телефон;
		document.getElementById('placeholder-homephone').innerText = data.applicants[key].дом_телефон;

		document.getElementById('specional').innerText = data.applicants[key].специальност;
		document.getElementById('yers').innerText = data.applicants[key].окончил_школу_год;
		document.getElementById('name_school').innerText = data.applicants[key].окончил_школу_название;
		document.getElementById('seria_document_school').innerText = data.applicants[key].документы_серия;
		document.getElementById('number_document_school').innerText = data.applicants[key].документы_номер;

		document.getElementById('fio_faser').innerText = data.applicants[key].отец_фио;
		document.getElementById('mesto_job_f').innerText = data.applicants[key].отец_место_работы;
		document.getElementById('doljnost_f').innerText = data.applicants[key].отец_должность;
		document.getElementById('tell_job_f').innerText = data.applicants[key].отец_раб_тел;
		document.getElementById('tell_my_f').innerText = data.applicants[key].отец_сот_тел;

		document.getElementById('fio_mazer').innerText = data.applicants[key].мать_фио;
		document.getElementById('mesto_job_m').innerText = data.applicants[key].мать_место_работы;
		document.getElementById('doljnost_m').innerText = data.applicants[key].мать_должность;
		document.getElementById('tell_job_m').innerText = data.applicants[key].мать_раб_тел;
		document.getElementById('tell_my_m').innerText = data.applicants[key].мать_сот_тел;
		document.getElementById('dr_sv').innerText = data.applicants[key].другие_сведения;

		document.getElementById('print').onclick = function () {
			var seting = JSON.parse((0, _fs.readFileSync)('./seting.json'));
			seting.key = p;
			(0, _fs.writeFile)('./seting.json', JSON.stringify(seting, null, '\t'), function (err) {});
			setTimeout(function () {
				_electron.ipcRenderer.send('print');
				document.getElementById('window_applicant_baza').remove();
			}, 1000);
		};

		document.getElementById('redact').onclick = function () {
			document.getElementById('window_applicant_baza').remove();
			window_menu.innerHTML = '\n\t\t\t<div id="bottom">\n\t\t\t\t<div id="image">\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div id="text-bottom">\n\t\t\t\t\t<div id="line-bottom-text">\n\t\t\t\t\t\t<span class="text-big" id="regestration-number">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u2116_____</span>\n\t\t\t\t\t\t<span class="text-small"  id="text-bottom-right">\n\t\t\t\t\t\t\t\u0417\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043D\u0430 ______ \u043A\u0443\u0440\u0441<br>\n\t\t\t\t\t\t\t\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438___________<br>\n\t\t\t\t\t\t\t\u041F\u0440\u0438\u043A\u0430\u0437 \u2116_____ \u043E\u0442 "__"_______ 2017\u0433.<br>\n\t\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440____________ \u0414.\u0412.\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div><br>\n\t\t\t\t\t<div id="line-top-text">\n\t\t\t\t\t\t<span class="text-big" id="text-line-top">\n\t\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0443 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E<br>\n\t\t\t\t\t\t\t\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436<br>\n\t\t\t\t\t\t\t\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E \u0414\u0435\u043D\u0438\u0441\u0443 \u0412\u0430\u043B\u0435\u0440\u044C\u0435\u0432\u0438\u0447\u0443<br>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="data-name-persona">\n\t\t\t\t<div id="ot-FIO" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-ot-FIO">\u043E\u0442 (\u0424\u0418\u041E) </span>\n\t\t\t\t\t<input id="input_text-ot-FIO" class="proverkaInputEdit"></input>\n\t\t\t\t</div>\n\t\t\t\t<div id="data-city-citizenship-data" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-data-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t\t<input class="proverkaInputEdit" id="text-data-placeholder" type="date" class="placeholder-text-data"></input>\n\n\t\t\t\t\t<span id="text-city-label"> \u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="text-city-placeholder" class="placeholder-text-data"></input>\n\n\t\t\t\t\t<span id="text-citizenship-label"> \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E </span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="text-citizenship-placeholder" class="placeholder-text-data"></input>\n\t\t\t\t</div>\n\t\t\t\t<div id="document-identity-serial-number" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-document-identity">\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u0439 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C </span>\n\t\t\t\t\t<select id="placeholder-document-identity" class="placeholder-document-identity-serial-number">\n\t\t\t\t\t\t<option>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</option>\n\t\t\t\t\t\t<option>\u041F\u0430\u0441\u043F\u043E\u0440\u0442</option>\n\t\t\t\t\t\t<option>\u0412\u043F\u0438\u0441\u0430\u0442\u044C</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t\n\t\t\t\t\t<span id="text-serial">\u0441\u0435\u0440\u0438\u044F</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t\t\t\n\t\t\t\t\t<span id="text-number">\u2116</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t\t</div>\n\t\t\t\t<div id="when-and-by-whom-issued" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-when-and-by-whom-issued">\u041A\u043E\u0433\u0434\u0430 \u0438 \u043A\u0435\u043C \u0432\u044B\u0434\u0430\u043D: </span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-when-and-by-whom-issued"></input>\n\t\t\t\t</div>\n\t\t\t\t<div id="Registration-address-(as-in-passport)" \u0421>\n\t\t\t\t\t<span id="text-registration-address-(as-in-passport)">\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043C\u0435\u0441\u0442\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 (\u043F\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0443)</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-registration-address-as-in-passport"></input>\n\t\t\t\t</div>\n\t\t\t\t<div id="the-actual-address" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-the-actual-address">\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F (\u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439)</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-the-actual-address"></input>\n\t\t\t\t</div>\n\t\t\t\t<div id="index-cellphone-homephone" class="block-data-name-persona">\n\t\t\t\t\t<span id="text-index">\u0438\u043D\u0434\u0435\u043A\u0441</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-index" class="placeholder-index-cellphone-homephone"></input>\n\n\t\t\t\t\t<span id="text-cellphone">\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B.</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t\t\t\n\t\t\t\t\t<span id="text-homephone">\u0434\u043E\u043C. \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="statement">\n\t\t\t\t<span class="statement_center">\u0417\u0410\u042F\u0412\u041B\u0415\u041D\u0418\u0415</span><br>\n\t\t\t\t<span class="statement_bottom">\u041F\u0440\u043E\u0448\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043C\u0435\u043D\u044F \u0432 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<select id="specional">\n\n\t\t\t\t</select>\n\t\t\t\t<span class="statement_bottom">\u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043A / \u0443\u0433\u043B\u0435\u0431\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C) \u043F\u043E \u043E\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F, \u043D\u0430 \u043C\u0435\u0441\u0442\u0430, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0438\u0437 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0430 / \u0437\u0430 \u0441\u0447\u0435\u0442 \u0441\u0447\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 (\u0438\u043B\u0438) \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 (\u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043E\u0431 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438) (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\n\t\t\t<div id="">\n\t\t\t\t<span class="statement_center">\u041E \u0421\u0415\u0411\u0415 \u0421\u041E\u041E\u0411\u0429\u0410\u042E \u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0415\u0415: </span><br>\n\t\t\t\t<div>\n\t\t\t\t\t<span>1.\u041E\u043A\u043E\u043D\u0447\u0438\u043B (\u0430) \u0432 </span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="yers" type="date"></input>\n\t\t\t\t\t<span> \u0433\u043E\u0434\u0443 </span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="name_school"></input>\n\t\t\t\t\t<span>(\u043F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F)</span><br>\n\t\t\t\t\t<span>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E\u0431 \u043E\u0431\u0440\u043E\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0438 (\u0438\u043B\u0438) \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0438\u044F </span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="seria_document_school"></input>\n\t\t\t\t\t<span> \u2116 </span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="number_document_school"></input>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>2. \u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A: \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u043A\u0438\u0439, \u0434\u0440\u0443\u0433\u043E\u0435, \u043D\u0435 \u0438\u0437\u0443\u0447\u0430\u043B (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>3. \u0412 \u043E\u0431\u0449\u0435\u0436\u0438\u0442\u0438\u0438 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>4. \u0421\u0432\u0435\u0434\u0438\u043D\u0438\u044F \u043E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445: </span><br>\n\t\t\t\t\t<span>\u041E\u0442\u0435\u0446 (\u0444\u0438\u043E)</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="fio_faser"></input><br>\n\n\t\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="mesto_job_f"></input>\n\n\t\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="doljnost_f"></input><br>\n\n\t\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="tell_job_f"></input>\n\n\t\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="tell_my_f"></input><br>\n\n\n\t\t\t\t\t<span>\u043C\u0430\u0442\u044C (\u0444\u0438\u043E)</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="fio_mazer"></input><br>\n\n\t\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="mesto_job_m"></input>\n\n\t\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="doljnost_m"></input><br>\n\n\t\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="tell_job_m"></input>\n\n\t\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id="tell_my_m"></input>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>5. \u0421\u043B\u0443\u0436\u0431\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0410\u0440\u043C\u0438\u0438: \u0434\u0430 / \u043D\u0435\u0442 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>6. \u0418\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F</span>\n\t\t\t\t\t<input  class="proverkaInputEdit" id=\'dr_sv\'></input>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div style="width: 100%">\n\t\t\t\t<span style="font-weight: bold">\u041A \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0433\u0430\u044E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: </span><br>\n\n\t\t\t\t<div style="left: 50px" class="list_document">\n\t\t\t\t\t<span>1 \u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0442 / \u0434\u0438\u043F\u043B\u043E\u043C \u2116 </span><br>\n\t\t\t\t\t<span>2 \u041A\u043E\u043F\u0438\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430</span><br>\n\t\t\t\t\t<span>3 \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 (3*4)</span><br>\n\t\t\t\t\t<span>4 \u041A\u043E\u043F\u0438\u044F \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445 \u0415\u0413\u042D / \u0413\u0418\u0410 </span><br>\n\t\t\t\t\t<span>5 \u041A\u043E\u043F\u0438\u044F \u043F\u0440\u0438\u0432\u0438\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430</span><br>\n\t\t\t\t\t<span>6 \u041C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430 086-\u0443</span><br>\n\t\t\t\t\t<span>7 \u041A\u043E\u043F\u0438\u044F \u043C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430</span><br>\n\t\t\t\t\t<span>8 \u041A\u043E\u043F\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t\t<span>9 \u041A\u043E\u043F\u0438\u044F \u0432\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u043B\u0435\u0442\u0430 \u0438\u043B\u0438 \u043F\u0440\u0438\u043F\u0438\u0441\u043D\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t\t<span>10 \u041A\u043E\u043F\u0438\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t\t\t<span>11 \u041E\u0442\u0440\u044B\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0431\u043B\u0430\u043D\u043A\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u0438 \u0432 \u0420\u0424 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D) </span><br>\n\t\t\t\t\t<span>12 \u0412\u0438\u0437\u0430 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t\t</div>\n\t\t\t\t<div style="height: 185px" class="list_document">\n\t\t\t\t\t<span>(\u043A\u043E\u043F\u0438\u044F / \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B)</span><br>\n\t\t\t\t\t<span>2 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>6 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id="signature_block">\n\t\t\t\t<div id="signature"></div>\n\t\t\t\t<span>(\u0424\u0418\u041E, \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0449\u0435\u0433\u043E)</span>\n\t\t\t</div>\n\n\t\t\t<div id="column">\n\t\t\t\t<div class="column_text" id="column_text_1">\n\t\t\t\t\t\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0430\u044E, \u0447\u0442\u043E: \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="column_text" id="column_text_2">\n\t\t\t\t\t\u041F\u043E\u0434\u043F\u0438\u0441\u044C\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div id=\'editSave\' class="buttons">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</div>\t\n\t\t';
			var specionals = JSON.parse((0, _fs.readFileSync)('./seting.json'));
			var specional = specionals.specionals;
			var sel = document.getElementById('specional');
			for (var i = 0; i != specional.length; i++) {
				var opt = document.createElement('option');
				opt.innerText = specional[i];
				sel.appendChild(opt);
			}
			var edit = document.getElementsByClassName('proverkaInputEdit');
			console.log(edit);
			var key = window.p;
			edit[0].value = data.applicants[key].ФИО;
			edit[1].value = data.applicants[key].Дата_рождения;
			edit[2].value = data.applicants[key].Место_рождения;
			edit[3].value = data.applicants[key].Гражданство;
			edit[4].value = data.applicants[key].Серия;
			edit[5].value = data.applicants[key].Номер;
			edit[6].value = data.applicants[key].Кем_и_когда_выдан;
			edit[7].value = data.applicants[key].Адрес_регистрации_места_жительства_по_паспорту;
			edit[8].value = data.applicants[key].Адрес_проживания_фактический;
			edit[9].value = data.applicants[key].индекс;
			edit[10].value = data.applicants[key].сот_телефон;
			edit[11].value = data.applicants[key].дом_телефон;

			edit[12].value = data.applicants[key].окончил_школу_год;
			edit[13].value = data.applicants[key].окончил_школу_название;
			edit[14].value = data.applicants[key].документы_серия;
			edit[15].value = data.applicants[key].документы_номер;

			edit[16].value = data.applicants[key].отец_фио;
			edit[17].value = data.applicants[key].отец_место_работы;
			edit[18].value = data.applicants[key].отец_должность;
			edit[19].value = data.applicants[key].отец_раб_тел;
			edit[20].value = data.applicants[key].отец_сот_тел;

			edit[21].value = data.applicants[key].мать_фио;
			edit[22].value = data.applicants[key].мать_место_работы;
			edit[23].value = data.applicants[key].мать_должность;
			edit[24].value = data.applicants[key].мать_раб_тел;
			edit[25].value = data.applicants[key].мать_сот_тел;
			edit[26].value = data.applicants[key].другие_сведения;
			document.getElementById('editSave').onclick = function () {
				data.applicants.splice(key, 1);

				var edit = document.getElementsByClassName('proverkaInputEdit');
				data.applicants.push({
					"ФИО": edit[0].value,
					"Дата_рождения": edit[1].value,
					"Место_рождения": edit[2].value,
					"Гражданство": edit[3].value,
					"Документ_удостоверяющий_личность": document.getElementById('placeholder-document-identity').value,
					"Серия": edit[4].value,
					"Номер": edit[5].value,
					"Кем_и_когда_выдан": edit[6].value,
					"Адрес_регистрации_места_жительства_по_паспорту": edit[7].value,
					"Адрес_проживания_фактический": edit[8].value,
					"индекс": edit[9].value,
					"сот_телефон": edit[10].value,
					"дом_телефон": edit[11].value,

					"специальност": document.getElementById('specional').value,
					"окончил_школу_год": edit[12].value,
					"окончил_школу_название": edit[13].value,
					"документы_серия": edit[14].value,
					"документы_номер": edit[15].value,

					"отец_фио": edit[16].value,
					"отец_место_работы": edit[17].value,
					"отец_должность": edit[18].value,
					"отец_раб_тел": edit[19].value,
					"отец_сот_тел": edit[20].value,

					"мать_фио": edit[21].value,
					"мать_место_работы": edit[22].value,
					"мать_должность": edit[23].value,
					"мать_раб_тел": edit[24].value,
					"мать_сот_тел": edit[25].value,
					"другие_сведения": edit[26].value
				});

				(0, _fs.writeFile)('./data.json', JSON.stringify(data, null, '\t'), function (err) {
					if (err) throw err;else {
						alert('Успешно');
					};
				});

				document.getElementsByClassName('window-menu')[0].innerHTML = '';
				forma_applicant_baza();
			};
		};
	}, 1000);
}

function seting_applicant() {
	var blockSpecional = document.createElement('div');

	blockSpecional.innerHTML = '\n\t\t<div id=\'formSelect\'>\n\t\t\t<div class="settingA">\n\t\t\t\t<span id="spanSetting">\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442</span><br>\n\t\t\t\t<select id="settingSelect">\n\t\t\t\t\n\t\t\t\t</select><br>\n\t\t\t\t<div id=\'buttonSetting2\'>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</div>\n\t\t\t</div>\n\n\t\t\t<div class="settingA">\n\t\t\t\t<input id="settingSpNew"></input>\n\t\t\t\t<div id=\'buttonSetting\'>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</div>\n\t\t\t</div>\n\n\t\t\t<div class="settingA">\n\t\t\t\t<input id="loginNew" class=\'newUsers\' placeholder="login"></input><br>\n\t\t\t\t<input id="passNew" class=\'newUsers\' placeholder="pass"></input>\n\t\t\t\t<div id=\'newUser\'>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</div>\n\t\t\t</div>\n\t\t</div>\t\t\n\t';
	window_menu.appendChild(blockSpecional);

	var specionals = JSON.parse((0, _fs.readFileSync)('./seting.json'));
	var users = specionals.users;
	var specional = specionals.specionals;

	var sel = document.getElementById('settingSelect');
	for (var i = 0; i != specional.length; i++) {
		var opt = document.createElement('option');
		opt.innerText = specional[i];
		sel.appendChild(opt);
	}

	document.getElementById('buttonSetting').onclick = function () {
		document.getElementById('settingSpNew').value;

		specional.push(document.getElementById('settingSpNew').value);

		(0, _fs.writeFile)('./seting.json', JSON.stringify(specionals, null, '\t'), function (err) {
			if (err) throw err;else {
				alert('Успешно');
				document.getElementById('settingSpNew').value = '';
			};
		});
	};
	document.getElementById('buttonSetting2').onclick = function () {
		var select = document.getElementById('settingSelect').selectedIndex;

		specional.splice(select, 1);

		(0, _fs.writeFile)('./seting.json', JSON.stringify(specionals, null, '\t'), function (err) {
			if (err) throw err;else {
				alert('Успешно');
			};
		});
	};

	document.getElementById('newUser').onclick = function () {

		var login = document.getElementById('loginNew').value;
		var pass = document.getElementById('passNew').value;

		users.push({
			"login": login,
			"pass": pass
		});
		(0, _fs.writeFile)('./seting.json', JSON.stringify(specionals, null, '\t'), function (err) {
			if (err) throw err;else {
				alert('Успешно');
			};
		});
	};
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.export_applicant = export_applicant;

var _electron = __webpack_require__(0);

var _fs = __webpack_require__(1);

var _module = __webpack_require__(3);

_electron.ipcRenderer.on('data', function (event, arg) {});
_electron.ipcRenderer.send('getData');
var data = JSON.parse((0, _fs.readFileSync)('./data.json'));

function export_applicant() {

    data.applicants.push({
        "ФИО": document.getElementById('input_text-ot-FIO').value,
        "Дата_рождения": document.getElementById('text-data-placeholder').value,
        "Место_рождения": document.getElementById('text-city-placeholder').value,
        "Гражданство": document.getElementById('text-citizenship-placeholder').value,
        "Документ_удостоверяющий_личность": document.getElementById('placeholder-document-identity').value,
        "Серия": document.getElementById('placeholder-serial').value,
        "Номер": document.getElementById('placeholder-number').value,
        "Кем_и_когда_выдан": document.getElementById('placeholder-when-and-by-whom-issued').value,
        "Адрес_регистрации_места_жительства_по_паспорту": document.getElementById('placeholder-registration-address-as-in-passport').value,
        "Адрес_проживания_фактический": document.getElementById('placeholder-the-actual-address').value,
        "индекс": document.getElementById('placeholder-index').value,
        "сот_телефон": document.getElementById('placeholder-cellphone').value,
        "дом_телефон": document.getElementById('placeholder-homephone').value,

        "специальност": document.getElementById('specional').value,
        "окончил_школу_год": document.getElementById('yers').value,
        "окончил_школу_название": document.getElementById('name_school').value,
        "документы_серия": document.getElementById('seria_document_school').value,
        "документы_номер": document.getElementById('number_document_school').value,

        "отец_фио": document.getElementById('fio_faser').value,
        "отец_место_работы": document.getElementById('mesto_job_f').value,
        "отец_должность": document.getElementById('doljnost_f').value,
        "отец_раб_тел": document.getElementById('tell_job_f').value,
        "отец_сот_тел": document.getElementById('tell_my_f').value,

        "мать_фио": document.getElementById('fio_mazer').value,
        "мать_место_работы": document.getElementById('mesto_job_m').value,
        "мать_должность": document.getElementById('doljnost_m').value,
        "мать_раб_тел": document.getElementById('tell_job_m').value,
        "мать_сот_тел": document.getElementById('tell_my_m').value,
        "другие_сведения": document.getElementById('dr_sv').value
    });

    var inputs = document.getElementsByClassName('proverkaInput');
    var nz = 0;
    for (var i = 0; i != inputs.length; i++) {
        if (inputs[i].value == '') {
            alert('Не заполнено поле ' + i);
            nz = nz + 1;
        }
    }
    if (nz == 0) {
        (0, _fs.writeFile)('./data.json', JSON.stringify(data, null, '\t'), function (err) {
            if (err) throw err;else {
                alert('Успешно');
                document.getElementsByClassName('window-menu')[0].innerHTML = '';
                (0, _module.new_applicant)();
            };
        });
    }
}

/***/ })
/******/ ]);