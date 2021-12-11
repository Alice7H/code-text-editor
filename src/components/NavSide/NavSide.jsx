import React from 'react'
import Button from '../Button';
import Code from '../../assets/images/icon-code-slash.svg';
import Community from '../../assets/images/icon_community.svg';
import './NavSide.css';

export default function NavSide() {
  return (
    <>
       <nav className="sidemenu-nav">
        <a href="#home" className="sidemenu-link">
          <Button buttonType="button-menu">
            <img src={Code} alt="Editor de código" />
            Editor de Código
          </Button>
        </a>
        
        <a href="#home" className="sidemenu-link">
          <Button buttonType="button-menu">
            <img src={Community} alt="Comunidade" />
            Comunidade
          </Button>
        </a>
      </nav>
    </>
  )
}
