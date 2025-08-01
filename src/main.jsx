import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
          <Header />
          <main>
            <Section1 /> 
            <Section2 />
            <Section3 />
            <Section4 />
          </main>
            <Footer />
  </StrictMode>,
)
