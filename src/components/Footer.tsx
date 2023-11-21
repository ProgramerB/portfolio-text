import React from 'react'
import './styles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <a className='links' href='https://www.linkedin.com/in/bhavish-nadar-096689207/' target='_blank' rel="noopener noreferrer">Linkedin</a>
      {/* <a className='links' href='https://www.behance.net/mridulnadar' target='_blank' rel="noopener noreferrer">Behance</a> */}
      <a className='links' href='https://github.com/ProgramerB' target='_blank' rel="noopener noreferrer">Github</a>

      {/* <div className='email'>
      <a href="mailto:nadar.bhavish@gmail.com">nadar.bhavish@gmail.com</a> 
      </div> */}
      <a className='email' href="mailto:nadar.bhavish@gmail.com">nadar.bhavish@gmail.com</a> 
    </div>
  )
}

export default Footer
