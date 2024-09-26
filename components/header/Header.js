import React from 'react'
import './Header.css'
import Logo from "../../Images/logo_nobg.webp"
import { Nav, Navbar } from 'react-bootstrap'
import {  Routes, Route, NavLink } from 'react-router-dom'
import Home from '../home/Home'
import Gallery from '../gallery/Gallery'
import Reviews from './../reviews/Reviews';
import About from '../about/About'
import Services from './../services/Services';
import Contact from './../contact/Contact';
import Login from './../login/Login';
import { useState } from 'react'

function Header() {

  const [expanded, setExpanded]= useState(false);

  const closeNavbar = () => setExpanded(false);
  return (
    <div>
      <Navbar expand='lg' className='px-2 px-sm-4' expanded={expanded} fixed='top'>
          <Navbar.Brand className='brandLogo'>
              <img src={Logo} alt="logo" width="60" height="60"/>{' '}
              <span className='brandName fw-bold'>Homaid</span>
          </Navbar.Brand>
          <Navbar.Toggle onClick={()=> setExpanded(expanded ? false : true)}/>
          <Navbar.Collapse className='text-center'>
            <Nav className='ms-auto'>
              <Nav.Item>
                <Nav.Link to='/' as={NavLink} onClick={closeNavbar}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item> 
                <Nav.Link to='/gallery' as={NavLink} onClick={closeNavbar}>Gallery</Nav.Link>
              </Nav.Item>
              <Nav.Item>   
                <Nav.Link to='/reviews' as={NavLink} onClick={closeNavbar}>Reviews</Nav.Link>
              </Nav.Item>
              <Nav.Item> 
                <Nav.Link to='/about' as={NavLink} onClick={closeNavbar}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to='/services' as={NavLink} onClick={closeNavbar}>Services</Nav.Link>
              </Nav.Item> 
              <Nav.Item>
                <Nav.Link to='/contact' as={NavLink} onClick={closeNavbar}>Contact</Nav.Link>
              </Nav.Item> 
              <Nav.Item> 
                <Nav.Link to='/login' as={NavLink} onClick={closeNavbar}>Login</Nav.Link>
              </Nav.Item>              
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default Header
