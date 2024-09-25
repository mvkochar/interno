import React from 'react'
import './css/Services.css'
import Counter from '../components/Counter/Counter'
import Clients from '../components/Clients/Clients'

const Services = () => {
    return (
        <>
            <main className='services-main'>
                <div className="services-main-content">
                    <h1 className="services-main-title">Services</h1>
                    <p className="services-main-desc">Home / Services</p>
                </div>
            </main>
            <section className='services-details d-f jc-sb'>
                <h3 className="services-details-title">We set the trends of modern living Services.</h3>
                <div>
                    <h4 className="services-details-subtitle">
                        It is a long established fact that a reader will be
                        distracted by the of readable content of a page
                    </h4>
                    <p className="services-details-desc">
                        When lookings at its layouts the points spriof using that it has a more
                        less normal.A wonderful serenity has taken pgossession of my entire soul,
                        like thesce sweet morndsings of sphring which I enjoy with my forwhole heart.
                        I am alone, and feel the charm of excgistence in this spot, which was created
                        for the bliss of souls like mine.
                    </p>
                    <p className="services-details-desc details-desc-second">
                        When lookings at its layouts the points spriof using that it has a more
                        less normal.A wonderful serenity has taken pgossession of my entire soul,
                        like thesce sweet morndsings of sphring which I enjoy with my forwhole heart.
                        I am alone, and feel the charm of excgistence in this spot, which was created
                        for the bliss of souls like mine.
                    </p>
                </div>
            </section>
            <Clients />
            <div className="services-video"><img src="/images/video.png" alt="video" /></div>
            <section className='services-points d-f align-center'>
                <div>
                    <h3 className="services-points-title">Use of Interior</h3>
                    <ol className="services-points-list">
                        <li>We provide high quality design services.</li>
                        <li>Project on time and Latest Design.</li>
                        <li>Scientific Skills For getting a better result.</li>
                        <li>Renovations Benefit of Service</li>
                        <li>We are confident about our projects.</li>
                    </ol>
                </div>
                <div className="divider"></div>
                <div>
                    <h3 className="services-points-title">Make An Art</h3>
                    <ol className="services-points-list">
                        <li>We provide high quality design services.</li>
                        <li>Project on time and Latest Design.</li>
                        <li>Scientific Skills For getting a better result.</li>
                        <li>Renovations Benefit of Service</li>
                        <li>We are confident about our projects.</li>
                    </ol>
                </div>
            </section>
            <section className='services-result d-f jc-sb'>
                <div><img src="/images/services-result.png" alt="services-result" /></div>
                <div>
                    <h3 className="services-result-title">We love design. That's how we got here.</h3>
                    <p className="services-result-desc">
                        It is a long established fact that a reader will be distracted by the of readable content.
                    </p>
                    <div className="services-result-action d-f align-center">
                        <div className="action-name">Our Portfolio</div>
                        <a href="" className="d-b"><img src="/images/start-arrow.png" alt="start-arrow" /></a>
                    </div>
                </div>
            </section>
            <Counter/>
        </>
    )
}

export default Services