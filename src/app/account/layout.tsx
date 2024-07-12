'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./account.css";
import { NavBar } from "@/components/NavBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='account-body'>
        <NavBar selected="home" />
        {children}
      </body>
    </html>
  );
}
