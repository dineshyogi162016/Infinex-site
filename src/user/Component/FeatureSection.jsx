import React from 'react'
import { Link } from 'react-router-dom'

const FeatureSection = () => {
  return (
    <section id="features" className="features section">

    <div className="container">

      <ul className="nav nav-tabs row  d-flex" data-aos="fade-up" data-aos-delay="100">
        <li className="nav-item col-3">
          <Link to={"/"} className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
            <i className="bi bi-binoculars"></i>
            <h4 className="d-none d-lg-block">Excellence in Delivery</h4>
          </Link>
        </li>
        <li className="nav-item col-3">
          <Link to={"/"} className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
            <i className="bi bi-box-seam"></i>
            <h4 className="d-none d-lg-block">Innovation-First Approach</h4>
          </Link>
        </li>
        <li className="nav-item col-3">
          <Link to={"/"} className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
            <i className="bi bi-brightness-high"></i>
            <h4 className="d-none d-lg-block">Client Partnership</h4>
          </Link>
        </li>
        <li className="nav-item col-3">
          <Link to={"/"} className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4">
            <i className="bi bi-command"></i>
            <h4 className="d-none d-lg-block">Security &amp; Reliability</h4>
          </Link>
        </li>
      </ul>

      <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

        <div className="tab-pane fade active show" id="features-tab-1">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>We take pride in delivering exceptional solutions tailored to your needs.</h3>
              <p className="fst-italic">
               Our commitment to excellence ensures that every project is handled with precision, professionalism, and care.
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i>
                  <span>We work tirelessly to provide results that exceed expectations.</span>
                </li>
                <li><i className="bi bi-check2-all"></i> <span>We believe in transparency, collaboration, and delivering real value at every stage of the process.</span>.</li>
                <li><i className="bi bi-check2-all"></i> <span>Our team is dedicated to crafting solutions that are not only effective but also meaningful — ensuring you get the results you deserve without compromise.</span></li>
              </ul>
              <p className="fst-italic">
               Driving results through precision, performance, and commitment. With every project, we aim not just to deliver — but to deliver with excellence.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src="assets/img/working-1.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="features-tab-2">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Innovation is at the core of everything we do.</h3>
              <p className="fst-italic">
               We don’t just follow trends — we create them. Our approach is rooted in innovation, helping clients stay ahead in a rapidly evolving digital world.
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> <span>We embrace cutting-edge technologies to create smart, scalable solutions.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>Our culture encourages creative problem-solving and continuous improvement.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>We stay ahead of trends to help clients lead in their industries, not follow.</span></li>
              </ul>
               <p className="fst-italic">
              Fueling progress through creativity, technology, and forward-thinking solutions. With every idea, we innovate not just to improve — but to lead the future.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src="assets/img/working-2.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="features-tab-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Partnership that Powers Your Success</h3>
              <p className="fst-italic">
               We believe true success is built on strong relationships. Our clients are not just customers — they’re partners in every step of the journey.
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> <span>We collaborate closely to understand your goals, challenges, and vision.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>Transparent communication and mutual trust drive every project we take on.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>We prioritize long-term value over short-term wins, growing together with our clients.</span></li>
              </ul>
              <p className="fst-italic">
                Built on trust, collaboration, and shared success — because great results come from great partnerships.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src="assets/img/working-3.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="features-tab-4">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Security and Reliability You Can Trust</h3>
              <p className="fst-italic">
              Protecting your data and ensuring uninterrupted performance is at the heart of everything we do.
              </p>
               <ul>
                <li><i className="bi bi-check2-all"></i> <span>We implement robust security protocols to safeguard your sensitive information.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>Our infrastructure is designed for high availability and disaster recovery.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>Continuous monitoring and proactive maintenance keep your systems running smoothly.</span></li>
              </ul>
              <p className="fst-italic">
                Committed to protecting your business with unwavering security and dependable reliability — so you can focus on growth without worry.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img src="assets/img/working-4.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default FeatureSection
