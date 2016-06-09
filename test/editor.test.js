const { shallow } = require('enzyme')
const { expect } = require('chai')
const React = require('react')
const Editor = require('../src/editor')

describe('Editor', () => {
  it('renders CodeMirror', () => {
    const editorComponent = shallow(React.createElement(Editor, null))
    console.log(editorComponent.node.type.displayName)
    expect(editorComponent.node.type.displayName).to.equal('CodeMirror')
  })
})
