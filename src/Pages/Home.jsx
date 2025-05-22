import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import HeroSection from '../Component/HeroSection'
import AboutSection from '../Component/AboutSection'
import FeatureSection from "../Component/FeatureSection";
import CallToAction from "../Component/CallToAction";
import ServicesSection from '../Component/ServicesSection'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // optional config
  }, []);
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CallToAction />
      <ServicesSection />
    </main>
  )
}

export default Home
