import React, { useRef } from 'react';
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './components/Home';
import Cycling from './components/Cycling';
import Reading from './components/Reading';
import Gaming from './components/Gaming';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import TribalArt from './components/TribalArt';
import Photography from './components/Photography';
import Tech from './components/Tech';
import Designre from './components/Designre';
import Work from './components/Work';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const colors = [
    "#01ac68",
    '#ef7750',
    '#43f2b4',
    '#f74853',
    '#c8f648',
    '#6b46e9',
    '#f6d157'
  ]
  function randomColor(){
    return Math.floor(Math.random()*(colors.length))
  }

  const [bodyColor, setBodyColor] = useState(colors[randomColor()])
  const prevBodyColor = useRef(bodyColor)
  const listenScrollEvent = (event:Event) => {
    if (window.scrollY > 100) {
      setBodyColor('#0c0d0d')
      document.documentElement.style.setProperty('--textColor',"#dfddd9")
      document.documentElement.style.setProperty('--imgInvert',"0.9")
    } else {
      setBodyColor(prevBodyColor.current)
      document.documentElement.style.setProperty('--textColor',"#000000")
      document.documentElement.style.setProperty('--imgInvert',"0")

    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className='App' style={{backgroundColor:bodyColor}}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cycling' element={<Cycling />} />
            <Route path='/reading' element={<Reading />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/tribal-art" element={<TribalArt />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/design" element={<Designre />} />
            <Route path="/work" element={<Work/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
