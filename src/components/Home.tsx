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
                <NavLink className='nav-tool' to="/cycling" >cycling</NavLink>
                <div className='line'>|</div>
                <NavLink className='nav-tool' to="/reading">reading</NavLink>
                <div className='line'>|</div>
                <NavLink className='nav-tool' to="/gaming">gaming</NavLink>
            </nav>
            <nav className='nav-tools'>
                <NavLink className='nav-tool' to="/tribal-art" >tribal-art</NavLink>
                <div className='line'>|</div>
                <NavLink className='nav-tool' to="/tech">tech-ethusiast</NavLink>
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
