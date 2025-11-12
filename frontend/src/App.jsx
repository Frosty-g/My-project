import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/sections/Stat.jsx';
import Auth from './components/Auth.jsx';
import Aboutus from './components/sections/Whyus.jsx';
import React, { useState } from 'react';
import './App.css';
import Features from './components/sections/Features.jsx';

function App() {

  const [showAuth, setShowAuth] = useState(false);
  return (
    <>
    <div>
      <Header />
      <Hero onGetStarted={() => setShowAuth(true)} />
      <Aboutus />
      <Features />
      <Footer />
    </div>
    {showAuth && <Auth closeAuth={() => setShowAuth(false)} />}
    </>
  );
}

export default App;