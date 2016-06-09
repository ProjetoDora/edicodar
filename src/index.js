document.addEventListener('DOMContentLoaded', function () {
  const React = require('react')
  const ReactDOM = require('react-dom')
  const Editor = require('./src/editor')
  ReactDOM.render(React.createElement(Editor, null), document.getElementById('app'))
})
