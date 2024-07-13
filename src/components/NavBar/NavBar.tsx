'use client'

import { Nav, Navbar } from 'react-bootstrap'
import './navBar.css'
import { FC, use, useEffect } from 'react'
import { usePathname } from 'next/navigation';

type NavBarProps = {
  selected?: string
};

export const NavBar: FC<NavBarProps> = ({ selected = 'home' }) => {
  const location = usePathname();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="/" className="nav-brand">
        Resource Library
      </Navbar.Brand>
      <div className='nav-links'>
        <Nav className="me-auto">
          <Nav.Link 
            href="/" 
            active={
              !!location && (
                !!location.match(/\/home/) ||
                location === '/'
              )
            }>
              Home
            </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link 
            href="/account" 
            active={
              location === '/account'
            }>
              Account
            </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  )
}