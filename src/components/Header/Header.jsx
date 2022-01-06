import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import Profile from '../Profile';
import Input from '../Input';
import SearchInput from '../SearchInput';
import { CodeEditorContext } from '../../contexts/ProjectContext';
import Logo from '../../assets/images/logo.svg';
import './Header.css';

export default function Header() {
  const [width] = useWindowSize();
  const navigate = useNavigate();
  const { handleFilteredProjects } = useContext(CodeEditorContext);

  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      e.preventDefault();
      handleFilteredProjects(e.target.value);
      navigate("/community");
    }
  }

  return(
    <header className="header">
      <nav>
        <ul className="header-nav">
          <li className="header-logo">
            <Link to="/" alt="Página de edição de código">
              <img src={Logo} className="header-logo_img" alt="logo alura dev" title="Logo AluraDev"/>
            </Link>
          </li>
          <li className="header-search">
            { width <= 375
              ? <SearchInput handleKeyDown={handleKeyDown}/>
              : <>
                <label className="screenReader-only" htmlFor="searchbox">Informe a busca por algo na página</label>
                <Input type="text" placeholder="Busque por algo" 
                id="searchbox"
                onKeyDown={handleKeyDown}
                />
              </>
            }
          </li>
          <li className="header-profile">
            <Profile/>
          </li>
        </ul>
      </nav>
    </header>
  )
}
