import React from 'react'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Project from '../components/Project';
import CodeEditor from '../components/CodeEditor';

export default function EditCodePage() {

  return (
    <>
      <Header />
      <main className="main">
        <SideMenu/>
        <CodeEditor/>
        <Project/>
      </main> 
    </>
  )
}
