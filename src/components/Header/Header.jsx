import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import Profile from '../Profile';
import Input from '../Input';
import SearchInput from '../SearchInput';
import Logo from '../../assets/images/logo.svg';
import './Header.css';

export default function Header() {
  const [width] = useWindowSize();

  return(
    <header className="header">
      <nav className="header-nav">
        <a href="#home" alt="Página inicial" className="header-logo_link">
          <img src={Logo} className="header-logo_img" alt="logo" />
        </a>
        <div className="header-search">
          { width <= 375
            ? <SearchInput/>
            : <Input type="text" placeholder="Busque por algo"/>
          }
        </div>
        <Profile/>
      </nav>
    </header>
  )
}
