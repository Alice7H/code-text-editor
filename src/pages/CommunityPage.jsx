import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Card from '../components/Card';

export default function Community() {
  const projects = JSON.parse(localStorage.getItem('projects'));
  return (
    <>
     <Header />
     <main className="main">
        <SideMenu/>
        <section className="cards">
          { projects.length > 0 
            && projects.map( project =>
            <Card project={project} key={project.id} />)
          }   
        </section>
      </main>
    </>
  )
}
