import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'


import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Error from './pages/Error'
import Home from './pages/Home'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import BackToTop from './components/BackTotop'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default path for the home page */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/error" element={<Error />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
        <BackToTop/>
      </BrowserRouter>
    </>
  )
}

export default App