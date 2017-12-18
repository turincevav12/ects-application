import { readFileSync, writeFile } from 'fs';

const { ipcRenderer } = require('electron')

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send('getData');
window.data1 = JSON.parse(readFileSync('./data.json'));

ipcRenderer.on('print', (event, data) => {	
	const setting = JSON.parse(readFileSync('./seting.json'));
	var key = setting.key;
	key = Number.parseInt(key)

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

	
	
	setTimeout(function() {
		window.print()
		alert('Печать')
		close()
	}, 2000);
	
})