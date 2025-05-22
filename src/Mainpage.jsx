import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import ServicesSection from './Component/ServicesSection'

const Mainpage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<ServicesSection />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Mainpage
