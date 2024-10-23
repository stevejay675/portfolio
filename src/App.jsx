import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {

  return (
    <div className='comp'>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
