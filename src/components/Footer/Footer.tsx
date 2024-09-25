import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-bar d-f jc-sb">
        <div>
          <div><img src="/images/logo.svg" alt="Logo" /></div>
          <p className="footer-desc">
            It is a long established fact that a reader will be distracted lookings.
          </p>
          <div className="footer-social d-f">
            <div><img src="/images/footer-social1.png" alt="footer-social1" /></div>
            <div><img src="/images/footer-social2.png" alt="footer-social2" /></div>
            <div><img src="/images/footer-social3.png" alt="footer-social3" /></div>
            <div><img src="/images/footer-social4.png" alt="footer-social4" /></div>
          </div>
        </div>
        <div>
          <h4 className="footer-bl-title">Pages</h4>
          <ul className="footer-bl-list">
            <li><Link to="/about">About Us</Link></li>
            <li><a href="">Our Projects</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Contact Us</a></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-bl-title">Services</h4>
          <ul className="footer-bl-list">
            <li><a href="">Kitchen</a></li>
            <li><a href="">Living Area</a></li>
            <li><a href="">Bathroom</a></li>
            <li><a href="">Dinning Hall</a></li>
            <li><a href="">Bedroom</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-bl-title">Contact</h4>
          <p className="footer-address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p className="footer-email">contact@interno.com</p>
          <div className="footer-phone">(123) 456 - 7890</div>
        </div>
      </div>
      <div className="footer-copyrights">Copyright &copy; Interno | Designed by Victorflow Templates - Powered by Webflow</div>
    </footer>
  )
}

export default Footer