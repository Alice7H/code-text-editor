import React from 'react'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import Code from '../../assets/images/icon-code-slash.svg';
import Community from '../../assets/images/icon_community.svg';
import './NavSide.css';

export default function NavSide() {
  const navigate = useNavigate();
  const handleLinkToCodEditorPage = () => navigate("/")
  const handleLinkToCommunity =() => navigate("/community")

  return (
    <>
       <nav className="sidemenu-nav" role="navigation">
        <ul>
          <li className="sidemenu-list">
            <Button className="button-menu" role="link" onClick={handleLinkToCodEditorPage}>
              <img src={Code} alt="" />
              Editor de Código
            </Button>
          </li>
           
          <li className="sidemenu-list">    
            <Button className="button-menu" onClick={handleLinkToCommunity}>
              <img src={Community} alt="" />
              Comunidade
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}
