const React = require('react')
const ReactDOM = require('react-dom')
const Codemirror = require('react-codemirror')

class Editor extends React.Component {
	constructor (props) {
    super(props)
		this.state = {
			code: 'Bem vindo ao Projeto Dora!'
		}
	}

	updateCode (newCode) {
		this.setState({
			code: newCode
		})
	}

	render () {
		const options = {
      theme: 'material',
      lineNumbers: true,
      autofocus: true,
      mode: 'javascript'
		}
		return (
      <Codemirror value={this.state.code}
        onChange={this.updateCode}
        options={options} />
    )
	}
}

module.exports = Editor
