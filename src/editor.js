const React = require('react')
const ReactDOM = require('react-dom')
const Codemirror = require('react-codemirror')

const Editor = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			code: 'Bem vindo ao Projeto Dora!'
		}
	},
	updateCode: function updateCode(newCode) {
		this.setState({
			code: newCode
		})
	},
	render: function render() {
		const options = {
      theme: 'material',
      lineNumbers: true,
      autofocus: true,
      mode: 'javascript'
		}
		return React.createElement(
      Codemirror, {
        value: this.state.code,
        onChange: this.updateCode,
        options: options
      })
	}
})

module.exports = Editor
