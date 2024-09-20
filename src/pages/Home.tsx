import React from 'react'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <h1 className="home-main-title">Let Your Home Be Unique</h1>
        <p className="home-main-desc">
          There are many variations of the passages of
          lorem Ipsum fromavailable, majority.
        </p>
        <p className="home-main-desc">
          There are many variations of the passages of
          lorem Ipsum fromavailable, majority.
        </p>
        <div className="home-main-action d-f align-center">
          <div className="action-name">Get Started</div>
          <a href="" className='d-b'><img src="/images/start-arrow.png" alt="start-arrow" /></a>
        </div>
      </main>
      <section className='home-work d-f jc-sb'>
        <div className="home-work-item">
          <h4 className="work-item-title">Project Plan</h4>
          <p className="work-item-desc">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="work-item-action d-f align-center">
            <div className="action-name">Read More</div>
            <a href="" className='d-b'><img src="/images/start-arrow.png" alt="start-arrow" /></a>
          </div>
        </div>
        <div className="home-work-item">
          <h4 className="work-item-title">Interior Work</h4>
          <p className="work-item-desc">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="work-item-action d-f align-center">
            <div className="action-name">Read More</div>
            <a href="" className='d-b'><img src="/images/start-arrow.png" alt="start-arrow" /></a>
          </div>
        </div>
        <div className="home-work-item">
          <h4 className="work-item-title">Realization</h4>
          <p className="work-item-desc">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="work-item-action d-f align-center">
            <div className="action-name">Read More</div>
            <a href="" className='d-b'><img src="/images/start-arrow.png" alt="start-arrow" /></a>
          </div>
        </div>
      </section>
      <section className='home-about d-f align-center'>
        <div>
          <h3 className="home-about-tiltle">We Create The Art Of Stylish Living Stylishly</h3>
          <p className="home-about-desc">
            It is a long established fact that a reader will be distracted by the
            of readable content of a page when lookings at its layouts the points of using
            that it has a more-or-less normal.
          </p>
          <div className="home-about-call d-f align-center">
            <div><img src="/images/call.png" alt="call" /></div>
            <div className='call-contact'>
              <span>012345678</span>
              Call Us Anytime
            </div>

          </div>
          <div className="home-about-action d-f align-center">
            <div className="action-name">Get Free Estimate</div>
            <a href="" className="d-b"><img src="/images/start-arrow.png" alt="star-arrow" /></a>
          </div>
        </div>
        <div><img src="/images/home-about.png" alt="home-about" /></div>
      </section>
    </>
  )
}

export default Home