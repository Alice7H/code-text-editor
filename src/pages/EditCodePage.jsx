import React from 'react'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Project from '../components/Project';
import CodeEditor from '../components/CodeEditor';
import { ToastContainer } from 'react-toastify';

export default function EditCodePage() {

  return (
    <>
      <Header />
      <main className="main">
        <ToastContainer />
        <SideMenu/>
        <CodeEditor/>
        <Project/>
      </main> 
    </>
  )
}
