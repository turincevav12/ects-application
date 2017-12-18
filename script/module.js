import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';
import { export_applicant } from './export_applicant';

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send('getData');


let window_menu = document.getElementsByClassName('window-menu')[0];

function uppFile() {
    window.specional = JSON.parse(readFileSync('./seting.json'));
    window.data = JSON.parse(readFileSync('./data.json'));
    window.data_lenght = data.applicants.length
}

function enter_baza_applicant(e) {
    let accept_window = document.getElementById('block_accept');
    if (accept_window != null) {
        accept_window.remove();
    }

    var block_accept = document.createElement('div');
    block_accept.id = 'block_accept';

    var top_line_block_accept = document.createElement('div');
    top_line_block_accept.id = 'top_line_block_accept';
    top_line_block_accept.innerText = data.applicants[e.target.id].ФИО;
    window.number_blocka = e.target.id;



    var container_text_accept = document.createElement('div')
    container_text_accept.id = 'container_text_accept';

    var text_accept = document.createElement('span');
    text_accept.id = 'text_accept';
    text_accept.innerText = "Что желаете сделать?"
    container_text_accept.appendChild(text_accept)

    var bottom_line_block_accept = document.createElement('div');
    bottom_line_block_accept.id = 'bottom_line_block_accept';

    var open_accep_block = document.createElement('div');
    open_accep_block.className = 'accep_block';
    open_accep_block.innerText = "Открыть";
    open_accep_block.onclick = function(e) {
        forma_applicant_baza();
        document.getElementById('block_accept').remove();
    }
    bottom_line_block_accept.appendChild(open_accep_block)

    var close_accep_block = document.createElement('div');
    close_accep_block.className = 'accep_block';
    close_accep_block.innerText = "Закрыть"
    close_accep_block.onclick = function(e) {
        document.getElementById('block_accept').remove();
    }
    bottom_line_block_accept.appendChild(close_accep_block)

    block_accept.appendChild(top_line_block_accept);
    block_accept.appendChild(container_text_accept);
    block_accept.appendChild(bottom_line_block_accept);
    document.body.appendChild(block_accept);
}


export function new_applicant() {
    window_menu.innerHTML = `
        <div id="bottom">
			<div id="image">			
			</div>
			<div id="text-bottom">
				<div id="line-bottom-text">
					<span class="text-big" id="regestration-number">Регистрационный №_____</span>
					<span class="text-small"  id="text-bottom-right">
						Зачислить на ______ курс<br>
						Специальности___________<br>
						Приказ №_____ от "__"_______ 2017г.<br>
						Директор____________ Д.В.Шевченко
					</span>
				</div><br>
				<div id="line-top-text">
					<span class="text-big" id="text-line-top">
						Директору государственного автономного проффесионального<br>
						образовательного учреждения Свердловской области "Екатеринбургский колледж<br>
						транспортного строительства" Шевченко Денису Валерьевичу<br>
					</span>
				</div>
			</div>
		</div>
		<div id="data-name-persona">
			<div id="ot-FIO" class="block-data-name-persona">
                <span id="text-ot-FIO">от (ФИО) </span>
                <input id="input_text-ot-FIO" class="proverkaInput"></input>
			</div>
			<div id="data-city-citizenship-data" class="block-data-name-persona">
				<span id="text-data-label">Дата рождения </span>
				<input class="proverkaInput" id="text-data-placeholder" type="date" class="placeholder-text-data"></input>

				<span id="text-city-label"> Место рождения </span>
				<input  class="proverkaInput" id="text-city-placeholder" class="placeholder-text-data"></input>

				<span id="text-citizenship-label"> Гражданство </span>
				<input  class="proverkaInput" id="text-citizenship-placeholder" class="placeholder-text-data"></input>
			</div>
			<div id="document-identity-serial-number" class="block-data-name-persona">
				<span id="text-document-identity">Документ, удостоверяющий личность </span>
				<select id="placeholder-document-identity" class="placeholder-document-identity-serial-number">
					<option>Выберите из списка</option>
					<option>Паспорт</option>
					<option>Вписать</option>
				</select>
				
				<span id="text-serial">серия</span>
				<input  class="proverkaInput" id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></input>
				
				<span id="text-number">№</span>
				<input  class="proverkaInput" id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></input>
			</div>
			<div id="when-and-by-whom-issued" class="block-data-name-persona">
				<span id="text-when-and-by-whom-issued">Когда и кем выдан: </span>
				<input  class="proverkaInput" id="placeholder-when-and-by-whom-issued"></input>
			</div>
			<div id="Registration-address-(as-in-passport)" С>
				<span id="text-registration-address-(as-in-passport)">Адрес регистрации места жительства (по паспорту)</span>
				<input  class="proverkaInput" id="placeholder-registration-address-as-in-passport"></input>
			</div>
			<div id="the-actual-address" class="block-data-name-persona">
				<span id="text-the-actual-address">Адрес проживания (фактический)</span>
				<input  class="proverkaInput" id="placeholder-the-actual-address"></input>
			</div>
			<div id="index-cellphone-homephone" class="block-data-name-persona">
				<span id="text-index">индекс</span>
				<input  class="proverkaInput" id="placeholder-index" class="placeholder-index-cellphone-homephone"></input>

				<span id="text-cellphone">сотовый тел.</span>
				<input  class="proverkaInput" id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>
				
				<span id="text-homephone">дом. телефон</span>
				<input  class="proverkaInput" id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>
			</div>
		</div>
		<div id="statement">
			<span class="statement_center">ЗАЯВЛЕНИЕ</span><br>
			<span class="statement_bottom">Прошу зачислить меня в Государственное автономное проффесиональное образовательное учреждение Свердловской области "Екатеринбургский колледж транспортного строительства" на специальность</span>
			<select id="specional">

			</select>
			<span class="statement_bottom">базовой подготовик / углебной подготовки (нужное подчеркнуть) по очной форме обучения, на места, финансируемые из областного бюджета / за счет счет средст физических и (или) юридических лиц (по договору об образовании) (нужное подчеркнуть)</span>
		</div>

		<div id="">
			<span class="statement_center">О СЕБЕ СООБЩАЮ СЛЕДУЮЩЕЕ: </span><br>
			<div>
				<span>1.Окончил (а) в </span>
				<input  class="proverkaInput" id="yers" type="date"></input>
				<span> году </span>
				<input  class="proverkaInput" id="name_school"></input>
				<span>(полное наименование учреждения)</span><br>
				<span>Документы об оброзовании и (или) квалификации серия </span>
				<input  class="proverkaInput" id="seria_document_school"></input>
				<span> № </span>
				<input  class="proverkaInput" id="number_document_school"></input>
			</div>
			<div>
				<span>2. Иностранный язык: английский, немецкий, французкий, другое, не изучал (нужное подчеркнуть)</span>
			</div>
			<div>
				<span>3. В общежитии нуждаюсь, не нуждаюсь (нужное подчеркнуть)</span>
			</div>
			<div>
				<span>4. Свединия о родителях: </span><br>
				<span>Отец (фио)</span>
				<input  class="proverkaInput" id="fio_faser"></input><br>

				<span>Место работы</span>
				<input  class="proverkaInput" id="mesto_job_f"></input>

				<span>Должность</span>
				<input  class="proverkaInput" id="doljnost_f"></input><br>

				<span>Рабочий тел</span>
				<input  class="proverkaInput" id="tell_job_f"></input>

				<span>сотовый телефон</span>
				<input  class="proverkaInput" id="tell_my_f"></input><br>


				<span>мать (фио)</span>
				<input  class="proverkaInput" id="fio_mazer"></input><br>

				<span>Место работы</span>
				<input  class="proverkaInput" id="mesto_job_m"></input>

				<span>Должность</span>
				<input  class="proverkaInput" id="doljnost_m"></input><br>

				<span>Рабочий тел</span>
				<input  class="proverkaInput" id="tell_job_m"></input>

				<span>сотовый телефон</span>
				<input  class="proverkaInput" id="tell_my_m"></input>
			</div>
			<div>
				<span>5. Служба в Российской Армии: да / нет (нужное подчеркнуть)</span>
			</div>
			<div>
				<span>6. Иные сведения</span>
				<input  class="proverkaInput" id='dr_sv'></input>
			</div>
		</div>

		<div style="width: 100%">
			<span style="font-weight: bold">К заявлению прилогаю следующие документы: </span><br>

			<div style="left: 50px" class="list_document">
				<span>1 Аттестат / диплом № </span><br>
				<span>2 Копия паспорта</span><br>
				<span>3 Фотографии (3*4)</span><br>
				<span>4 Копия свидетельства о результатах ЕГЭ / ГИА </span><br>
				<span>5 Копия прививочного сертификата</span><br>
				<span>6 Медецинская справка 086-у</span><br>
				<span>7 Копия медецинского полиса</span><br>
				<span>8 Копия страхового свидетельства</span><br>
				<span>9 Копия военного билета или приписного свидетельства</span><br>
				<span>10 Копия миграционной карты (для иностранных граждан)</span><br>
				<span>11 Отрывная часть бланка уведомления о прибытии в РФ (для иностранных граждан) </span><br>
				<span>12 Виза (для иностранных граждан)</span><br>
			</div>
			<div style="height: 185px" class="list_document">
				<span>(копия / оригинал)</span><br>
				<span>2 шт.</span><br>
				<span>6 шт.</span><br>
				<span>1 шт.</span><br>
				<span>1 шт.</span><br>
				<span>1 шт.</span><br>
				<span>1 шт.</span><br>
				<span>1 шт.</span><br>
				<span>1 шт.</span><br>
			</div>
		</div>

		<div id="signature_block">
			<div id="signature"></div>
			<span>(ФИО, подпись поступающего)</span>
		</div>

		<div id="column">
			<div class="column_text" id="column_text_1">
				Подтвердаю, что: 
				
			</div>
			<div class="column_text" id="column_text_2">
				Подпись
			</div>
		</div>
	<div id='output' class="buttons">Сохранить</div>
	
	`

    document.getElementById('output').onclick = () => {
        export_applicant();
    }
    uppFile()
    setTimeout(function() {
        specional = specional.specionals;
        var sel = document.getElementById('specional')
        for (var i = 0; i != specional.length; i++) {
            var opt = document.createElement('option')
            opt.innerText = specional[i]
            sel.appendChild(opt)
        }
    }, 1000)

}

export function baza_applicant() {
    uppFile()
    setTimeout(function() {
        specional = specional.specionals;
        for (var i = 0; i != specional.length; i++) {
            var j = i;
            var keyFalse = false
            var keyTrue = false
            var block_specional = document.createElement('div')
            var span = document.createElement('span')

            block_specional.className = 'block_specional'
            block_specional.id = i
            span.innerText = specional[i]
            block_specional.appendChild(span)

            window_menu.appendChild(block_specional);

            block_specional.onclick = function(e) {
                window_menu.innerHTML = ''
                for (var i = 0; i != data_lenght; i++) {
                    if (data.applicants[i].специальност == specional[e.target.id]) {
                        keyTrue = true

                        var block_content = document.createElement('div');
                        block_content.className = 'block_content';
                        block_content.innerText = data.applicants[i].ФИО;
                        block_content.id = i;

                        block_content.onclick = function(e) {
                            return function(e) {
                                enter_baza_applicant(e)
                                window.p = e.target.id;
                            }
                        }(i)
                        window_menu.appendChild(block_content);
                    } else {
                        keyFalse = true;
                    }
                }
                if (keyFalse == true && keyTrue === false) {
                    baza_applicant()
                    alert('В данной группе нет абитуриентов')
                }
            }
        }
    }, 1000);
}


function forma_applicant_baza() {
    uppFile()
    setTimeout(function() {
        var window_applicant_baza = document.createElement('div')
        window_applicant_baza.id = 'window_applicant_baza'

        window_applicant_baza.innerHTML = `
			<div id="bottom">
				<div id="image">			
				</div>
				<div id="text-bottom">
					<div id="line-bottom-text">
						<span class="text-big" id="regestration-number">Регистрационный №_____</span>
						<span class="text-small"  id="text-bottom-right">
							Зачислить на ______ курс<br>
							Специальности___________<br>
							Приказ №_____ от "__"_______ 2017г.<br>
							Директор____________ Д.В.Шевченко
						</span>
					</div><br>
					<div id="line-top-text">
						<span class="text-big" id="text-line-top">
							Директору государственного автономного проффесионального<br>
							образовательного учреждения Свердловской области "Екатеринбургский колледж<br>
							транспортного строительства" Шевченко Денису Валерьевичу<br>
						</span>
					</div>
				</div>
			</div>
			<div id="data-name-persona">
				<div id="ot-FIO" class="block-data-name-persona">
					<span id="text-ot-FIO">от (ФИО) </span>
					<span id="span_text-ot-FIO"></span>
				</div>
				<div id="data-city-citizenship-data" class="block-data-name-persona">
					<span id="text-data-label">Дата рождения </span>
					<span id="text-data-placeholder" type="date" class="placeholder-text-data"></span>

					<span id="text-city-label"> Место рождения </span>
					<span id="text-city-placeholder" class="placeholder-text-data"></span>

					<span id="text-citizenship-label"> Гражданство </span>
					<span id="text-citizenship-placeholder" class="placeholder-text-data"></span>
				</div>
				<div id="document-identity-serial-number" class="block-data-name-persona">
					<span id="text-document-identity">Документ, удостоверяющий личность </span>
					<span id="placeholder-document-identity" class="placeholder-document-identity-serial-number">
						
					</span>
					
					<span id="text-serial">серия</span>
					<span id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></span>
					
					<span id="text-number">№</span>
					<span id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></span>
				</div>
				<div id="when-and-by-whom-issued" class="block-data-name-persona">
					<span id="text-when-and-by-whom-issued">Когда и кем выдан: </span>
					<span id="placeholder-when-and-by-whom-issued"></span>
				</div>
				<div id="Registration-address-(as-in-passport)" С>
					<span id="text-registration-address-(as-in-passport)">Адрес регистрации места жительства (по паспорту)</span>
					<span id="placeholder-registration-address-as-in-passport"></span>
				</div>
				<div id="the-actual-address" class="block-data-name-persona">
					<span id="text-the-actual-address">Адрес проживания (фактический)</span>
					<span id="placeholder-the-actual-address"></span>
				</div>
				<div id="index-cellphone-homephone" class="block-data-name-persona">
					<span id="text-index">индекс</span>
					<span id="placeholder-index" class="placeholder-index-cellphone-homephone"></span>

					<span id="text-cellphone">сотовый тел.</span>
					<span id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></span>
					
					<span id="text-homephone">дом. телефон</span>
					<span id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></span>
				</div>
			</div>
			<div id="statement">
				<span class="statement_center">ЗАЯВЛЕНИЕ</span><br>
				<span class="statement_bottom">Прошу зачислить меня в Государственное автономное проффесиональное образовательное учреждение Свердловской области "Екатеринбургский колледж транспортного строительства" на специальность</span>
				<span id="specional"></span>
				<span class="statement_bottom">базовой подготовик / учебной подготовки (нужное подчеркнуть) по очной форме обучения, на места, финансируемые из областного бюджета / за счет счет средст физических и (или) юридических лиц (по договору об образовании) (нужное подчеркнуть)</span>
			</div>

			<div id="">
				<span class="statement_center">О СЕБЕ СООБЩАЮ СЛЕДУЮЩЕЕ: </span><br>
				<div>
					<span>1.Окончил (а) в </span>
					<span id="yers" type="date"></span>
					<span> году </span>
					<span id="name_school"></span>
					<span>(полное наименование учреждения)</span><br>
					<span>Документы об оброзовании и (или) квалификации серия </span>
					<span id="seria_document_school"></span>
					<span> № </span>
					<span id="number_document_school"></span>
				</div>
				<div>
					<span>2. Иностранный язык: английский, немецкий, французкий, другое, не изучал (нужное подчеркнуть)</span>
				</div>
				<div>
					<span>3. В общежитии нуждаюсь, не нуждаюсь (нужное подчеркнуть)</span>
				</div>
				<div>
					<span>4. Свединия о родителях: </span><br>
					<span>Отец (фио)</span>
					<span id="fio_faser"></span><br>

					<span>Место работы</span>
					<span id="mesto_job_f"></span>

					<span>Должность</span>
					<span id="doljnost_f"></span><br>

					<span>Рабочий тел</span>
					<span id="tell_job_f"></span>

					<span>сотовый телефон</span>
					<span id="tell_my_f"></span><br>


					<span>мать (фио)</span>
					<span id="fio_mazer"></span><br>

					<span>Место работы</span>
					<span id="mesto_job_m"></span>

					<span>Должность</span>
					<span id="doljnost_m"></span><br>

					<span>Рабочий тел</span>
					<span id="tell_job_m"></span>

					<span>сотовый телефон</span>
					<span id="tell_my_m"></span>
				</div>
				<div>
					<span>5. Служба в Российской Армии: да / нет (нужное подчеркнуть)</span>
				</div>
				<div>
					<span>6. Иные сведения</span>
					<span id='dr_sv'></span>
				</div>
			</div>

			<div style="width: 100%">
				<span style="font-weight: bold">К заявлению прилогаю следующие документы: </span><br>

				<div style="left: 50px" class="list_document">
					<span>1 Аттестат / диплом № </span><br>
					<span>2 Копия паспорта</span><br>
					<span>3 Фотографии (3*4)</span><br>
					<span>4 Копия свидетельства о результатах ЕГЭ / ГИА </span><br>
					<span>5 Копия прививочного сертификата</span><br>
					<span>6 Медецинская справка 086-у</span><br>
					<span>7 Копия медецинского полиса</span><br>
					<span>8 Копия страхового свидетельства</span><br>
					<span>9 Копия военного билета или приписного свидетельства</span><br>
					<span>10 Копия миграционной карты (для иностранных граждан)</span><br>
					<span>11 Отрывная часть бланка уведомления о прибытии в РФ (для иностранных граждан) </span><br>
					<span>12 Виза (для иностранных граждан)</span><br>
				</div>
				<div style="height: 185px" class="list_document">
					<span>(копия / оригинал)</span><br>
					<span>2 шт.</span><br>
					<span>6 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
				</div>
			</div>

			<div id="signature_block">
				<div id="signature"></div>
				<span>(ФИО, подпись поступающего)</span>
			</div>

			<div id="column">
				<div class="column_text" id="column_text_1">
					Подтвердаю, что: 
					
				</div>
				<div class="column_text" id="column_text_2">
					Подпись
				</div>
			</div>

		<div id="print" class="buttons">Печать</div>

		<div id="redact" class="buttons">Редактировать</div>

		<div id="delete" class="buttons">Удалить</div>

		<div id="close" class="buttons">Закрыть</div>	

		`
        document.body.appendChild(window_applicant_baza)

        document.getElementById('close').onclick = () => {
            document.getElementById('window_applicant_baza').remove()
        }

        document.getElementById('delete').onclick = () => {
            data.applicants.splice(window.p, 1)

            writeFile('./data.json', JSON.stringify(data, null, '\t'), (err) => {
                if (err) throw err;
                else {
                    alert('Успешно')
                };
            })
            document.getElementById('window_applicant_baza').remove()
            document.getElementsByClassName('window-menu')[0].innerHTML = ''
            forma_applicant_baza()
        }

        let key = Number.parseInt(p)
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

        document.getElementById('print').onclick = () => {
            const seting = JSON.parse(readFileSync('./seting.json'));
            seting.key = p
            writeFile('./seting.json', JSON.stringify(seting, null, '\t'), (err) => {})
            setTimeout(function() {
                ipcRenderer.send('print')
                document.getElementById('window_applicant_baza').remove()
            }, 1000)
        }

        document.getElementById('redact').onclick = () => {
            document.getElementById('window_applicant_baza').remove();
            window_menu.innerHTML = `
			<div id="bottom">
				<div id="image">			
				</div>
				<div id="text-bottom">
					<div id="line-bottom-text">
						<span class="text-big" id="regestration-number">Регистрационный №_____</span>
						<span class="text-small"  id="text-bottom-right">
							Зачислить на ______ курс<br>
							Специальности___________<br>
							Приказ №_____ от "__"_______ 2017г.<br>
							Директор____________ Д.В.Шевченко
						</span>
					</div><br>
					<div id="line-top-text">
						<span class="text-big" id="text-line-top">
							Директору государственного автономного проффесионального<br>
							образовательного учреждения Свердловской области "Екатеринбургский колледж<br>
							транспортного строительства" Шевченко Денису Валерьевичу<br>
						</span>
					</div>
				</div>
			</div>
			<div id="data-name-persona">
				<div id="ot-FIO" class="block-data-name-persona">
					<span id="text-ot-FIO">от (ФИО) </span>
					<input id="input_text-ot-FIO" class="proverkaInputEdit"></input>
				</div>
				<div id="data-city-citizenship-data" class="block-data-name-persona">
					<span id="text-data-label">Дата рождения </span>
					<input class="proverkaInputEdit" id="text-data-placeholder" type="date" class="placeholder-text-data"></input>

					<span id="text-city-label"> Место рождения </span>
					<input  class="proverkaInputEdit" id="text-city-placeholder" class="placeholder-text-data"></input>

					<span id="text-citizenship-label"> Гражданство </span>
					<input  class="proverkaInputEdit" id="text-citizenship-placeholder" class="placeholder-text-data"></input>
				</div>
				<div id="document-identity-serial-number" class="block-data-name-persona">
					<span id="text-document-identity">Документ, удостоверяющий личность </span>
					<select id="placeholder-document-identity" class="placeholder-document-identity-serial-number">
						<option>Выберите из списка</option>
						<option>Паспорт</option>
						<option>Вписать</option>
					</select>
					
					<span id="text-serial">серия</span>
					<input  class="proverkaInputEdit" id="placeholder-serial" placeholder="0000" class="placeholder-document-identity-serial-number"></input>
					
					<span id="text-number">№</span>
					<input  class="proverkaInputEdit" id="placeholder-number" placeholder="000000" class="placeholder-document-identity-serial-number"></input>
				</div>
				<div id="when-and-by-whom-issued" class="block-data-name-persona">
					<span id="text-when-and-by-whom-issued">Когда и кем выдан: </span>
					<input  class="proverkaInputEdit" id="placeholder-when-and-by-whom-issued"></input>
				</div>
				<div id="Registration-address-(as-in-passport)" С>
					<span id="text-registration-address-(as-in-passport)">Адрес регистрации места жительства (по паспорту)</span>
					<input  class="proverkaInputEdit" id="placeholder-registration-address-as-in-passport"></input>
				</div>
				<div id="the-actual-address" class="block-data-name-persona">
					<span id="text-the-actual-address">Адрес проживания (фактический)</span>
					<input  class="proverkaInputEdit" id="placeholder-the-actual-address"></input>
				</div>
				<div id="index-cellphone-homephone" class="block-data-name-persona">
					<span id="text-index">индекс</span>
					<input  class="proverkaInputEdit" id="placeholder-index" class="placeholder-index-cellphone-homephone"></input>

					<span id="text-cellphone">сотовый тел.</span>
					<input  class="proverkaInputEdit" id="placeholder-cellphone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>
					
					<span id="text-homephone">дом. телефон</span>
					<input  class="proverkaInputEdit" id="placeholder-homephone" type="tel" placeholder="+7(000)000-00-00" class="placeholder-index-cellphone-homephone"></input>
				</div>
			</div>
			<div id="statement">
				<span class="statement_center">ЗАЯВЛЕНИЕ</span><br>
				<span class="statement_bottom">Прошу зачислить меня в Государственное автономное проффесиональное образовательное учреждение Свердловской области "Екатеринбургский колледж транспортного строительства" на специальность</span>
				<select id="specional">

				</select>
				<span class="statement_bottom">базовой подготовик / углебной подготовки (нужное подчеркнуть) по очной форме обучения, на места, финансируемые из областного бюджета / за счет счет средст физических и (или) юридических лиц (по договору об образовании) (нужное подчеркнуть)</span>
			</div>

			<div id="">
				<span class="statement_center">О СЕБЕ СООБЩАЮ СЛЕДУЮЩЕЕ: </span><br>
				<div>
					<span>1.Окончил (а) в </span>
					<input  class="proverkaInputEdit" id="yers" type="date"></input>
					<span> году </span>
					<input  class="proverkaInputEdit" id="name_school"></input>
					<span>(полное наименование учреждения)</span><br>
					<span>Документы об оброзовании и (или) квалификации серия </span>
					<input  class="proverkaInputEdit" id="seria_document_school"></input>
					<span> № </span>
					<input  class="proverkaInputEdit" id="number_document_school"></input>
				</div>
				<div>
					<span>2. Иностранный язык: английский, немецкий, французкий, другое, не изучал (нужное подчеркнуть)</span>
				</div>
				<div>
					<span>3. В общежитии нуждаюсь, не нуждаюсь (нужное подчеркнуть)</span>
				</div>
				<div>
					<span>4. Свединия о родителях: </span><br>
					<span>Отец (фио)</span>
					<input  class="proverkaInputEdit" id="fio_faser"></input><br>

					<span>Место работы</span>
					<input  class="proverkaInputEdit" id="mesto_job_f"></input>

					<span>Должность</span>
					<input  class="proverkaInputEdit" id="doljnost_f"></input><br>

					<span>Рабочий тел</span>
					<input  class="proverkaInputEdit" id="tell_job_f"></input>

					<span>сотовый телефон</span>
					<input  class="proverkaInputEdit" id="tell_my_f"></input><br>


					<span>мать (фио)</span>
					<input  class="proverkaInputEdit" id="fio_mazer"></input><br>

					<span>Место работы</span>
					<input  class="proverkaInputEdit" id="mesto_job_m"></input>

					<span>Должность</span>
					<input  class="proverkaInputEdit" id="doljnost_m"></input><br>

					<span>Рабочий тел</span>
					<input  class="proverkaInputEdit" id="tell_job_m"></input>

					<span>сотовый телефон</span>
					<input  class="proverkaInputEdit" id="tell_my_m"></input>
				</div>
				<div>
					<span>5. Служба в Российской Армии: да / нет (нужное подчеркнуть)</span>
				</div>
				<div>
					<span>6. Иные сведения</span>
					<input  class="proverkaInputEdit" id='dr_sv'></input>
				</div>
			</div>

			<div style="width: 100%">
				<span style="font-weight: bold">К заявлению прилогаю следующие документы: </span><br>

				<div style="left: 50px" class="list_document">
					<span>1 Аттестат / диплом № </span><br>
					<span>2 Копия паспорта</span><br>
					<span>3 Фотографии (3*4)</span><br>
					<span>4 Копия свидетельства о результатах ЕГЭ / ГИА </span><br>
					<span>5 Копия прививочного сертификата</span><br>
					<span>6 Медецинская справка 086-у</span><br>
					<span>7 Копия медецинского полиса</span><br>
					<span>8 Копия страхового свидетельства</span><br>
					<span>9 Копия военного билета или приписного свидетельства</span><br>
					<span>10 Копия миграционной карты (для иностранных граждан)</span><br>
					<span>11 Отрывная часть бланка уведомления о прибытии в РФ (для иностранных граждан) </span><br>
					<span>12 Виза (для иностранных граждан)</span><br>
				</div>
				<div style="height: 185px" class="list_document">
					<span>(копия / оригинал)</span><br>
					<span>2 шт.</span><br>
					<span>6 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
					<span>1 шт.</span><br>
				</div>
			</div>

			<div id="signature_block">
				<div id="signature"></div>
				<span>(ФИО, подпись поступающего)</span>
			</div>

			<div id="column">
				<div class="column_text" id="column_text_1">
					Подтвердаю, что: 
					
				</div>
				<div class="column_text" id="column_text_2">
					Подпись
				</div>
			</div>
		<div id='editSave' class="buttons">Сохранить</div>	
		`
            var specionals = JSON.parse(readFileSync('./seting.json'));
            var specional = specionals.specionals;
            var sel = document.getElementById('specional')
            for (var i = 0; i != specional.length; i++) {
                var opt = document.createElement('option')
                opt.innerText = specional[i]
                sel.appendChild(opt)
            }
            var edit = document.getElementsByClassName('proverkaInputEdit')
            console.log(edit)
            var key = window.p
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
            document.getElementById('editSave').onclick = () => {
                data.applicants.splice(key, 1)

                var edit = document.getElementsByClassName('proverkaInputEdit')
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
                    "другие_сведения": edit[26].value,
                })

                writeFile('./data.json', JSON.stringify(data, null, '\t'), (err) => {
                    if (err) throw err;
                    else {
                        alert('Успешно')
                    };
                })

                document.getElementsByClassName('window-menu')[0].innerHTML = ''
                forma_applicant_baza()
            }

        }
    }, 1000);
}


export function seting_applicant() {
    var blockSpecional = document.createElement('div')

    blockSpecional.innerHTML = `
		<div id='formSelect'>
			<div class="settingA">
				<span id="spanSetting">Специальности на данный момент</span><br>
				<select id="settingSelect">
				
				</select><br>
				<div id='buttonSetting2'>Удалить</div>
			</div>

			<div class="settingA">
				<input id="settingSpNew"></input>
				<div id='buttonSetting'>Добавить</div>
			</div>

			<div class="settingA">
				<input id="loginNew" class='newUsers' placeholder="login"></input><br>
				<input id="passNew" class='newUsers' placeholder="pass"></input>
				<div id='newUser'>Добавить</div>
			</div>
		</div>		
	`
    window_menu.appendChild(blockSpecional)

    var specionals = JSON.parse(readFileSync('./seting.json'));
    var users = specionals.users;
    var specional = specionals.specionals;

    var sel = document.getElementById('settingSelect')
    for (var i = 0; i != specional.length; i++) {
        var opt = document.createElement('option')
        opt.innerText = specional[i]
        sel.appendChild(opt)
    }

    document.getElementById('buttonSetting').onclick = () => {
        document.getElementById('settingSpNew').value

        specional.push(
            document.getElementById('settingSpNew').value
        )

        writeFile('./seting.json', JSON.stringify(specionals, null, '\t'), (err) => {
            if (err) throw err;
            else {
                alert('Успешно')
                document.getElementById('settingSpNew').value = '';
            };
        })
    }
    document.getElementById('buttonSetting2').onclick = () => {
        var select = document.getElementById('settingSelect').selectedIndex

        specional.splice(select, 1)

        writeFile('./seting.json', JSON.stringify(specionals, null, '\t'), (err) => {
            if (err) throw err;
            else {
                alert('Успешно')
            };
        })
    }

    document.getElementById('newUser').onclick = () => {

        var login = document.getElementById('loginNew').value
        var pass = document.getElementById('passNew').value

        users.push({
            "login": login,
            "pass": pass
        })
        writeFile('./seting.json', JSON.stringify(specionals, null, '\t'), (err) => {
            if (err) throw err;
            else {
                alert('Успешно')
            };
        })

    }

}
