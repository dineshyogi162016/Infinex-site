import React from 'react'
import AboutSection from '../Component/AboutSection'

const About = () => {
  return (
    <>
      <div class="page-title dark-background">
        <div class="container position-relative">
          <h1>About</h1>
          <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
          {/* <nav class="breadcrumbs">
            <ol>
              <li><Link to={"#index.html"}>Home</Link></li>
              <li class="current">Blog</li>
            </ol>
          </nav> */}
        </div>
      </div>
      <AboutSection />
    </>
  )
}

export default About
