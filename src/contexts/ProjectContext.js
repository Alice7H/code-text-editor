import React, { createContext, useState } from 'react';
import hljs from 'highlight.js';
import { toast } from 'react-toastify';
export const CodeEditorContext = createContext();

export default function CodeEditorProvider(props) {
    const [color, setColor] = useState('aquamarine');
    const [language, setLanguage] = useState('javascript');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [codeText, setCodeText] = useState('');
    const [codeTextHighlighted, setCodeTextHighlighted] = useState('');
    const [toggleCode, setToggleCode] = useState(true);
    const [projects, setProjects] = useState([]);

    // Project component
    const handleSaveProject = (e) => {
        if(!name || !description || !codeText) {
            toast.warn('Informe os campos corretamente.');
        }else{
            const newProject = { 
                id: Date.now(),
                name, description, language, color, 
                code:codeText
            };
            setProjects([...projects, newProject]);
            
            saveInLocalStorage(newProject);
            toast.success('Projeto salvo. Verifique na página da comunidade');    
            clearInputs(e);
        }
    }
    
    const saveInLocalStorage = newProject => {
        const tempProject = JSON.parse(localStorage.getItem('projects'));
        tempProject.push(newProject);
        localStorage.setItem('projects', JSON.stringify(tempProject)); 
    }
  
    const clearInputs = (e) => {
        e.target.reset();
        setColor('');
        setCodeText('');
        setCodeTextHighlighted('');
        setToggleCode(true);
    }

    const handleChangeColor = (e) =>{
        setColor(e.target.value);
    }

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleChangeCode = (e) => { 
        setCodeText(e.target.value);
    }

    const handleChangeHighlight = () => {
        setToggleCode(!toggleCode);
        if(toggleCode) {
            const highlightedText = hljs.highlight(codeText, { language });
            // { language, code, value} = highlightedText  
            setCodeTextHighlighted(highlightedText); 
        }else{
            setCodeTextHighlighted('');
        } 
    }

    return (
        <CodeEditorContext.Provider value={{
            toggleCode,
            color,
            language,
            codeText,
            projects,
            codeTextHighlighted,
            handleChangeCode,
            handleChangeHighlight,
            handleChangeName,
            handleChangeDescription, 
            handleChangeLanguage,
            handleChangeColor,
            handleSaveProject
        }}> 
            {props.children}
        </CodeEditorContext.Provider>
    )
}