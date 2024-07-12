import { Nav, Navbar, NavbarProps } from 'react-bootstrap'
import './navBar.css'
import { FC } from 'react'

type NavBarProps = {
  selected?: string
};

export const NavBar: FC<NavBarProps> = ({ selected = 'home' }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="/" className="nav-brand">Post Its</Navbar.Brand>
      <div className='nav-links'>
        <Nav className="me-auto">
          <Nav.Link 
            href="/" 
            active={
              !!window.location.pathname.match(/\/home/) ||
              window.location.pathname === '/'
            }>
              Home
            </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link 
            href="/account" 
            active={
              window.location.pathname === '/account'
            }>
              Account
            </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  )
}