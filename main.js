// Modules to control application life and create native browser window
const {app, BrowserWindow, BrowserView, ipcMain} = require('electron')
const { exec } = require('child_process');
const path = require('path');

app.commandLine.appendSwitch('touch-devices', 'USBest Technology SiS HID Touch Controller')

let mainWindow
let mainView

function createWindow () {

  mainWindow = new BrowserWindow({width: 1920, height: 1080, frame: false,
    webPreferences: {
      nodeIntegration: false
    },
  })

  let mainView = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })

  mainWindow.setBrowserView(mainView)
  mainWindow.setFullScreen(true);
  mainWindow.setAlwaysOnTop(true);
  mainWindow.setBounds({ x: 0, y: 0, width: 1920, height: 1080 })
  mainWindow.webContents.loadURL('http://localhost:8181')

  ipcMain.on('focus', function () {
  })

  ipcMain.on('blur', function () {

  })  

  mainWindow.webContents.on('crashed', (event) => {
    app.relaunch()
    app.exit()
  });

  mainWindow.webContents.on('login', function () {
  });

  mainWindow.webContents.on('did-navigate-in-page', function () {
  }); 

  mainWindow.webContents.on('did-frame-navigate', function () {
  }); 

  mainWindow.webContents.on('new-window', function (event) {
  });  

  mainWindow.webContents.on('did-finish-load', function () {
  });

  mainWindow.webContents.on('did-navigate', function () {    
  });      

  mainWindow.webContents.on('dom-ready', function () {
  }); 

  mainWindow.webContents.on('did-navigate', function (ev) {    
  }); 

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
