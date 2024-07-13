import { FC } from 'react';
import './navTabs.css'
import { Nav } from "react-bootstrap";

interface NavTabsProps {
  links: LinkAttrs[];
}

type LinkAttrs = {
  label: string;
  href?: string;
};

export const NavTabs: FC<NavTabsProps> = ({ links }) => {
  return (
    <Nav 
      data-bs-theme="dark" 
      variant="tabs" 
      defaultActiveKey="/home"
      className="nav-tabs"
    >
      {links.map((link, index) => (
        <Nav.Item 
          key={index} 
          className='nav-item'
        >
          <Nav.Link
            href={link.href}
            active={
              index === 0 &&
              (window.location.pathname === '/home/notes' || window.location.pathname === '/') ?
              true : window.location.pathname === link.href
            }
          >
            {link.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};