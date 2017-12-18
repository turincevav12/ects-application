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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.new_applicant = new_applicant;
exports.baza_applicant = baza_applicant;
exports.otbor_applicant = otbor_applicant;
exports.seting_applicant = seting_applicant;

var _electron = __webpack_require__(0);

var _fs = __webpack_require__(1);

var _export_applicant = __webpack_require__(4);

_electron.ipcRenderer.on('data', function (event, arg) {});
_electron.ipcRenderer.send('getData');
var data = JSON.parse((0, _fs.readFileSync)('./data.json'));
var seting = JSON.parse((0, _fs.readFileSync)('./seting.json'));
var data_lenght = data.applicants.length;

var window_menu = document.getElementsByClassName('window-menu')[0];

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

function button_sort_name_f() {
	document.getElementsByClassName('window-menu')[0].innerHTML = '';
	otbor_applicant();

	var input_name = document.createElement('input');
	input_name.className = 'input_name';

	var button_name = document.createElement('div');
	button_name.id = 'button_name';
	button_name.innerText = 'Найти';

	window_menu.appendChild(input_name);
	window_menu.appendChild(button_name);

	var select = document.getElementsByClassName('input_name')[0];
	for (var i = 0; i != data_lenght; i++) {
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = data.applicants[i].ФИО;
		select.appendChild(opt);
	}
}

function new_applicant() {
	window_menu.innerHTML = '\n        <div id="bottom">\n\t\t\t<div id="image">\t\t\t\n\t\t\t</div>\n\t\t\t<div id="text-bottom">\n\t\t\t\t<div id="line-bottom-text">\n\t\t\t\t\t<span class="text-big" id="regestration-number">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u2116_____</span>\n\t\t\t\t\t<span class="text-small"  id="text-bottom-right">\n\t\t\t\t\t\t\u0417\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043D\u0430 ______ \u043A\u0443\u0440\u0441<br>\n\t\t\t\t\t\t\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438___________<br>\n\t\t\t\t\t\t\u041F\u0440\u0438\u043A\u0430\u0437 \u2116_____ \u043E\u0442 "__"_______ 2017\u0433.<br>\n\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440____________ \u0414.\u0412.\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E\n\t\t\t\t\t</span>\n\t\t\t\t</div><br>\n\t\t\t\t<div id="line-top-text">\n\t\t\t\t\t<span class="text-big" id="text-line-top">\n\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0443 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E<br>\n\t\t\t\t\t\t\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436<br>\n\t\t\t\t\t\t\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E \u0414\u0435\u043D\u0438\u0441\u0443 \u0412\u0430\u043B\u0435\u0440\u044C\u0435\u0432\u0438\u0447\u0443<br>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="data-name-persona">\n\t\t\t<div id="ot-FIO" class="block-data-name-persona">\n                <span id="text-ot-FIO">\u043E\u0442 (\u0424\u0418\u041E) </span>\n                <input id="input_text-ot-FIO"></input>\n\t\t\t</div>\n\t\t\t<div id="data-city-citizenship-data" class="block-data-name-persona">\n\t\t\t\t<span id="text-data-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t<input id="text-data-placeholder" type="date" class="placeholder-text-data"></input>\n\n\t\t\t\t<span id="text-city-label"> \u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t<input id="text-city-placeholder" class="placeholder-text-data"></input>\n\n\t\t\t\t<span id="text-citizenship-label"> \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E </span>\n\t\t\t\t<input id="text-citizenship-placeholder" class="placeholder-text-data"></input>\n\t\t\t</div>\n\t\t\t<div id="document-identity-serial-number" class="block-data-name-persona">\n\t\t\t\t<span id="text-document-identity">\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u0439 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C </span>\n\t\t\t\t<select id="placeholder-document-identity" class="placeholder-document-identity-serial-number">\n\t\t\t\t\t<option>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</option>\n\t\t\t\t\t<option>\u041F\u0430\u0441\u043F\u043E\u0440\u0442</option>\n\t\t\t\t\t<option>\u0412\u043F\u0438\u0441\u0430\u0442\u044C</option>\n\t\t\t\t</select>\n\t\t\t\t\n\t\t\t\t<span id="text-serial">\u0441\u0435\u0440\u0438\u044F</span>\n\t\t\t\t<input id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t\t\n\t\t\t\t<span id="text-number">\u2116</span>\n\t\t\t\t<input id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t</div>\n\t\t\t<div id="when-and-by-whom-issued" class="block-data-name-persona">\n\t\t\t\t<span id="text-when-and-by-whom-issued">\u041A\u043E\u0433\u0434\u0430 \u0438 \u043A\u0435\u043C \u0432\u044B\u0434\u0430\u043D: </span>\n\t\t\t\t<input id="placeholder-when-and-by-whom-issued"></input>\n\t\t\t</div>\n\t\t\t<div id="Registration-address-(as-in-passport)" \u0421>\n\t\t\t\t<span id="text-registration-address-(as-in-passport)">\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043C\u0435\u0441\u0442\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 (\u043F\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0443)</span>\n\t\t\t\t<input id="placeholder-registration-address-as-in-passport"></input>\n\t\t\t</div>\n\t\t\t<div id="the-actual-address" class="block-data-name-persona">\n\t\t\t\t<span id="text-the-actual-address">\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F (\u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439)</span>\n\t\t\t\t<input id="placeholder-the-actual-address"></input>\n\t\t\t</div>\n\t\t\t<div id="index-cellphone-homephone" class="block-data-name-persona">\n\t\t\t\t<span id="text-index">\u0438\u043D\u0434\u0435\u043A\u0441</span>\n\t\t\t\t<input id="placeholder-index" class="placeholder-index-cellphone-homephone"></input>\n\n\t\t\t\t<span id="text-cellphone">\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B.</span>\n\t\t\t\t<input id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t\t\n\t\t\t\t<span id="text-homephone">\u0434\u043E\u043C. \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="statement">\n\t\t\t<span class="statement_center">\u0417\u0410\u042F\u0412\u041B\u0415\u041D\u0418\u0415</span><br>\n\t\t\t<span class="statement_bottom">\u041F\u0440\u043E\u0448\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043C\u0435\u043D\u044F \u0432 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t<select id="specional">\n\n\t\t\t</select>\n\t\t\t<span class="statement_bottom">\u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043A / \u0443\u0433\u043B\u0435\u0431\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C) \u043F\u043E \u043E\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F, \u043D\u0430 \u043C\u0435\u0441\u0442\u0430, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0438\u0437 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0430 / \u0437\u0430 \u0441\u0447\u0435\u0442 \u0441\u0447\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 (\u0438\u043B\u0438) \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 (\u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043E\u0431 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438) (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t</div>\n\n\t\t<div id="">\n\t\t\t<span class="statement_center">\u041E \u0421\u0415\u0411\u0415 \u0421\u041E\u041E\u0411\u0429\u0410\u042E \u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0415\u0415: </span><br>\n\t\t\t<div>\n\t\t\t\t<span>1.\u041E\u043A\u043E\u043D\u0447\u0438\u043B (\u0430) \u0432 </span>\n\t\t\t\t<input id="yers" type="date"></input>\n\t\t\t\t<span> \u0433\u043E\u0434\u0443 </span>\n\t\t\t\t<input id="name_school"></input>\n\t\t\t\t<span>(\u043F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F)</span><br>\n\t\t\t\t<span>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E\u0431 \u043E\u0431\u0440\u043E\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0438 (\u0438\u043B\u0438) \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0438\u044F </span>\n\t\t\t\t<input id="seria_document_school"></input>\n\t\t\t\t<span> \u2116 </span>\n\t\t\t\t<input id="number_document_school"></input>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>2. \u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A: \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u043A\u0438\u0439, \u0434\u0440\u0443\u0433\u043E\u0435, \u043D\u0435 \u0438\u0437\u0443\u0447\u0430\u043B (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>3. \u0412 \u043E\u0431\u0449\u0435\u0436\u0438\u0442\u0438\u0438 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>4. \u0421\u0432\u0435\u0434\u0438\u043D\u0438\u044F \u043E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445: </span><br>\n\t\t\t\t<span>\u041E\u0442\u0435\u0446 (\u0444\u0438\u043E)</span>\n\t\t\t\t<input id="fio_faser"></input><br>\n\n\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t<input id="mesto_job_f"></input>\n\n\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<input id="doljnost_f"></input><br>\n\n\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t<input id="tell_job_f"></input>\n\n\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input id="tell_my_f"></input><br>\n\n\n\t\t\t\t<span>\u043C\u0430\u0442\u044C (\u0444\u0438\u043E)</span>\n\t\t\t\t<input id="fio_mazer"></input><br>\n\n\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t<input id="mesto_job_m"></input>\n\n\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<input id="doljnost_m"></input><br>\n\n\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t<input id="tell_job_m"></input>\n\n\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input id="tell_my_m"></input>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>5. \u0421\u043B\u0443\u0436\u0431\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0410\u0440\u043C\u0438\u0438: \u0434\u0430 / \u043D\u0435\u0442 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>6. \u0418\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F</span>\n\t\t\t\t<input id=\'dr_sv\'></input>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div style="width: 100%">\n\t\t\t<span style="font-weight: bold">\u041A \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0433\u0430\u044E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: </span><br>\n\n\t\t\t<div style="left: 50px" class="list_document">\n\t\t\t\t<span>1 \u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0442 / \u0434\u0438\u043F\u043B\u043E\u043C \u2116 </span><br>\n\t\t\t\t<span>2 \u041A\u043E\u043F\u0438\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430</span><br>\n\t\t\t\t<span>3 \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 (3*4)</span><br>\n\t\t\t\t<span>4 \u041A\u043E\u043F\u0438\u044F \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445 \u0415\u0413\u042D / \u0413\u0418\u0410 </span><br>\n\t\t\t\t<span>5 \u041A\u043E\u043F\u0438\u044F \u043F\u0440\u0438\u0432\u0438\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430</span><br>\n\t\t\t\t<span>6 \u041C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430 086-\u0443</span><br>\n\t\t\t\t<span>7 \u041A\u043E\u043F\u0438\u044F \u043C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430</span><br>\n\t\t\t\t<span>8 \u041A\u043E\u043F\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t<span>9 \u041A\u043E\u043F\u0438\u044F \u0432\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u043B\u0435\u0442\u0430 \u0438\u043B\u0438 \u043F\u0440\u0438\u043F\u0438\u0441\u043D\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t<span>10 \u041A\u043E\u043F\u0438\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t\t<span>11 \u041E\u0442\u0440\u044B\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0431\u043B\u0430\u043D\u043A\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u0438 \u0432 \u0420\u0424 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D) </span><br>\n\t\t\t\t<span>12 \u0412\u0438\u0437\u0430 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t</div>\n\t\t\t<div style="height: 185px" class="list_document">\n\t\t\t\t<span>(\u043A\u043E\u043F\u0438\u044F / \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B)</span><br>\n\t\t\t\t<span>2 \u0448\u0442.</span><br>\n\t\t\t\t<span>6 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="signature_block">\n\t\t\t<div id="signature"></div>\n\t\t\t<span>(\u0424\u0418\u041E, \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0449\u0435\u0433\u043E)</span>\n\t\t</div>\n\n\t\t<div id="column">\n\t\t\t<div class="column_text" id="column_text_1">\n\t\t\t\t\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0430\u044E, \u0447\u0442\u043E: \n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class="column_text" id="column_text_2">\n\t\t\t\t\u041F\u043E\u0434\u043F\u0438\u0441\u044C\n\t\t\t</div>\n\t\t</div>\n\t<button id=\'output\'>\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430</div>\n\t\n\t';

	document.getElementById('output').onclick = function () {
		(0, _export_applicant.export_applicant)();
	};
}

function baza_applicant() {

	for (var i = 0; i != data_lenght; i++) {

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
	}
}

function otbor_applicant() {
	var line_top_sort = document.createElement('div');
	line_top_sort.id = 'line_top_sort';

	var button_sort_name = document.createElement('div');
	button_sort_name.className = 'button_sort';
	button_sort_name.innerText = 'По ФИО';
	button_sort_name.onclick = function () {
		button_sort_name_f();
	};
	var button_sort_spec = document.createElement('div');
	button_sort_spec.className = 'button_sort';
	button_sort_spec.innerText = 'По специальности';
	button_sort_spec.onclick = function () {};
	var button_sort_ball = document.createElement('div');
	button_sort_ball.className = 'button_sort';
	button_sort_ball.innerText = 'По баллам';
	button_sort_ball.onclick = function () {
		button_sort_ball_f();
	};
	line_top_sort.appendChild(button_sort_name);
	line_top_sort.appendChild(button_sort_spec);
	line_top_sort.appendChild(button_sort_ball);
	window_menu.appendChild(line_top_sort);
}

function forma_applicant_baza() {
	var window_applicant_baza = document.createElement('div');
	window_applicant_baza.id = 'window_applicant_baza';

	window_applicant_baza.innerHTML = '\n        <div id="bottom">\n\t\t\t<div id="image">\t\t\t\n\t\t\t</div>\n\t\t\t<div id="text-bottom">\n\t\t\t\t<div id="line-bottom-text">\n\t\t\t\t\t<span class="text-big" id="regestration-number">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u2116_____</span>\n\t\t\t\t\t<span class="text-small"  id="text-bottom-right">\n\t\t\t\t\t\t\u0417\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043D\u0430 ______ \u043A\u0443\u0440\u0441<br>\n\t\t\t\t\t\t\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438___________<br>\n\t\t\t\t\t\t\u041F\u0440\u0438\u043A\u0430\u0437 \u2116_____ \u043E\u0442 "__"_______ 2017\u0433.<br>\n\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440____________ \u0414.\u0412.\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E\n\t\t\t\t\t</span>\n\t\t\t\t</div><br>\n\t\t\t\t<div id="line-top-text">\n\t\t\t\t\t<span class="text-big" id="text-line-top">\n\t\t\t\t\t\t\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0443 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E<br>\n\t\t\t\t\t\t\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436<br>\n\t\t\t\t\t\t\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E \u0414\u0435\u043D\u0438\u0441\u0443 \u0412\u0430\u043B\u0435\u0440\u044C\u0435\u0432\u0438\u0447\u0443<br>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="data-name-persona">\n\t\t\t<div id="ot-FIO" class="block-data-name-persona">\n                <span id="text-ot-FIO">\u043E\u0442 (\u0424\u0418\u041E) </span>\n                <input id="input_text-ot-FIO"></input>\n\t\t\t</div>\n\t\t\t<div id="data-city-citizenship-data" class="block-data-name-persona">\n\t\t\t\t<span id="text-data-label">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t<input id="text-data-placeholder" type="date" class="placeholder-text-data"></input>\n\n\t\t\t\t<span id="text-city-label"> \u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F </span>\n\t\t\t\t<input id="text-city-placeholder" class="placeholder-text-data"></input>\n\n\t\t\t\t<span id="text-citizenship-label"> \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E </span>\n\t\t\t\t<input id="text-citizenship-placeholder" class="placeholder-text-data"></input>\n\t\t\t</div>\n\t\t\t<div id="document-identity-serial-number" class="block-data-name-persona">\n\t\t\t\t<span id="text-document-identity">\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u0439 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C </span>\n\t\t\t\t<select id="placeholder-document-identity" class="placeholder-document-identity-serial-number">\n\t\t\t\t\t<option>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</option>\n\t\t\t\t\t<option>\u041F\u0430\u0441\u043F\u043E\u0440\u0442</option>\n\t\t\t\t\t<option>\u0412\u043F\u0438\u0441\u0430\u0442\u044C</option>\n\t\t\t\t</select>\n\t\t\t\t\n\t\t\t\t<span id="text-serial">\u0441\u0435\u0440\u0438\u044F</span>\n\t\t\t\t<input id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t\t\n\t\t\t\t<span id="text-number">\u2116</span>\n\t\t\t\t<input id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></input>\n\t\t\t</div>\n\t\t\t<div id="when-and-by-whom-issued" class="block-data-name-persona">\n\t\t\t\t<span id="text-when-and-by-whom-issued">\u041A\u043E\u0433\u0434\u0430 \u0438 \u043A\u0435\u043C \u0432\u044B\u0434\u0430\u043D: </span>\n\t\t\t\t<input id="placeholder-when-and-by-whom-issued"></input>\n\t\t\t</div>\n\t\t\t<div id="Registration-address-(as-in-passport)" \u0421>\n\t\t\t\t<span id="text-registration-address-(as-in-passport)">\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043C\u0435\u0441\u0442\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 (\u043F\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0443)</span>\n\t\t\t\t<input id="placeholder-registration-address-as-in-passport"></input>\n\t\t\t</div>\n\t\t\t<div id="the-actual-address" class="block-data-name-persona">\n\t\t\t\t<span id="text-the-actual-address">\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F (\u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439)</span>\n\t\t\t\t<input id="placeholder-the-actual-address"></input>\n\t\t\t</div>\n\t\t\t<div id="index-cellphone-homephone" class="block-data-name-persona">\n\t\t\t\t<span id="text-index">\u0438\u043D\u0434\u0435\u043A\u0441</span>\n\t\t\t\t<input id="placeholder-index" class="placeholder-index-cellphone-homephone"></input>\n\n\t\t\t\t<span id="text-cellphone">\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B.</span>\n\t\t\t\t<input id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t\t\n\t\t\t\t<span id="text-homephone">\u0434\u043E\u043C. \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="statement">\n\t\t\t<span class="statement_center">\u0417\u0410\u042F\u0412\u041B\u0415\u041D\u0418\u0415</span><br>\n\t\t\t<span class="statement_bottom">\u041F\u0440\u043E\u0448\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043C\u0435\u043D\u044F \u0432 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430" \u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t<input id="specional"></input>\n\t\t\t<span class="statement_bottom">\u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043A / \u0443\u0433\u043B\u0435\u0431\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C) \u043F\u043E \u043E\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F, \u043D\u0430 \u043C\u0435\u0441\u0442\u0430, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0438\u0437 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0430 / \u0437\u0430 \u0441\u0447\u0435\u0442 \u0441\u0447\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 (\u0438\u043B\u0438) \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 (\u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043E\u0431 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438) (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t</div>\n\n\t\t<div id="">\n\t\t\t<span class="statement_center">\u041E \u0421\u0415\u0411\u0415 \u0421\u041E\u041E\u0411\u0429\u0410\u042E \u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0415\u0415: </span><br>\n\t\t\t<div>\n\t\t\t\t<span>1.\u041E\u043A\u043E\u043D\u0447\u0438\u043B (\u0430) \u0432 </span>\n\t\t\t\t<input id="yers" type="date"></input>\n\t\t\t\t<span> \u0433\u043E\u0434\u0443 </span>\n\t\t\t\t<input id="name_school"></input>\n\t\t\t\t<span>(\u043F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F)</span><br>\n\t\t\t\t<span>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E\u0431 \u043E\u0431\u0440\u043E\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0438 (\u0438\u043B\u0438) \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0438\u044F </span>\n\t\t\t\t<input id="seria_document_school"></input>\n\t\t\t\t<span> \u2116 </span>\n\t\t\t\t<input id="number_document_school"></input>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>2. \u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A: \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u043A\u0438\u0439, \u0434\u0440\u0443\u0433\u043E\u0435, \u043D\u0435 \u0438\u0437\u0443\u0447\u0430\u043B (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>3. \u0412 \u043E\u0431\u0449\u0435\u0436\u0438\u0442\u0438\u0438 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>4. \u0421\u0432\u0435\u0434\u0438\u043D\u0438\u044F \u043E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445: </span><br>\n\t\t\t\t<span>\u041E\u0442\u0435\u0446 (\u0444\u0438\u043E)</span>\n\t\t\t\t<input id="fio_faser"></input><br>\n\n\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t<input id="mesto_job_f"></input>\n\n\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<input id="doljnost_f"></input><br>\n\n\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t<input id="tell_job_f"></input>\n\n\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input id="tell_my_f"></input><br>\n\n\n\t\t\t\t<span>\u043C\u0430\u0442\u044C (\u0444\u0438\u043E)</span>\n\t\t\t\t<input id="fio_mazer"></input><br>\n\n\t\t\t\t<span>\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B</span>\n\t\t\t\t<input id="mesto_job_m"></input>\n\n\t\t\t\t<span>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</span>\n\t\t\t\t<input id="doljnost_m"></input><br>\n\n\t\t\t\t<span>\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B</span>\n\t\t\t\t<input id="tell_job_m"></input>\n\n\t\t\t\t<span>\u0441\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</span>\n\t\t\t\t<input id="tell_my_m"></input>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>5. \u0421\u043B\u0443\u0436\u0431\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0410\u0440\u043C\u0438\u0438: \u0434\u0430 / \u043D\u0435\u0442 (\u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C)</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>6. \u0418\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F</span>\n\t\t\t\t<input id=\'dr_sv\'></input>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div style="width: 100%">\n\t\t\t<span style="font-weight: bold">\u041A \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0433\u0430\u044E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: </span><br>\n\n\t\t\t<div style="left: 50px" class="list_document">\n\t\t\t\t<span>1 \u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0442 / \u0434\u0438\u043F\u043B\u043E\u043C \u2116 </span><br>\n\t\t\t\t<span>2 \u041A\u043E\u043F\u0438\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430</span><br>\n\t\t\t\t<span>3 \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 (3*4)</span><br>\n\t\t\t\t<span>4 \u041A\u043E\u043F\u0438\u044F \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445 \u0415\u0413\u042D / \u0413\u0418\u0410 </span><br>\n\t\t\t\t<span>5 \u041A\u043E\u043F\u0438\u044F \u043F\u0440\u0438\u0432\u0438\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430</span><br>\n\t\t\t\t<span>6 \u041C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430 086-\u0443</span><br>\n\t\t\t\t<span>7 \u041A\u043E\u043F\u0438\u044F \u043C\u0435\u0434\u0435\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430</span><br>\n\t\t\t\t<span>8 \u041A\u043E\u043F\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t<span>9 \u041A\u043E\u043F\u0438\u044F \u0432\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u043B\u0435\u0442\u0430 \u0438\u043B\u0438 \u043F\u0440\u0438\u043F\u0438\u0441\u043D\u043E\u0433\u043E \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430</span><br>\n\t\t\t\t<span>10 \u041A\u043E\u043F\u0438\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t\t<span>11 \u041E\u0442\u0440\u044B\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0431\u043B\u0430\u043D\u043A\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u0438 \u0432 \u0420\u0424 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D) </span><br>\n\t\t\t\t<span>12 \u0412\u0438\u0437\u0430 (\u0434\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D)</span><br>\n\t\t\t</div>\n\t\t\t<div style="height: 185px" class="list_document">\n\t\t\t\t<span>(\u043A\u043E\u043F\u0438\u044F / \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B)</span><br>\n\t\t\t\t<span>2 \u0448\u0442.</span><br>\n\t\t\t\t<span>6 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t\t<span>1 \u0448\u0442.</span><br>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id="signature_block">\n\t\t\t<div id="signature"></div>\n\t\t\t<span>(\u0424\u0418\u041E, \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0449\u0435\u0433\u043E)</span>\n\t\t</div>\n\n\t\t<div id="column">\n\t\t\t<div class="column_text" id="column_text_1">\n\t\t\t\t\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0430\u044E, \u0447\u0442\u043E: \n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class="column_text" id="column_text_2">\n\t\t\t\t\u041F\u043E\u0434\u043F\u0438\u0441\u044C\n\t\t\t</div>\n\t\t</div>\n\t<button id="print">\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430</div>\t\n\t';

	document.body.appendChild(window_applicant_baza);

	document.getElementById('print').onclick = function () {
		p = parseInt(p, 10);

		window.print();
	};
}

function seting_applicant() {
	var select1 = document.getElementById('specional');
	for (var i = 0; i != seting.specionals; i++) {
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = seting.specionals[i];
		select1.appendChild(opt);
	}
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _electron = __webpack_require__(0);

var _fs = __webpack_require__(1);

var _module = __webpack_require__(2);

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

    (0, _module.otbor_applicant)();
};

document.getElementsByClassName('button-top-line')[3].onclick = function () {
    document.getElementsByClassName('window-menu')[0].innerHTML = '';

    (0, _module.seting_applicant)();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.export_applicant = export_applicant;

var _electron = __webpack_require__(0);

var _fs = __webpack_require__(1);

var _module = __webpack_require__(2);

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
        "Адрес_регистрации_места_жительства_(по_паспорту)": document.getElementById('placeholder-registration-address-as-in-passport').value,
        "Адрес проживания (фактический)": document.getElementById('placeholder-the-actual-address').value,
        "индекс ": document.getElementById('placeholder-index').value,
        "сот_телефон": document.getElementById('placeholder-cellphone').value,
        "дом_телефон": document.getElementById('placeholder-homephone').valuell,

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

    (0, _fs.writeFile)('./data.json', JSON.stringify(data, null, '\t'), function (err) {
        if (err) throw err;else {
            alert('Успешно');
            console.log('Абитуриент добавлен в базу');
            document.getElementsByClassName('window-menu')[0].innerHTML = '';
            (0, _module.new_applicant)();
        };
    });
}

/***/ })
/******/ ]);