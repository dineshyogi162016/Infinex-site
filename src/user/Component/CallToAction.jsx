import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">

      <div className="container">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Call To Action</h3>
            <p>Have a question or want to work together? Reach out to us!</p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <Link to={"/"} className="cta-btn align-middle" >Call To Action</Link>
          </div>
        </div>

      </div>

    </section>
  )
}

export default CallToAction
