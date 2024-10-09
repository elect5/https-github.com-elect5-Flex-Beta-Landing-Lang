import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Footer from './components/Footer'
import Registration from './components/Registration'
import FAQ from './components/FAQ'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Features />
              <HowItWorks />
              <About />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App