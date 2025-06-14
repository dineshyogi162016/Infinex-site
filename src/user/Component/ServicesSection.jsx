import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section id="services" className="services section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>What we do offer</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <Link to={"service-details.html"} className="stretched-link">
                <h3>Software Development</h3>
              </Link>
              <p>Custom software solutions designed to address your unique business challenges and streamline operations.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week" style={{color: "blue"}}></i>
              </div>
              <Link to={"./cloud.html"} className="stretched-link">
                <h3>Cloud Solutions</h3>
              </Link>
              <p>Scalable, secure cloud infrastructure and migration services to modernize your IT environment.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-chat-text" style={{color: "#20c997"}}></i>
              </div>
              <Link to={"./data.html"} className="stretched-link">
                <h3>Data Analytics</h3>
              </Link>
              <p>Turn your data into actionable insights with our advanced analytics and business intelligence services.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-credit-card-2-front" style={{color: "#df1529"}}></i>
              </div>
              <Link to={"./mobile.html"} className="stretched-link">
                <h3>Mobile Development</h3>
              </Link>
              <p>Create engaging, high-performance mobile applications for iOS and Android platforms.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-globe" style={{color: "#6610f2"}}></i>
              </div>
              <Link to={"./cyber.html"} href="" className="stretched-link">
                <h3>Cybersecurity</h3>
              </Link>
              <p>Protect your digital assets with comprehensive security assessments and solutions.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-clock" style={{color: "#f3268c"}}></i>
              </div>
              <Link to={"./consult.html"} className="stretched-link">
                <h3>IT Consulting</h3>
              </Link>
              <p>Strategic technology advisory to help you navigate complex digital transformation initiatives.</p>
            </div>
          </div>

        </div>

      </div>

    </section>

  )
}

export default ServicesSection
