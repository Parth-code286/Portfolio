import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
      <About/>
      <Project/>
    </main>
  )
}

export default App