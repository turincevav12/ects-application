import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';
import {
	new_applicant,
	baza_applicant,
	otbor_applicant,
	seting_applicant
} from './module';

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send('getData');
const data = JSON.parse(readFileSync('./data.json'));

document.getElementsByClassName('button-min-sv-close')[0].onclick = () => {
    close();
}

document.getElementsByClassName('button-top-line')[0].onclick = () => {
    document.getElementsByClassName('window-menu')[0].innerHTML = '';
    
    new_applicant();

    
}
document.getElementsByClassName('button-top-line')[1].onclick = () => {
    document.getElementsByClassName('window-menu')[0].innerHTML = '';
    
    baza_applicant();
}


document.getElementsByClassName('button-top-line')[2].onclick = () => {
    document.getElementsByClassName('window-menu')[0].innerHTML = '';
    
    seting_applicant();
}
