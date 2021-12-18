import React, { useState, useRef } from 'react';
import useEscapeListen from '../../hooks/useEscapeListen';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from '../Button';
import Input from '../Input';
import Search from '../../assets/images/search.svg';
import Close from '../../assets/images/close.svg';
import './SearchInput.css';

export default function SearchInput() {
 const searchRef = useRef('');
  const [openedSearch, setOpenedSearch] = useState(false);
  useEscapeListen(()=> setOpenedSearch(false));
  useOnClickOutside(searchRef, '#searchCollapseButton', toggleSearch);

  function toggleSearch() {
    setOpenedSearch(!openedSearch);
  }

  return (
    <>
      <Button className="button-icon" onClick={toggleSearch} id="searchCollapseButton">
        <img src={Search} alt="Busca" />
      </Button>
      
      {  openedSearch ?
         <form className="collapse-search" ref={searchRef}>
           <label className="screenReader-only" htmlFor="searchbox">Informe a busca por algo na página</label>
           <Input placeholder="Busque por algo" id="searchbox"/>
           <Button className="button-icon" onClick={toggleSearch}>
            <img src={Close} alt="Fechar" />
           </Button>
         </form> 
         : null
      }
    </> 
  )
}
