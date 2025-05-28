import React from 'react'
import ServicesSection from '../Component/ServicesSection'

const Services = () => {
  return (
    <>
        <div class="page-title dark-background">
          <div class="container position-relative">
            <h1>Services</h1>
            <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            <nav class="breadcrumbs">
              {/* <ol>
                <li><a href="#index.html">Home</a></li>
                <li class="current">Contact</li>
              </ol> */}
            </nav>
          </div>
        </div>
        <ServicesSection />      
    </>
  )
}

export default Services
