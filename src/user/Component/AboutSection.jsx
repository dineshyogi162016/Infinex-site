import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Who we are</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
             A technology partner committed to your success
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>We take pride in delivering high-quality solutions that exceed expectations and drive measurable business outcomes.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Our team constantly explores emerging technologies to bring innovative solutions to complex business challenges.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>We build lasting relationships with our clients, becoming trusted advisors and partners in their digital journey.</span></li>
			  <li><i className="bi bi-check2-circle"></i> <span>We implement robust security measures and reliable infrastructure to protect your business and ensure continuity.</span></li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>Founded in 2025, Infinex has grown from a small tech startup to a leading technology consultancy serving clients across industries. Our mission is to help businesses harness the power of technology to achieve their strategic goals and stay ahead in today's rapidly evolving digital landscape. </p>
            <Link to={"#"} className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutSection
