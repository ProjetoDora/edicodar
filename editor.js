const CodeMirror = require('codemirror')

document.addEventListener('DOMContentLoaded', function () {
  CodeMirror(document.body, {
    theme: 'material',
    lineNumbers: true,
    value: 'Bem vindo ao Projeto Dora!',
    autofocus: true,
    mode: 'javascript'
  })
})
