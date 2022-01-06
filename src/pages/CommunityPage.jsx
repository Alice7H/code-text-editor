import React, { useContext } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Card from '../components/Card';
import { CodeEditorContext } from '../contexts/ProjectContext';

export default function Community() {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const { filteredProjects } = useContext(CodeEditorContext);
   
  return (
    <>
     <Header />
     <main className="main">
        <SideMenu/>
        <section className="cards">
          { 
            filteredProjects && filteredProjects.length > 0  
            ? 
            filteredProjects.map( filtered => <Card project={filtered} key={filtered.id} />)
            :
            projects.length > 0 && projects.map( project => <Card project={project} key={project.id} />)
          }   
        </section>
      </main>
    </>
  )
}
