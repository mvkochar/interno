import React from 'react'
import './css/Pricing.css'

const Pricing = () => {
    return (
        <>
            <main className='pricing-main'>
                <div className="pricing-main-content">
                    <h1 className="pricing-main-title">Pricing & Plan</h1>
                    <p className="pricing-main-desc">Home / Pricing</p>
                </div>
            </main>
            <div className="pricing-box d-f jc-sb">
                <div className="pricing-plan">
                    <h4 className="pricing-plan-title">Design advices</h4>
                    <div className="pricing-plan-price">$<span>29</span> /month</div>
                    <div className="pricing-plan-divider"></div>
                    <ul className='pricing-plan-offer'>
                        <li>General living space advices</li>
                        <li>Rennovation advices</li>
                        <li>Interior design advices</li>
                        <li>Furniture reorganization</li>
                        <li>Up to 5 hours meetings</li>
                    </ul>
                    <div className="pricing-plan-action d-f align-center">
                        <div className="action-name">Get Started</div>
                        <a href="" className="d-b"><img src="/images/start-arrow2.png" alt="start-arrow2" /></a>
                    </div>
                </div>
                <div className="pricing-plan">
                    <h4 className="pricing-plan-title">Complete interior</h4>
                    <div className="pricing-plan-price">$<span>39</span> /month</div>
                    <div className="pricing-plan-divider"></div>
                    <div className="pricng-plan-popular">Most Popular Plans</div>
                    <ul className='pricing-plan-offer'>
                        <li>Complete home redesign</li>
                        <li>Interior and exterior works</li>
                        <li>Modular interior planning</li>
                        <li>Kitchen design</li>
                        <li>Garages organization</li>
                    </ul>
                    <div className="pricing-plan-action d-f align-center">
                        <div className="action-name">Get Started</div>
                        <a href="" className="d-b"><img src="/images/start-arrow.png" alt="start-arrow" /></a>
                    </div>
                </div>
                <div className="pricing-plan">
                    <h4 className="pricing-plan-title">Furniture design</h4>
                    <div className="pricing-plan-price">$<span>59</span> /month</div>
                    <div className="pricing-plan-divider"></div>
                    <ul className='pricing-plan-offer'>
                        <li>Furniture for living room</li>
                        <li>Furniture refurbishment</li>
                        <li>Sofas and amchairs</li>
                        <li>Tables and chairs</li>
                        <li>Kitchens</li>
                    </ul> 
                    <div className="pricing-plan-action d-f align-center">
                        <div className="action-name">Get Started</div>
                        <a href="" className="d-b"><img src="/images/start-arrow2.png" alt="start-arrow2" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing