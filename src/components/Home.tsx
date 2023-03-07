import React from 'react'
import {NavLink} from "react-router-dom";
import About from './About';
import './styles.css';

const Home = () => {
  return (
    <div className='App-Content'>
        <About />
        <div className='title'>Tools</div>
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/photoshop" >photoshop</NavLink>
            <div className='line'>|</div>
            <NavLink className='nav-tool' to="/illustrator">illustrator</NavLink>
            <div className='line'>|</div>
            <NavLink className='nav-tool' to="/blender">blender</NavLink>
        </nav>
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/video" >video edits</NavLink>
            <div className='line'>|</div>
            <NavLink className='nav-tool' to="/artwork">artwork</NavLink>
            <div className='line'>|</div>
            <NavLink className='nav-tool' to="/photography">photography</NavLink>
        </nav>
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/design" >design research</NavLink>
        </nav>
        <br/>
        <br/>
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/work" >work</NavLink>
        </nav>
    </div>
  )
}

export default Home
