import React from 'react'
import {ReactComponent as Round} from '../../assets/images/round.svg';
import './BoxCodeEditor.css';

export default function BoxCodeEditor() {
  return (
    <div className="code-editor_container">
      <div className="code-editor_code">
        <div className="code-editor_buttons">
          <Round fill="#ff5f56"/>
          <Round fill="#ffbd2e"/>
          <Round fill="#27c93f"/>
        </div>
        <textarea type="code" className="code-editor_textarea"/>
      </div>
    </div>
  )
}
