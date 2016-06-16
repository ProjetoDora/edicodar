const { shallow } = require('enzyme')
const { expect } = require('chai')
const React = require('react')
const Editor = require('../src/editor')
const CodeMirror = require('react-codemirror')

describe('Editor', () => {
  it('renders CodeMirror', () => {
    const editorComponent = shallow(<Editor />)
    expect(editorComponent.find(CodeMirror).length).to.equal(1)
  })

  it('renders button', () => {
    const editorComponent = shallow(<Editor />)
    expect(editorComponent.find('button').length).to.equal(1)
  })
})
