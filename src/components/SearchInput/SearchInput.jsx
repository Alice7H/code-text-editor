import React, { useContext } from 'react';
import { CodeEditorContext } from '../../contexts/ProjectContext';
import Button from '../Button';
import Input from '../Input';
import Search from '../../assets/images/search.svg';
import Close from '../../assets/images/close.svg';
import './SearchInput.css';

export default function SearchInput() {
  const { toggleSearch, openedSearchInput } = useContext(CodeEditorContext);

  return (
    <>
      <Button buttonType="button-icon" onClick={toggleSearch}>
        <img src={Search} alt="Busca" />
      </Button>
      
      {  openedSearchInput ?
         <div className="search-collapse">
           <Input type="text" placeholder="Busque por algo"/>
           <Button buttonType="button-icon" onClick={toggleSearch}>
            <img src={Close} alt="Busca" />
           </Button>
         </div> 
         : null
      }

    </> 
  )
}
