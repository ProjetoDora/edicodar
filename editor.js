const CodeMirror = require('codemirror')

document.addEventListener("DOMContentLoaded", function () {
  CodeMirror(document.body, {
    value: 'Bem vindo ao Projeto Dora!',
    autofocus: true,
    mode: 'javascript'
  })
})
