const electron = require('electron');
const applicants = require('./data.json').applicants;
const setting = require('./seting.json').setting;
const path = require('path');
const webContents = require('electron');

const app = electron.app;
const globalShortcut = electron.globalShortcut;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const appTitle = "ECTS";

let mainWindow = null, printWindow;

app.on('ready', function() {
    usersWindow = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        fullscreen: false
    })

    mainWindow = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        fullscreen: true,
        show: false
    });
	
    printWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
		show: false
    });
	
    mainWindow.setTitle(appTitle);
    globalShortcut.register('Control + Q', () => {
        app.quit();
    });

    ipcMain.on('getData', function(event) {
        event.sender.send('data', applicants);
    });
    ipcMain.on('getDataSetting', function(event) {
        event.sender.send('data', setting);
    });


    usersWindow.loadURL(__dirname + '/users.html');
    usersWindow.show();

    mainWindow.loadURL(__dirname + '/index.html');
    ipcMain.on('login-success', (event, data) => {
        mainWindow.show();
    })
    //
	
	printWindow.loadURL(__dirname + '/print.html');

    ipcMain.on('print', (event, data) => {
        printWindow.webContents.send('print', 'Отправляем на печать');
        printWindow.show();
	})
    
});

