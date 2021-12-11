import React, { useContext } from 'react'
import { CodeEditorContext} from '../../contexts/ProjectContext';
import User from '../User';
import NavSide from '../NavSide';
import Button from '../Button';
import Close from '../../assets/images/close.svg';
import Menu from '../../assets/images/menu.svg';
import './CollapseMenu.css';

export default function CollapseMenu() {
  const {toggleMenu, openedMenu } = useContext(CodeEditorContext);

  return (
    <>
    <Button buttonType="button-icon" onClick={ toggleMenu }> 
      {
        <img src={openedMenu ? Close : Menu} alt={openedMenu ? 'Menu' : 'Fechar'}/> 
      }
    </Button> 
    
    { openedMenu ?
      <div className="collapse-menu">
        <NavSide/>
        <hr className="fade"/>
        <User/>
      </div>
      : null
    }
    </>
  )
}
