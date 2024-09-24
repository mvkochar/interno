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
                    <li><a href="">Services</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <button className='btn-clear d-b'><img src="/images/search.png" alt="search" /></button>
        </div>    
    </header>
  )
}

export default Header