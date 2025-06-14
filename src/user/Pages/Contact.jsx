import React from 'react'
import ContactSection from '../Component/ContactSection'

const Contact = () => {
  return (
    <>
      <div class="page-title dark-background">
        <div class="container position-relative">
          <h1>Contact</h1>
          <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
          {/* <nav class="breadcrumbs">
            <ol>
              <li><Link to={"#index.html"}>Home</Link></li>
              <li class="current">Contact</li>
            </ol>
          </nav> */}
        </div>
      </div>

      <ContactSection />
    </>
  )
}

export default Contact
