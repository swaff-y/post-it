'use client'

import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { Providers } from "@/providers/Providers";

// export const metadata: Metadata = {
//   title: "Post-it",
//   description: "A simple note-taking app",
// };

const NAV_LINKS = [
  { 
    label: 'Links',
    href: '/home'
  },
  { 
    label: 'Create Link',
    href: '/home/create-link'
  },
  { 
    label: 'Delete Link',
    href: '/home/delete-link'
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
        <Providers>
          <NavBar selected="home" />
          <NavTabs links={NAV_LINKS}/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
