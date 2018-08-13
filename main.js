const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
  
  mainWindow = new BrowserWindow({
    width: 500,
    height: 160
  })

  mainWindow.loadFile('index.html')

  // open DevTools on load (make sure your window size is not too small)
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
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