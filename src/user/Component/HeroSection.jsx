import React from 'react'
import Waves from '../../LocalAssets/Waves'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section id="hero" className="hero section dark-background">

      <div id="hero-carousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">

        {/* <!-- Slide 1 --> */}
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">Welcome to Infinex Tech</h2>
            <p className="animate__animated animate__fadeInUp">We help businesses transform and thrive in the digital age with cutting-edge technology solutions and expert guidance.</p>
            <Link to={"#about"} className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
          </div>
        </div>

        {/* <!-- Slide 2 --> */}
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">Empowering Innovation</h2>
            <p className="animate__animated animate__fadeInUp">At Infinex Technologies, we are driven by a passion for innovation and a commitment to empowering aspiring developers with hands-on experience and real-world exposure. Based in Jaipur, we specialize in delivering cutting-edge solutions across a spectrum of digital services.  </p>
            <Link to={"#about"} className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
          </div>
        </div>

        {/* <!-- Slide 3 --> */}
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">Shaping Digital Journeys</h2>
            <p className="animate__animated animate__fadeInUp">At Infinex Technologies, we don’t just create software; we shape digital journeys. Join us as we inspire innovation, nurture talent, and deliver excellence. Explore endless possibilities with Infinex Technologies!.</p>
            <Link to={"#about"} className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
          </div>
        </div>

        <Link to={"#about"} className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </Link>

        <Link to={"#about"} className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </Link>

      </div>

      <Waves />

    </section>
  )
}

export default HeroSection
