import { FC, useEffect } from 'react';
import './navTabs.css'
import { Nav } from "react-bootstrap";
import { usePathname } from 'next/navigation';

interface NavTabsProps {
  links: LinkAttrs[];
}

type LinkAttrs = {
  label: string;
  href?: string;
};

export const NavTabs: FC<NavTabsProps> = ({ links }) => {
  const location = usePathname();
  
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
              (location === '/home/notes' || location === '/') ?
              true : location === link.href
            }
          >
            {link.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};