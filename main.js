const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 450,
    height: 460, // slightly taller
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.setTitle("VAT Calculator");
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');

  win.on('close', (event) => {
    event.preventDefault();
    win.minimize();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {});
