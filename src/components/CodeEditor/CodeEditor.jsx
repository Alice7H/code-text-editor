import React, { useContext } from 'react'
import { CodeEditorContext } from '../../contexts/ProjectContext'; 
import Button from '../Button';
import BoxCodeEditor from '../BoxCodeEditor';
import Highlight from 'react-highlight';
import './CodeEditor.css';

export default function CodeEditor() {

  const {
    handleChangeHighlight, 
    codeTextHighlighted,
    handleChangeCode, 
    toggleCode, 
    codeText  
  } = useContext(CodeEditorContext);

  return (
    <section className="code-editor">
      <BoxCodeEditor>
        { codeTextHighlighted === ''
          ? 
          <>
            <label className="screenReader-only" htmlFor="code">Informe o código do projeto</label>
            <textarea type="code" 
              className="code-editor_textarea"
              onChange={handleChangeCode}
              value={codeText} 
              id="code"
              />
          </>
          :
          <Highlight aria-label="Código com highlight" className={`language-${codeTextHighlighted.language}`}>
            {codeTextHighlighted.code}
          </Highlight>
        }
      </BoxCodeEditor>
      <Button className="button-outlined" onClick={handleChangeHighlight}>
        {toggleCode ? 'Visualizar com o hightlight' : 'Editar texto'}
      </Button>
  </section>
  )
}
