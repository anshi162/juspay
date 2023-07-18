import React from 'react'
import './Navbarstyles.css'
import { Link } from 'react-router-dom';
import scratchimg from '../images/scratchimg.png';;

const Navbar = () => {
  return (
    <div className="header-bg">
      <Link to="/">
        <img src={scratchimg} alt='scratch' height={50} width={100}/>
      </Link>
    </div>
  )
}

export default Navbar
