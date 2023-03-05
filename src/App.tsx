import React from 'react';
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './components/Home';
import Photoshop from './components/Photoshop';
import Illustrator from './components/Illustrator';
import Blender from './components/Blender';
import { useState, useEffect } from 'react';

function App() {

  const [bodyColor, setBodyColor] = useState("#068d57")
  const listenScrollEvent = (event:Event) => {
    if (window.scrollY > 100) {
      setBodyColor('#0c0d0d')
    } else {
      setBodyColor('#068d57')
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
    </div>
  );
}

export default App;
