import { ipcRenderer } from 'electron';
import { readFileSync } from 'fs';

window.onload = () => {
      

    const setting = JSON.parse(readFileSync('./seting.json'));

    const [loginInput, passwordInput] = document.querySelectorAll('.form_login > .input');

    document.getElementsByClassName('form_login')[0].onsubmit = (event) => {   
        event.preventDefault();

        logIn(setting.users, loginInput.value, passwordInput.value);
    }

}

function logIn(users, login, password) {
    users.forEach(function(user) {
        if (user.login === login){
            if (user.pass === password){
                ipcRenderer.send('login-success');
                close();
            } else {
                alert('Не верный логин или пароль');
            }
        }
    });
}