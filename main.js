const electron = require('electron')
const { app, BrowserWindow } = electron

let win

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html`)

  win.focus()
  win.on('closed', () => win = null)
}

app.on('ready', createWindow)

// Só finaliza a aplicação quando todas as paginas fecham se não for mac
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
