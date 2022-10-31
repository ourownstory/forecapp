// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path');
let child;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: __dirname + '/icons/mac/icon.icns',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // Start backend
  // var python = require('child_process').spawn('python', ['./backend/app.py']);
  // python.stdout.on('data', function (data) {
  //   console.log("data: ", data.toString('utf8'));
  // });
  // python.stderr.on('data', (data) => {
  //   console.log(`stderr: ${data}`); // when error
  // });

  let backend;
  backend = path.join(process.cwd(), path.join(process.resourcesPath, 'dist', 'app', 'app'))
  child = require('child_process').execFile(
    backend,
    {
      windowsHide: true,
    },
    (err, stdout, stderr) => {
      if (err) {
        console.log(err);
      }
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.log(stderr);
      }
    }
  )

  // and load the index.html of the app.
  mainWindow.loadFile('./client/build/index.html')
  // mainWindow.loadURL('http://localhost:3000')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  child.kill();
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.