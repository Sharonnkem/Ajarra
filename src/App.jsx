
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/600.css';
import '@fontsource/mulish/700.css';
import './App.css'
import CTASection from './components/CTASection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Row from './components/Row'
import Solution from './components/Solution'
import Testimonials from './components/Testimonials'
import Works from './components/Works'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Row/>
      <Solution/>
      <Works/>
      <Testimonials/>
      <CTASection/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
