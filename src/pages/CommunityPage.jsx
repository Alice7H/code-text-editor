import React, { useContext } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Card from '../components/Card';
import { CodeEditorContext } from '../contexts/ProjectContext';
import Pagination from '../components/Pagination/Pagination';

export default function Community() {
  const { filteredProjects } = useContext(CodeEditorContext);
  const projects = JSON.parse(localStorage.getItem('projects'));
  
  return (
    <>
     <Header />
     <main>
      <div className="row">
        <SideMenu/>
        <div className="cards">
        {
         filteredProjects !== null && filteredProjects.length > 0 ?
         <Pagination
         data={filteredProjects}
         RenderComponent={Card}
         dataLimit={4}
         />
         : projects !== null && projects.length > 0 
         ?
         <Pagination
         data={projects}
         RenderComponent={Card}
         dataLimit={4}
         /> 
         : 
         projects === null && projects.length === 0 &&
         <h2>Você ainda não tem nenhum projeto salvo</h2> 
        }
        </div>
      </div>
      </main>
    </>
  )
}
