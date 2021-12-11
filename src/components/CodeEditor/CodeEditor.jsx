import React from 'react'
import Button from '../Button';
import BoxCodeEditor from '../BoxCodeEditor';
import './CodeEditor.css';

export default function CodeEditor() {
  // code-editor_container change color

  return (
    <section className="code-editor">
      <BoxCodeEditor/>
      <Button buttonType="button-outlined">
        Visualizar com o hightlight
      </Button>
  </section>
  )
}
