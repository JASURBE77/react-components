import React from 'react'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Section1 /> 
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
        <Footer />
    </div>
  )
}

export default App