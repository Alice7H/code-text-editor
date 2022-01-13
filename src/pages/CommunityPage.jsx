import React, { useContext } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Card from '../components/Card';
import { CodeEditorContext } from '../contexts/ProjectContext';

export default function Community() {
  const { filteredProjects } = useContext(CodeEditorContext);
  const projects = JSON.parse(localStorage.getItem('projects'));
  
  return (
    <>
     <Header />
     <main className="main">
        <SideMenu/>
        <section className="cards">
          { 
            filteredProjects !== null && filteredProjects.length > 0  
            ? filteredProjects.map(filtered => <Card project={filtered} key={filtered.id} />)
            : projects !== null && projects.length > 0 
            ? projects.map(project => <Card project={project} key={project.id} />)
            : <h2>Você ainda não tem nenhum projeto salvo</h2>
          }   
        </section>
      </main>
    </>
  )
}
