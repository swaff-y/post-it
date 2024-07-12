'use client'

import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { NavTabs } from "@/components/NavTabs/NavTabs";

// export const metadata: Metadata = {
//   title: "Post-it",
//   description: "A simple note-taking app",
// };

const NAV_LINKS = [
  { 
    label: 'Notes',
    href: '/home'
  },
  { 
    label: 'Create Note',
    href: '/home/create-note'
  },
  { 
    label: 'Delete Note',
    href: '/home/delete-note'
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar selected="home" />
        <NavTabs links={NAV_LINKS}/>
        {children}
      </body>
    </html>
  );
}
