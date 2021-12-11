import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';
import './Project.css';

export default function Project() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('Javascript');
  const [color, setColor] = useState('');

  const languages = [
    { value: 'javascript', label: 'Javascript'},
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'php', label: 'PHP' },
    { value: 'c', label: 'C' },
    { value: 'c-sharp', label: 'C#' },
    { value: 'c-plus', label: 'C++' },
  ];

  function handleProject(event) {
    event.preventDefault();
    console.log(name, description, language, color);
  }

  return (
    <section className="project">
      <form className="project-form" onSubmit={handleProject}>
        <h2>Seu projeto</h2>
        <Input placeholder="Nome do seu projeto" 
        onChange={event => setName(event.target.value)}/>

        <textarea placeholder="Descrição do seu projeto" className="input"
        onChange={event => setDescription(event.target.value)}/>
        <br />
        <h2>Personalização</h2>
        <select name="language" id="language" className="input" 
         onChange ={event => setLanguage(event.target.value)}>
          { languages.map( (lang, index) => 
            <option key={index} value={lang.value}>
              {lang.label}
            </option>
          )}
        </select>
        <input type="color" className="project-form-color" onChange={event => setColor(event.target.value)}/>
        <Button buttonType="button-filled">Salvar Projeto</Button>
      </form>
    </section>
  )
}
