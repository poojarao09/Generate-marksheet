import React from 'react'
import './ext.css'
import {Link} from 'react-router-dom'
function header() {
  return (
    <div>
    <div className='main-div'>
     
      <li><a href='#'>Lorem ipsum dolor sit amet</a></li>
      <li><a href='#'>Call:+91 1234567890</a></li>
      <li><a href='#'>mail@domain.com</a></li>
     
    </div>
    <div className='Head'>
        <h3>Guarder</h3>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to ='/about'>ABOUT</Link></li>
          <li><Link to='/services'>SERVICES</Link></li>
          <li><Link to ='/client'>CLIENT</Link></li>
          <li><Link to="'/guards'">GUARDS</Link></li>
          <li><Link to='/contactus'>CONTACT US</Link></li>
    
        </ul>
      </div>
    </div>
  )
}

export default header