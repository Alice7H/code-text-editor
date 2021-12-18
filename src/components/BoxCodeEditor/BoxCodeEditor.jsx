import React, {useContext} from 'react'
import { CodeEditorContext } from '../../contexts/ProjectContext';
import { ReactComponent as Round } from '../../assets/images/round.svg';

import './BoxCodeEditor.css';

export default function BoxCodeEditor(props) {
  const { color } = useContext(CodeEditorContext);
  const bgColor = props.color ? props.color : color;
  
  return (
    <div className="code-editor_container"
     style={{backgroundColor: `${bgColor}` ||'aquamarine' }}>
      <div className="code-editor_code">
        <div className="code-editor_buttons">
          <Round fill="#ff5f56" aria-label="Botão decorativo vermelho"/>
          <Round fill="#ffbd2e" aria-label="Botão decorativo amarelo"/>
          <Round fill="#27c93f" aria-label="Botão decorativo verde"/>
        </div>
       {props.children}
      </div>
    </div>
  )
}
