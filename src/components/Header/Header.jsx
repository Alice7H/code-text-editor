import { Link } from 'react-router-dom';
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
      <nav>
        <ul className="header-nav">
          <li className="header-logo">
            <Link to="/" alt="Página de edição de código">
              <img src={Logo} className="header-logo_img" alt="logo alura dev" title="Logo AluraDev"/>
            </Link>
          </li>
          <li className="header-search">
            { width <= 375
              ? <SearchInput/>
              : <>
                <label className="screenReader-only" htmlFor="searchbox">Informe a busca por algo na página</label>
                <Input type="text" placeholder="Busque por algo" id="searchbox"/>
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
