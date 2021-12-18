import React, { useState, useRef } from 'react';
import useEscapeListen from '../../hooks/useEscapeListen';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import User from '../User';
import NavSide from '../NavSide';
import Button from '../Button';
import Close from '../../assets/images/close.svg';
import Menu from '../../assets/images/menu.svg';
import './CollapseMenu.css';

export default function CollapseMenu() {
  const menuRef = useRef('');
  const [openedMenu, setOpenedMenu] = useState(false);
  useEscapeListen(()=> setOpenedMenu(false));
  useOnClickOutside(menuRef,'#collapseMenuButton', toggleMenu);

  function toggleMenu() {
    setOpenedMenu(!openedMenu);
  }

  return (
    <>
    <Button className="button-icon" onClick={toggleMenu} id="collapseMenuButton"> 
      {
        <img src={openedMenu ? Close : Menu} 
         alt={openedMenu ? 'Menu' : 'Fechar'}
         role={openedMenu ? 'menu' : 'button'}
        /> 
      }
    </Button> 
    
    { openedMenu ?
      <div className="collapse-menu" ref={menuRef}>
        <NavSide/>
        <hr className="fade"/>
        <User/>
      </div>
      : null
    }
    </>
  )
}
