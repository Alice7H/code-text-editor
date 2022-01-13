import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Project from '../components/Project';
import CodeEditor from '../components/CodeEditor';
import { ToastContainer } from 'react-toastify';

export default function EditCodePage() {
  const { id } = useParams();
  const [project, setProject]= useState(null);
  
  const getProject = useCallback(() => {
    if(id){
      const projects = JSON.parse(localStorage.getItem('projects'));
      const prj = projects?.find(project => project.id === parseInt(id));
      prj !== undefined && setProject(prj);
    }
  },[id]);

  useEffect(() => {
    getProject();
  }, [getProject])

  return (
    <>
      <Header />
      <main className="main">
        <ToastContainer autoClose={5000}/>
        <SideMenu/>
        <CodeEditor project={project} />
        <Project project={project}/>
      </main> 
    </>
  )
}
