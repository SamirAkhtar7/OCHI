import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landingpage'
import Marquee from './components/marquee'
import About from './components/about'
import Eye from './components/eye'
import Featured from './components/featured'
import Cards from './components/cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App