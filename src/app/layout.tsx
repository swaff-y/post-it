'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { Providers } from "@/providers/Providers";

// export const metadata: Metadata = {
//   title: "Post-it",
//   description: "A simple note-taking app",
// };



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
          {children}
        </Providers>
      </body>
    </html>
  );
}
