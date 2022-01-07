import React from 'react'
import { ReactComponent as Round } from '../../assets/images/round.svg';

import './BoxCodeEditor.css';

export default function BoxCodeEditor(props) {

  return (
    <div className="code-editor_container"
     style={{backgroundColor: `${props?.color}` ||'#7fffd4' }}>
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
