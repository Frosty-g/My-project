import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/sections/Stat.jsx';
import Auth from './components/Auth.jsx';
import Aboutus from './components/sections/Whyus.jsx';
import React, { useState } from 'react';
import './App.css';
import Features from './components/sections/Features.jsx';
import BestServices from './components/sections/Destinations.jsx';
import Packages from './components/sections/Packages.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Newsletter from './components/sections/FAQ.jsx';

function App() {

  const [showAuth, setShowAuth] = useState(false);
  return (
    <>
    <div>
      <Header />
      <Hero onGetStarted={() => setShowAuth(true)} />
      <Aboutus />
      <Features />
      <BestServices />
      <Packages />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
    {showAuth && <Auth closeAuth={() => setShowAuth(false)} />}
    </>
  );
}

export default App;