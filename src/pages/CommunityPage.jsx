import React from 'react'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Card from '../components/Card';

export default function Community() {
  return (
    <>
     <Header />
     <main className="main">
        <SideMenu/>
        <div className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
    </>
  )
}
