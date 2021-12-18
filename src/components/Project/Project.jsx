import React, { useContext } from 'react';
import { CodeEditorContext } from '../../contexts/ProjectContext';
import Input from '../Input';
import Button from '../Button';
import './Project.css';

export default function Project() {
  const { 
    handleChangeName,
    handleChangeDescription,
    handleChangeLanguage,
    handleChangeColor,
    handleSaveProject 
  } = useContext(CodeEditorContext);
  const languages = [
    { value: 'javascript', label: 'Javascript'},
    { value: 'html', label: 'HTML'},
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'php', label: 'PHP' },
    { value: 'c', label: 'C' },
    { value: 'css', label: 'CSS' },
  ];

  const handleProject = (event) => {
    event.preventDefault();
    handleSaveProject(event);
  }

  return (
    <aside className="project">
      <form className="project-form" onSubmit={handleProject}>
        <h2>Seu projeto</h2>

        <label className="screenReader-only" htmlFor="name">Nome do seu projeto</label>
        <Input placeholder="Nome do seu projeto" 
        onChange={handleChangeName} id="name"/>

        <label className="screenReader-only" htmlFor="description">Descrição do seu projeto</label>
        <textarea placeholder="Descrição do seu projeto" className="input"
        onChange={handleChangeDescription} id="description"/>
        
        <h2>Personalização</h2>

        <div className="personalization">
          <label className="screenReader-only" htmlFor="language">Linguagem do projeto</label>
          <select className="input" id="language"
          onChange ={handleChangeLanguage} >
            { languages.map( (lang, index) => 
              <option key={index} value={lang.value}>
                {lang.label}
              </option>
            )}
          </select>

          <label className="screenReader-only" htmlFor="color">Cor da borda da caixa do editor de código</label>
          <input type="color" id="color"  
            onChange={handleChangeColor} 
          />
        </div>

        <Button className="button-filled" type="submit">Salvar Projeto</Button>
      </form>
    </aside>
  )
}
