import React from 'react'
import './css/Home.css'
import ProjectsItem from '../components/ProjectsItem/ProjectsItem'
import BlogItem from '../components/BlogItem/BlogItem'
import PostsList from '../components/PostsList/PostsList'
import Counter from '../components/Counter/Counter'
import Clients from '../components/Clients/Clients'

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
      <section className='home-testimonial'>
        <h3 className="home-testimonial-title">What the People Thinks About Us</h3>
        <div className="home-testimonial-box d-f jc-sb">
          <div className="home-testimonial-item">
            <div className="home-testimonial-author d-f">
              <div><img src="/images/testimonial-author1.png" alt="testimonial-author1" /></div>
              <div>
                <h4 className="author-name">Natasha Mith</h4>
                <h5 className="author-location">Dallas, USA</h5>
              </div>
            </div>
            <p className="testimonial-item-desc">
              Lorem Ipsum is simply dummy
              text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
          <div className="home-testimonial-item">
            <div className="home-testimonial-author d-f">
              <div><img src="/images/testimonial-author2.png" alt="testimonial-author2" /></div>
              <div>
                <h4 className="author-name">Aurica Galario</h4>
                <h5 className="author-location">Sydney, Australia</h5>
              </div>
            </div>
            <p className="testimonial-item-desc">
              Lorem Ipsum is simply dummy
              text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
          <div className="home-testimonial-item">
            <div className="home-testimonial-author d-f">
              <div><img src="/images/testimonial-author3.png" alt="testimonial-author3" /></div>
              <div>
                <h4 className="author-name">Benny Roll</h4>
                <h5 className="author-location">New York, USA</h5>
              </div>
            </div>
            <p className="testimonial-item-desc">
              Lorem Ipsum is simply dummy
              text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
        </div>
      </section>
      <Clients/>
      <section className='home-projects'>
        <h3 className="home-projects-title">Follow Our Projects</h3>
        <p className="home-projects-desc">
          It is a long established fact that a reader will be distracted by the of readable
          content of page lookings at its layouts  points.
        </p>
        <div className="home-projects-box d-f jc-sb">
          <ProjectsItem
            id={0}
            image='/images/projects/1.png'
            title='Modern Kitchan'
            category='Decor / Artchitecture'
          />
          <ProjectsItem
            id={1}
            image='/images/projects/2.png'
            title='Modern Kitchan'
            category='Decor / Artchitecture'
          />
          <ProjectsItem
            id={2}
            image='/images/projects/3.png'
            title='Modern Kitchan'
            category='Decor / Artchitecture'
          />
          <ProjectsItem
            id={3}
            image='/images/projects/4.png'
            title='Modern Kitchan'
            category='Decor / Artchitecture'
          />
        </div>
      </section>
      <Counter/>
      <section className='home-blog'>
        <h3 className="home-blog-title">Articles & News</h3>
        <p className="home-blog-desc">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points of using.
        </p>
        <div className="home-blog-box d-f">
          {
            PostsList.filter((elem) => elem.id < 3).map((post) => {
              return (
                <BlogItem
                  id={post.id}
                  image={post.image}
                  category={post.category}
                  title={post.title}
                  date={post.date}
                />
              )
            })
          }
        </div>
      </section>
      <section className='home-contact'>
        <h3 className="home-contact-title">Wanna join the interno?</h3>
        <p className="home-contact-desc">It is a long established fact  will be distracted.</p>
        <div className="home-contact-action d-f align-center">
          <div className="action-name">Contact With Us</div>
          <a href="" className="d-b">
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="#292F36" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home