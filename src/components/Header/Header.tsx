import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div><Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
        <div className="d-f align-center">
            <nav>
                <ul className="header-nav d-f">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <button className='btn-clear d-b'><img src="/images/search.png" alt="search" /></button>
        </div>    
    </header>
  )
}

export default Header