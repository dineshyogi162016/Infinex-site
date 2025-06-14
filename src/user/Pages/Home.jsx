import React from 'react'

import HeroSection from '../Component/HeroSection'
import AboutSection from '../Component/AboutSection'
import FeatureSection from "../Component/FeatureSection";
import CallToAction from "../Component/CallToAction";
import ServicesSection from '../Component/ServicesSection'
import FaqSection from '../Component/FaqSection';
import ContactSection from '../Component/ContactSection';

const Home = () => {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CallToAction />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}

export default Home
