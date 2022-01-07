import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { CodeEditorContext } from '../../contexts/ProjectContext';
import { languages } from '../../utils/handleLanguageList';
import Input from '../Input';
import Button from '../Button';
import './Project.css';

export default function Project({project}) {
  const location = useLocation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { 
    setColorBorderBox, colorBorderBox,
    setLanguageHighlight, languageHighlight,
    handleSaveProject, clearForms
  } = useContext(CodeEditorContext);

  const handleChangeName = (e) => setName(e.target.value)
  const handleChangeDescription = (e) => setDescription(e.target.value)
  const handleChangeLanguage = (e) => setLanguageHighlight(e.target.value)
  const handleChangeColor = (e) => setColorBorderBox(e.target.value)
  
  const handleProject = (e) => {
    e.preventDefault();
    const prj = { name, description}
    handleSaveProject(prj, project?.id);
    resetForms();
  }

  const resetForms = useCallback(() => {
    clearForms();
    setName("");
    setDescription("");
  },[clearForms])

  const editProjects = useCallback(() => {
    setName(project.name);
    setDescription(project.description);
    setColorBorderBox(project.color);
    setLanguageHighlight(project.language);
  }, [project, setColorBorderBox, setLanguageHighlight])

  useEffect(() => {
    project === null || location.pathname === '/'
    ? resetForms()
    : editProjects() 
  }, [project, editProjects, resetForms, location]);

  return (
    <aside className="project">
      <form className="project-form" onSubmit={handleProject}>
        <h2>Seu projeto</h2>

        <label className="screenReader-only" htmlFor="name">Nome do seu projeto</label>
        <Input placeholder="Nome do seu projeto" 
        onChange={handleChangeName} id="name" value={name}/>

        <label className="screenReader-only" htmlFor="description">Descrição do seu projeto</label>
        <textarea placeholder="Descrição do seu projeto" className="input"
        onChange={handleChangeDescription} id="description" 
        value={description}/>
        
        <h2>Personalização</h2>

        <div className="personalization">
          <label className="screenReader-only" htmlFor="language">Linguagem do projeto</label>
          <select className="input" id="language"
          onChange ={handleChangeLanguage}  value={languageHighlight}>
            { languages.map( (lang, index) => 
              <option key={index} value={lang.value}>
                {lang.label}
              </option>
            )}
          </select>

          <label className="screenReader-only" htmlFor="color">Cor da borda da caixa do editor de código</label>
          <input type="color" id="color"  
            onChange={handleChangeColor} value={colorBorderBox}
          />
        </div>

        <Button className="button-filled" type="submit">Salvar Projeto</Button>
      </form>
    </aside>
  )
}
