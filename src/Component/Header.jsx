import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <Link to="/" className="logo d-flex align-items-center">
            <img src="/Company_logo.jpg" alt="" />
            <h1 className="sitename">Infinex Tech</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to={"/"} className="active">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header
