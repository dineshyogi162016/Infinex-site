import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from './Component/Header'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services';
import PageNotFound from './Pages/PageNotFound'
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio'
import Team from './Pages/Team';
import Blog from './Pages/Blog';
// import Dashboard from './Pages/Dashboard';

const Mainpage = () => {
  useEffect(() => {
      Aos.init({ duration: 1000 }); // optional config
    }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/team"} element={<Team />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/contact"} element={<Contact />} />


        {/* <Route path={"/dashboard"} element={<Dashboard />} /> */}


        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Mainpage
