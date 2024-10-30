import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'

function Logo({width = '10px'}) {
  return (
    // <div class="logo-holder logo-4">
    <div className="logo-holder logo-5">
        <Link to="/">
          <h3 className=''>Postly</h3>
        </Link>
    </div>
  )
}

export default Logo