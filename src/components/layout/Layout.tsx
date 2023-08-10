import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default function Layout(props: any) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}