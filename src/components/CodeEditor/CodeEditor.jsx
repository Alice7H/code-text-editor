import React, { useEffect, useContext } from 'react';
import { CodeEditorContext } from '../../contexts/ProjectContext'; 
import Button from '../Button';
import BoxCodeEditor from '../BoxCodeEditor';
import ExportForm from '../ExportForm';
import Highlight from 'react-highlight';
import './CodeEditor.css';

export default function CodeEditor({project}) {
  const {
    toggleCode, 
    handleChangeHighlight,
    codeTextHighlighted,
    setCodeHighlight,
    codeHighlight,
    colorBorderBox,
  } = useContext(CodeEditorContext);

  const handleChangeCode = (e) => setCodeHighlight(e.target.value)

  useEffect(() => {
    project != null && setCodeHighlight(project.code)
  },[project, setCodeHighlight])

  return (
    <section className="code-editor">
      <div className="capture">
      <BoxCodeEditor color={colorBorderBox}>
        { codeTextHighlighted === ''
          ? 
          <>
            <label className="screenReader-only" htmlFor="code">Informe o código do projeto</label>
            <textarea type="code" 
              className="code-editor_textarea"
              onChange={handleChangeCode}
              value={codeHighlight} 
              id="code"
              />
          </>
          :
          <Highlight aria-label="Código com highlight" className={`language-${codeTextHighlighted.language}`}>
            {codeTextHighlighted.code}
          </Highlight>
        }
      </BoxCodeEditor>
      </div>
      <Button className="button-outlined" onClick={handleChangeHighlight}>
        {toggleCode ? 'Visualizar com o hightlight' : 'Editar texto'}
      </Button>
      
      <ExportForm/>
  </section>
  )
}
