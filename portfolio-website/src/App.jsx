import { useState } from 'react'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Divider from './Divider.jsx'
import About from './About.jsx'
import Certificates from './Certificates.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'


function App() {
  
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Divider></Divider>
      <About></About>
      <Certificates></Certificates>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App
