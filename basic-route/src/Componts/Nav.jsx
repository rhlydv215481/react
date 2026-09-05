import React from 'react'
import "./Nav.scss"
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='NAVBAR'>
        <h1>LOgo</h1>
     <div className="links">

    <Link to="/ ">HOme</Link>
    <Link to ="/About">About</Link>
    <Link to = "/Produts">produtes</Link>
     </div>
    </div>
  )
}

export default Nav