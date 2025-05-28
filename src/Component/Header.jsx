import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const mobileNavToogle = () =>{
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');

    }


    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      // const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

        navmenu.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
           
            mobileNavToogle()
            // document.querySelector('body').classList.toggle('mobile-nav-active');
            // mobileNavToggleBtn.classList.toggle('bi-list');
            // mobileNavToggleBtn.classList.toggle('bi-x');
          }
        });
    
      });


    // document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    //   navmenu.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     this.parentNode.classList.toggle('active');
    //     this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    //     e.stopImmediatePropagation();
    //   });
    // });

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
              <li><NavLink to={"/"} >Home</NavLink></li>
              {/* <li><Link to={"#about"} >About</Link></li> */}
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/services"}>Services</NavLink></li>
              <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
              <li><NavLink to={"/team"}>Team</NavLink></li>
              <li><NavLink to={"/blog"}>Blog</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={mobileNavToogle}></i>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header
