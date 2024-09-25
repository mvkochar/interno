import React from 'react'

const Counter = () => {
    return (
        <div className="home-counter d-f jc-sb align-center">
            <div className="home-counter-item">
                <h4 className="counter-item-num">12</h4>
                <p className="counter-item-desc">Years Of Experience</p>
            </div>
            <div><img src="/images/divider.png" alt="divider" /></div>
            <div className="home-counter-item">
                <h4 className="counter-item-num">85</h4>
                <p className="counter-item-desc">Success Projects</p>
            </div>
            <div><img src="/images/divider.png" alt="divider" /></div>
            <div className="home-counter-item">
                <h4 className="counter-item-num">15</h4>
                <p className="counter-item-desc">Active Projects</p>
            </div>
            <div><img src="/images/divider.png" alt="divider" /></div>
            <div className="home-counter-item">
                <h4 className="counter-item-num">95</h4>
                <p className="counter-item-desc">Happy Customers</p>
            </div>
        </div>
    )
}

export default Counter