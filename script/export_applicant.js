import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';
import { new_applicant } from './module';


ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send('getData');
const data = JSON.parse(readFileSync('./data.json'));

export function export_applicant(){


    data.applicants.push({
            "ФИО": document.getElementById('input_text-ot-FIO').value,
            "Дата_рождения": document.getElementById('text-data-placeholder').value,
			"Место_рождения": document.getElementById('text-city-placeholder').value,
			"Гражданство": document.getElementById('text-citizenship-placeholder').value,
			"Документ_удостоверяющий_личность": document.getElementById('placeholder-document-identity').value,
			"Серия": document.getElementById('placeholder-serial').value,
			"Номер": document.getElementById('placeholder-number').value,
			"Кем_и_когда_выдан": document.getElementById('placeholder-when-and-by-whom-issued').value,
			"Адрес_регистрации_места_жительства_по_паспорту":document.getElementById('placeholder-registration-address-as-in-passport').value,
			"Адрес_проживания_фактический":document.getElementById('placeholder-the-actual-address').value,
			"индекс":document.getElementById('placeholder-index').value,
			"сот_телефон":document.getElementById('placeholder-cellphone').value,
            "дом_телефон":document.getElementById('placeholder-homephone').value,
            
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
        })

        var inputs = document.getElementsByClassName('proverkaInput')
        var nz = 0
        for(var i = 0; i != inputs.length; i++){
            if (inputs[i].value == ''){
                alert('Не заполнено поле ' + i)
                nz = nz+1
            }
        }
        if (nz == 0){
            writeFile('./data.json', JSON.stringify(data, null, '\t'), (err) => {
                if (err) throw err;
                else {
                    alert('Успешно')
                    document.getElementsByClassName('window-menu')[0].innerHTML = '';
                    new_applicant();
                };
            })
        }
        
}