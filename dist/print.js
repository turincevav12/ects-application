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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fs = __webpack_require__(1);

var _require = __webpack_require__(0),
    ipcRenderer = _require.ipcRenderer;

ipcRenderer.on('data', function (event, arg) {});
ipcRenderer.send('getData');
window.data1 = JSON.parse((0, _fs.readFileSync)('./data.json'));

ipcRenderer.on('print', function (event, data) {
	var setting = JSON.parse((0, _fs.readFileSync)('./seting.json'));
	var key = setting.key;
	key = Number.parseInt(key);

	document.getElementById('span_text-ot-FIO').innerText = window.data1.applicants[key].ФИО;
	document.getElementById('text-data-placeholder').innerText = window.data1.applicants[key].Дата_рождения;
	document.getElementById('text-city-placeholder').innerText = window.data1.applicants[key].Место_рождения;
	document.getElementById('text-citizenship-placeholder').innerText = window.data1.applicants[key].Гражданство;
	document.getElementById('placeholder-document-identity').innerText = window.data1.applicants[key].Документ_удостоверяющий_личность;
	document.getElementById('placeholder-serial').innerText = window.data1.applicants[key].Серия;
	document.getElementById('placeholder-number').innerText = window.data1.applicants[key].Номер;
	document.getElementById('placeholder-when-and-by-whom-issued').innerText = window.data1.applicants[key].Кем_и_когда_выдан;
	document.getElementById('placeholder-registration-address-as-in-passport').innerText = window.data1.applicants[key].Адрес_регистрации_места_жительства_по_паспорту;
	document.getElementById('placeholder-the-actual-address').innerText = window.data1.applicants[key].Адрес_проживания_фактический;
	document.getElementById('placeholder-index').innerText = window.data1.applicants[key].индекс;
	document.getElementById('placeholder-cellphone').innerText = window.data1.applicants[key].сот_телефон;
	document.getElementById('placeholder-homephone').innerText = window.data1.applicants[key].дом_телефон;

	document.getElementById('specional').innerText = window.data1.applicants[key].специальност;
	document.getElementById('yers').innerText = window.data1.applicants[key].окончил_школу_год;
	document.getElementById('name_school').innerText = window.data1.applicants[key].окончил_школу_название;
	document.getElementById('seria_document_school').innerText = window.data1.applicants[key].документы_серия;
	document.getElementById('number_document_school').innerText = window.data1.applicants[key].документы_номер;

	document.getElementById('fio_faser').innerText = window.data1.applicants[key].отец_фио;
	document.getElementById('mesto_job_f').innerText = window.data1.applicants[key].отец_место_работы;
	document.getElementById('doljnost_f').innerText = window.data1.applicants[key].отец_должность;
	document.getElementById('tell_job_f').innerText = window.data1.applicants[key].отец_раб_тел;
	document.getElementById('tell_my_f').innerText = window.data1.applicants[key].отец_сот_тел;

	document.getElementById('fio_mazer').innerText = window.data1.applicants[key].мать_фио;
	document.getElementById('mesto_job_m').innerText = window.data1.applicants[key].мать_место_работы;
	document.getElementById('doljnost_m').innerText = window.data1.applicants[key].мать_должность;
	document.getElementById('tell_job_m').innerText = window.data1.applicants[key].мать_раб_тел;
	document.getElementById('tell_my_m').innerText = window.data1.applicants[key].мать_сот_тел;
	document.getElementById('dr_sv').innerText = window.data1.applicants[key].другие_сведения;

	setTimeout(function () {
		window.print();
		alert('Печать');
		close();
	}, 2000);
});

/***/ })
/******/ ]);