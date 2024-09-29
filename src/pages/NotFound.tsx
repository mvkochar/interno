import React from 'react'
import './css/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
       <main className='nf-main d-f jc-sb align-center'>
            <div>
                <h1 className="nf-main-title">404</h1>
                <h4 className="nf-main-subtitle">We are sorry, but the page you requested was not found</h4>
                <div className="nf-main-action d-f align-center">
                    <div className="action-name">Back To Home</div>
                    <Link to='/'><img src="images/start-arrow.png" alt="start-arrow" /></Link>
                </div>
            </div>
            <div><img src="/images/not-found.png" alt="not-found" /></div>
        </main> 
    </>
  )
}

export default NotFound