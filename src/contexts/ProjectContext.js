import React, { createContext, useState } from 'react';

export const CodeEditorContext = createContext();

export default function CodeEditorProvider(props) {
    const [openedMenu, setOpenedMenu] = useState(false);
    const [openedSearchInput, setOpenedSearchInput] = useState(false);

    const toggleMenu = () => {
        setOpenedMenu(!openedMenu);
    }

    const toggleSearch = () => {
        setOpenedSearchInput(!openedSearchInput);
    }

    return (
        <CodeEditorContext.Provider value={{
            openedMenu,
            toggleMenu,
            openedSearchInput,
            toggleSearch,
        }}> 
            {props.children}
        </CodeEditorContext.Provider>
    )
}