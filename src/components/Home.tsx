import React from 'react'
import {NavLink} from "react-router-dom";
import About from './About';
import Head from './Head';
import './styles.css';

const Home = () => {
  return (
    <div className='App-Content'>
        <Head />
        <About />
        <hr />
        <div className='title'>Interest</div>
        <div className='nav-holder'>
            <nav className='nav-tools'>
                <NavLink className='nav-tool' to="/photoshop" >cycling</NavLink>
                <div className='line'>|</div>
                <NavLink className='nav-tool' to="/illustrator">reading</NavLink>
                <div className='line'>|</div>
                <NavLink className='nav-tool' to="/blender">gaming</NavLink>
            </nav>
            <nav className='nav-tools'>
                <NavLink className='nav-tool' to="/video" >tribal-art</NavLink>
                <div className='line'>|</div>
                <NavLink className='nav-tool' to="/artwork">tech-ethusiast</NavLink>
                <div className='line'>|</div>
                {/* <NavLink className='nav-tool' to="/photography">photography</NavLink> */}
            </nav>
        </div>
        {/* <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/design" >design research</NavLink>
        </nav> */}
        <hr />
        <nav className='nav-tools nav-work'>
            <NavLink className='nav-tool' to="/work" >work</NavLink>
        </nav>
    </div>
  )
}

export default Home
