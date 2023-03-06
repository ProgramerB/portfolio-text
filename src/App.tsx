import React, { useRef } from 'react';
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './components/Home';
import Photoshop from './components/Photoshop';
import Illustrator from './components/Illustrator';
import Blender from './components/Blender';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  const colors = [
    "#068d57",
    '#a40e17',
    '#9b320f',
    '#816302',
    '#677d0d',
    '#350da3'
  ]
  function randomColor(){
    return Math.floor(Math.random()*(colors.length - 1))
  }

  const [bodyColor, setBodyColor] = useState(colors[randomColor()])
  const prevBodyColor = useRef(bodyColor)
  const listenScrollEvent = (event:Event) => {
    if (window.scrollY > 100) {
      setBodyColor('#0c0d0d')
    } else {
      setBodyColor(prevBodyColor.current)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className='App' style={{backgroundColor:bodyColor}}>
      <div className='head'>
          Mridul Nadar
      </div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/photoshop' element={<Photoshop />} />
            <Route path='/illustrator' element={<Illustrator />} />
            <Route path="/blender" element={<Blender />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
