import React from 'react'
import {NavLink} from "react-router-dom";
import About from './About';
import './styles.css';

const Home = () => {
  return (
    <div className='App-Content'>
        <About />
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/photoshop" >photoshop</NavLink>
            |
            <NavLink className='nav-tool' to="/illustrator">illustrator</NavLink>
            |
            <NavLink className='nav-tool' to="/blender">blender</NavLink>
        </nav>
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/photoshop" >video edits</NavLink>
            |
            <NavLink className='nav-tool' to="/illustrator">artwork</NavLink>
            |
            <NavLink className='nav-tool' to="/blender">photography</NavLink>
        </nav>
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/photoshop" >design research</NavLink>
        </nav>
        <nav className='nav-tools'>
            <NavLink className='nav-tool' to="/photoshop" >work</NavLink>
        </nav>
    </div>
  )
}

export default Home
