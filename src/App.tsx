import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Experience from './sections/Experince'
import Internships from './sections/Interships'
import EducationSection from './sections/Educations'
import FooterSection from './sections/Footer'
import Footers from './sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
      <About/>
      <Project/>
      <Internships/>
      <EducationSection/>
      <Experience/>
      <Contact/>
      <Footers/>
    </main>
  )
}

export default App