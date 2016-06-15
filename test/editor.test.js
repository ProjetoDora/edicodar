const { shallow } = require('enzyme')
const { expect } = require('chai')
const React = require('react')
const Editor = require('../src/editor')

describe('Editor', () => {
  it('renders CodeMirror', () => {
    const editorComponent = shallow(React.createElement(Editor, null))
    expect(editorComponent.node.type.displayName).to.equal('CodeMirror')
  })
})
