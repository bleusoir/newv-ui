import React, { ReactNode } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;