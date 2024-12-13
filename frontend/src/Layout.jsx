import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function Layout() {
  return (
    <div>
      <Header />
        <Outlet /> {/* This will render the child components like LandingPage, Register, etc. */}
      <Footer/>


    </div>
  )
}

export default Layout;
