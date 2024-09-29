import React from 'react'
import './css/License.css'

const License = () => {
    return (
        <>
            <main className='license-main'>
                <div className="license-main-content">
                    <h1 className="license-main-title">Licenses</h1>
                    <p className="license-main-desc">Home / Licenses</p>
                </div>
            </main>
            <section className='license-photography'>
                <h2 className="license-photography-title">Photography</h2>
                <p className="license-bl-desc">
                    All images used in the <span style={{ color: "#CDA274" }}>Interno</span> Webflow Ecommerce Template are licensed
                    for free personal and commercial use. If you'd like to use any specific image,
                    you can check the licenses and download the images for free on <span>Unsplash, Pexels</span>.
                </p>
            </section>
            <section className='license-bl'>
                <h3 className="license-bl-title">Unsplash</h3>
                <p className="license-bl-desc">
                    Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8,
                    Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.
                </p>
                <div className="license-bl-images d-f jc-sb">
                    <div><img src="/images/unplash1.png" alt="unplash1" /></div>
                    <div><img src="/images/unplash2.png" alt="unplash2" /></div>
                    <div><img src="/images/unplash3.png" alt="unplash3" /></div>
                </div>
            </section>
            <section className='license-bl'>
                <h3 className="license-bl-title">Pexels</h3>
                <p className="license-bl-desc">
                    Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                    Image 8, Image 9, Image 10, Image 11, Image 12.
                </p>
                <div className="license-bl-images d-f jc-sb">
                    <div><img src="/images/pexels1.png" alt="pexels1" /></div>
                    <div><img src="/images/pexels2.png" alt="pexels2" /></div>
                    <div><img src="/images/pexels3.png" alt="pexels3" /></div>
                </div>
            </section>
            <section className='license-bl license-bl-last'>
                <h3 className="license-bl-title">Font</h3>
                <div className="license-fonts d-f align-center">
                    <p className="license-bl-desc">
                        Interno template uses free licensed Google Fonts.
                        Please check <span style={{ color: "#CDA274" }}>DM Serif Display</span> and <span>Jost</span>.
                    </p>
                    <div className="license-fonts-examples d-f">
                        <div>Aa</div>
                        <div>Aa</div>
                    </div>
                </div>
                <h3 className="license-bl-title">Icon</h3>
                <p className="license-bl-desc">Icon 1, Icon 2, Icon 3</p>
            </section>
        </>
    )
}

export default License