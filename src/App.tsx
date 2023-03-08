import React, { useRef } from 'react';
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './components/Home';
import Photoshop from './components/Photoshop';
import Illustrator from './components/Illustrator';
import Blender from './components/Blender';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import VideoEdits from './components/VideoEdits';
import Photography from './components/Photography';
import Artwork from './components/Artwork';
import Designre from './components/Designre';
import Work from './components/Work';
import ScrollToTop from './components/ScrollToTop';

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
    return Math.floor(Math.random()*(colors.length))
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
          <div className='prefix-left'>
            student
          </div>
          <div className='prefix prefix-right'>
            atlas skilltech university, isdi
          </div>
          <div className='prefix prefix-bottom'>
            2022-2026
          </div>
          <hr style={{margin:"30px 5% 30px 0px"}}/>
          <div>
            Mridul Nadar
          </div>
      </div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/photoshop' element={<Photoshop />} />
            <Route path='/illustrator' element={<Illustrator />} />
            <Route path="/blender" element={<Blender />} />
            <Route path="/video" element={<VideoEdits />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/design" element={<Designre />} />
            <Route path="/work" element={<Work/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
