import React from 'react'
import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main'>
                <div className="about-main-content">
                    <h1 className="about-main-title">About Us</h1>
                    <p className="about-main-desc">Home / About Us</p>
                </div>
            </main>
            <section className='about-quotes'>
                <div><img src="/images/quote.png" alt="quote" /></div>
                <p className="about-quotes-desc">
                    I like an interior that defies labeling. I don't really want someone
                    to walk into a room and know that I did it.
                </p>
                <p className="about-quotes-author">-Bunny Williams</p>
            </section>
            <section className='about-info d-f'>
                <div>
                    <h3 className="about-info-title">What We Do</h3>
                    <p className="about-info-desc">
                        It is a long established fact that a reader will be distracted by
                        the of readable content of a page when lookings at its layouts the points of using
                        that it has a more-or-less normal.
                    </p>
                    <div className="about-info-action d-f align-center">
                        <div className="action-name">Our Concept</div>
                        <a href="" className="d-b"><img src="/images/start-arrow.png" alt="start-arrow" /></a>
                    </div>
                </div>
                <div><img src="/images/about-info1.png" alt="about-info1" /></div>
            </section>
            <section className='about-info d-f'>
                <div><img src="/images/about-info2.png" alt="about-info2" /></div>
                <div>
                    <h3 className="about-info-title">The End Result</h3>
                    <p className="about-info-desc">
                        It is a long established fact that a reader will be distracted by
                        the of readable content of a page when lookings at its layouts the points of using
                        that it has a more-or-less normal.
                    </p>
                    <div className="about-info-action d-f align-center">
                        <div className="action-name">Our Portfolio</div>
                        <a href="" className="d-b"><img src="/images/start-arrow.png" alt="start-arrow" /></a>
                    </div>
                </div>
            </section>
            <section className='about-team'>
                <h3 className="about-team-title">What the People Thinks About Us</h3>
                <div className="about-team-box d-f jc-sb">
                    <div className="about-team-item">
                        <div className="team-item-content">
                            <h4 className="team-item-name">Charlotte Levi</h4>
                            <p className="team-item-desc">Design, Australia</p>
                            <div className="team-item-social d-f align-center">
                                <div>
                                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.98055 10.3755H7.34384V18.2505H3.82821V10.3755H0.945398V7.14111H3.82821V4.64502C3.82821 1.83252 5.51571 0.250488 8.08212 0.250488C9.31259 0.250488 10.6134 0.496582 10.6134 0.496582V3.27393H9.17196C7.76571 3.27393 7.34384 4.11768 7.34384 5.03174V7.14111H10.4727L9.98055 10.3755Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6559 4.59424C17.359 4.06689 17.9918 3.43408 18.484 2.6958C17.8512 2.97705 17.1129 3.18799 16.3746 3.2583C17.1481 2.80127 17.7106 2.09814 17.9918 1.21924C17.2887 1.64111 16.4801 1.95752 15.6715 2.1333C14.9684 1.39502 14.0192 0.973145 12.9645 0.973145C10.9254 0.973145 9.27308 2.62549 9.27308 4.66455C9.27308 4.9458 9.30824 5.22705 9.37855 5.5083C6.31995 5.33252 3.57777 3.85596 1.74964 1.64111C1.43324 2.16846 1.25745 2.80127 1.25745 3.50439C1.25745 4.77002 1.89027 5.89502 2.9098 6.56299C2.31214 6.52783 1.71449 6.38721 1.2223 6.10596V6.14111C1.2223 7.93408 2.48792 9.41064 4.17542 9.76221C3.89417 9.83252 3.54261 9.90283 3.2262 9.90283C2.98011 9.90283 2.76917 9.86768 2.52308 9.83252C2.98011 11.3091 4.3512 12.3638 5.96839 12.3989C4.70277 13.3833 3.12074 13.981 1.39808 13.981C1.08167 13.981 0.800423 13.9458 0.519173 13.9106C2.13636 14.9653 4.06995 15.563 6.17933 15.563C12.9645 15.563 16.6559 9.97314 16.6559 5.08643C16.6559 4.91064 16.6559 4.77002 16.6559 4.59424Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.90702 16.0005V5.48877H0.637485V16.0005H3.90702ZM2.25467 4.08252C3.30936 4.08252 4.15311 3.20361 4.15311 2.14893C4.15311 1.12939 3.30936 0.285645 2.25467 0.285645C1.23514 0.285645 0.391391 1.12939 0.391391 2.14893C0.391391 3.20361 1.23514 4.08252 2.25467 4.08252ZM16.1062 16.0005H16.1414V10.2349C16.1414 7.42236 15.5086 5.24268 12.2039 5.24268C10.6219 5.24268 9.56717 6.12158 9.11014 6.93018H9.07498V5.48877H5.94608V16.0005H9.21561V10.7974C9.21561 9.42627 9.4617 8.12549 11.1492 8.12549C12.8367 8.12549 12.8719 9.67236 12.8719 10.9028V16.0005H16.1062Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.65987 4.60791C6.28487 4.60791 4.39229 6.5376 4.39229 8.87549C4.39229 11.2505 6.28487 13.1431 8.65987 13.1431C10.9978 13.1431 12.9274 11.2505 12.9274 8.87549C12.9274 6.5376 10.9978 4.60791 8.65987 4.60791ZM8.65987 11.6587C7.13839 11.6587 5.87667 10.4341 5.87667 8.87549C5.87667 7.354 7.10128 6.12939 8.65987 6.12939C10.1814 6.12939 11.406 7.354 11.406 8.87549C11.406 10.4341 10.1814 11.6587 8.65987 11.6587ZM14.0778 4.45947C14.0778 3.90283 13.6325 3.45752 13.0759 3.45752C12.5192 3.45752 12.0739 3.90283 12.0739 4.45947C12.0739 5.01611 12.5192 5.46143 13.0759 5.46143C13.6325 5.46143 14.0778 5.01611 14.0778 4.45947ZM16.8982 5.46143C16.8239 4.12549 16.5271 2.93799 15.5622 1.97314C14.5974 1.0083 13.4099 0.711426 12.0739 0.637207C10.7009 0.562988 6.58175 0.562988 5.2087 0.637207C3.87276 0.711426 2.72237 1.0083 1.72042 1.97314C0.755574 2.93799 0.458699 4.12549 0.38448 5.46143C0.310262 6.83447 0.310262 10.9536 0.38448 12.3267C0.458699 13.6626 0.755574 14.813 1.72042 15.8149C2.72237 16.7798 3.87276 17.0767 5.2087 17.1509C6.58175 17.2251 10.7009 17.2251 12.0739 17.1509C13.4099 17.0767 14.5974 16.7798 15.5622 15.8149C16.5271 14.813 16.8239 13.6626 16.8982 12.3267C16.9724 10.9536 16.9724 6.83447 16.8982 5.46143ZM15.1169 13.7739C14.8571 14.5161 14.2634 15.0728 13.5583 15.3696C12.445 15.8149 9.84737 15.7036 8.65987 15.7036C7.43526 15.7036 4.83761 15.8149 3.76143 15.3696C3.01925 15.0728 2.46261 14.5161 2.16573 13.7739C1.72042 12.6978 1.83175 10.1001 1.83175 8.87549C1.83175 7.68799 1.72042 5.09033 2.16573 3.97705C2.46261 3.27197 3.01925 2.71533 3.76143 2.41846C4.83761 1.97314 7.43526 2.08447 8.65987 2.08447C9.84737 2.08447 12.445 1.97314 13.5583 2.41846C14.2634 2.67822 14.82 3.27197 15.1169 3.97705C15.5622 5.09033 15.4509 7.68799 15.4509 8.87549C15.4509 10.1001 15.5622 12.6978 15.1169 13.7739Z" fill="#292F36" />
                                    </svg>
                                </div>
                            </div>
                            <p className="team-item-contacts">
                                +1 (378) 400-1234
                                interno@email.com
                            </p>
                        </div>
                    </div>
                    <div className="about-team-item">
                        <div className="team-item-content">
                            <h4 className="team-item-name">Natasha Julie</h4>
                            <p className="team-item-desc">Design, Australia</p>
                            <div className="team-item-social d-f align-center">
                                <div>
                                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.98055 10.3755H7.34384V18.2505H3.82821V10.3755H0.945398V7.14111H3.82821V4.64502C3.82821 1.83252 5.51571 0.250488 8.08212 0.250488C9.31259 0.250488 10.6134 0.496582 10.6134 0.496582V3.27393H9.17196C7.76571 3.27393 7.34384 4.11768 7.34384 5.03174V7.14111H10.4727L9.98055 10.3755Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6559 4.59424C17.359 4.06689 17.9918 3.43408 18.484 2.6958C17.8512 2.97705 17.1129 3.18799 16.3746 3.2583C17.1481 2.80127 17.7106 2.09814 17.9918 1.21924C17.2887 1.64111 16.4801 1.95752 15.6715 2.1333C14.9684 1.39502 14.0192 0.973145 12.9645 0.973145C10.9254 0.973145 9.27308 2.62549 9.27308 4.66455C9.27308 4.9458 9.30824 5.22705 9.37855 5.5083C6.31995 5.33252 3.57777 3.85596 1.74964 1.64111C1.43324 2.16846 1.25745 2.80127 1.25745 3.50439C1.25745 4.77002 1.89027 5.89502 2.9098 6.56299C2.31214 6.52783 1.71449 6.38721 1.2223 6.10596V6.14111C1.2223 7.93408 2.48792 9.41064 4.17542 9.76221C3.89417 9.83252 3.54261 9.90283 3.2262 9.90283C2.98011 9.90283 2.76917 9.86768 2.52308 9.83252C2.98011 11.3091 4.3512 12.3638 5.96839 12.3989C4.70277 13.3833 3.12074 13.981 1.39808 13.981C1.08167 13.981 0.800423 13.9458 0.519173 13.9106C2.13636 14.9653 4.06995 15.563 6.17933 15.563C12.9645 15.563 16.6559 9.97314 16.6559 5.08643C16.6559 4.91064 16.6559 4.77002 16.6559 4.59424Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.90702 16.0005V5.48877H0.637485V16.0005H3.90702ZM2.25467 4.08252C3.30936 4.08252 4.15311 3.20361 4.15311 2.14893C4.15311 1.12939 3.30936 0.285645 2.25467 0.285645C1.23514 0.285645 0.391391 1.12939 0.391391 2.14893C0.391391 3.20361 1.23514 4.08252 2.25467 4.08252ZM16.1062 16.0005H16.1414V10.2349C16.1414 7.42236 15.5086 5.24268 12.2039 5.24268C10.6219 5.24268 9.56717 6.12158 9.11014 6.93018H9.07498V5.48877H5.94608V16.0005H9.21561V10.7974C9.21561 9.42627 9.4617 8.12549 11.1492 8.12549C12.8367 8.12549 12.8719 9.67236 12.8719 10.9028V16.0005H16.1062Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.65987 4.60791C6.28487 4.60791 4.39229 6.5376 4.39229 8.87549C4.39229 11.2505 6.28487 13.1431 8.65987 13.1431C10.9978 13.1431 12.9274 11.2505 12.9274 8.87549C12.9274 6.5376 10.9978 4.60791 8.65987 4.60791ZM8.65987 11.6587C7.13839 11.6587 5.87667 10.4341 5.87667 8.87549C5.87667 7.354 7.10128 6.12939 8.65987 6.12939C10.1814 6.12939 11.406 7.354 11.406 8.87549C11.406 10.4341 10.1814 11.6587 8.65987 11.6587ZM14.0778 4.45947C14.0778 3.90283 13.6325 3.45752 13.0759 3.45752C12.5192 3.45752 12.0739 3.90283 12.0739 4.45947C12.0739 5.01611 12.5192 5.46143 13.0759 5.46143C13.6325 5.46143 14.0778 5.01611 14.0778 4.45947ZM16.8982 5.46143C16.8239 4.12549 16.5271 2.93799 15.5622 1.97314C14.5974 1.0083 13.4099 0.711426 12.0739 0.637207C10.7009 0.562988 6.58175 0.562988 5.2087 0.637207C3.87276 0.711426 2.72237 1.0083 1.72042 1.97314C0.755574 2.93799 0.458699 4.12549 0.38448 5.46143C0.310262 6.83447 0.310262 10.9536 0.38448 12.3267C0.458699 13.6626 0.755574 14.813 1.72042 15.8149C2.72237 16.7798 3.87276 17.0767 5.2087 17.1509C6.58175 17.2251 10.7009 17.2251 12.0739 17.1509C13.4099 17.0767 14.5974 16.7798 15.5622 15.8149C16.5271 14.813 16.8239 13.6626 16.8982 12.3267C16.9724 10.9536 16.9724 6.83447 16.8982 5.46143ZM15.1169 13.7739C14.8571 14.5161 14.2634 15.0728 13.5583 15.3696C12.445 15.8149 9.84737 15.7036 8.65987 15.7036C7.43526 15.7036 4.83761 15.8149 3.76143 15.3696C3.01925 15.0728 2.46261 14.5161 2.16573 13.7739C1.72042 12.6978 1.83175 10.1001 1.83175 8.87549C1.83175 7.68799 1.72042 5.09033 2.16573 3.97705C2.46261 3.27197 3.01925 2.71533 3.76143 2.41846C4.83761 1.97314 7.43526 2.08447 8.65987 2.08447C9.84737 2.08447 12.445 1.97314 13.5583 2.41846C14.2634 2.67822 14.82 3.27197 15.1169 3.97705C15.5622 5.09033 15.4509 7.68799 15.4509 8.87549C15.4509 10.1001 15.5622 12.6978 15.1169 13.7739Z" fill="#292F36" />
                                    </svg>
                                </div>
                            </div>
                            <p className="team-item-contacts">
                                +1 (378) 400-1234
                                interno@email.com
                            </p>
                        </div>
                    </div>
                    <div className="about-team-item">
                        <div className="team-item-content">
                            <div className="team-item-content">
                                <h4 className="team-item-name">John Smith</h4>
                                <p className="team-item-desc">Design, Australia</p>
                                <div className="team-item-social d-f align-center">
                                    <div>
                                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.98055 10.3755H7.34384V18.2505H3.82821V10.3755H0.945398V7.14111H3.82821V4.64502C3.82821 1.83252 5.51571 0.250488 8.08212 0.250488C9.31259 0.250488 10.6134 0.496582 10.6134 0.496582V3.27393H9.17196C7.76571 3.27393 7.34384 4.11768 7.34384 5.03174V7.14111H10.4727L9.98055 10.3755Z" fill="#292F36" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6559 4.59424C17.359 4.06689 17.9918 3.43408 18.484 2.6958C17.8512 2.97705 17.1129 3.18799 16.3746 3.2583C17.1481 2.80127 17.7106 2.09814 17.9918 1.21924C17.2887 1.64111 16.4801 1.95752 15.6715 2.1333C14.9684 1.39502 14.0192 0.973145 12.9645 0.973145C10.9254 0.973145 9.27308 2.62549 9.27308 4.66455C9.27308 4.9458 9.30824 5.22705 9.37855 5.5083C6.31995 5.33252 3.57777 3.85596 1.74964 1.64111C1.43324 2.16846 1.25745 2.80127 1.25745 3.50439C1.25745 4.77002 1.89027 5.89502 2.9098 6.56299C2.31214 6.52783 1.71449 6.38721 1.2223 6.10596V6.14111C1.2223 7.93408 2.48792 9.41064 4.17542 9.76221C3.89417 9.83252 3.54261 9.90283 3.2262 9.90283C2.98011 9.90283 2.76917 9.86768 2.52308 9.83252C2.98011 11.3091 4.3512 12.3638 5.96839 12.3989C4.70277 13.3833 3.12074 13.981 1.39808 13.981C1.08167 13.981 0.800423 13.9458 0.519173 13.9106C2.13636 14.9653 4.06995 15.563 6.17933 15.563C12.9645 15.563 16.6559 9.97314 16.6559 5.08643C16.6559 4.91064 16.6559 4.77002 16.6559 4.59424Z" fill="#292F36" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.90702 16.0005V5.48877H0.637485V16.0005H3.90702ZM2.25467 4.08252C3.30936 4.08252 4.15311 3.20361 4.15311 2.14893C4.15311 1.12939 3.30936 0.285645 2.25467 0.285645C1.23514 0.285645 0.391391 1.12939 0.391391 2.14893C0.391391 3.20361 1.23514 4.08252 2.25467 4.08252ZM16.1062 16.0005H16.1414V10.2349C16.1414 7.42236 15.5086 5.24268 12.2039 5.24268C10.6219 5.24268 9.56717 6.12158 9.11014 6.93018H9.07498V5.48877H5.94608V16.0005H9.21561V10.7974C9.21561 9.42627 9.4617 8.12549 11.1492 8.12549C12.8367 8.12549 12.8719 9.67236 12.8719 10.9028V16.0005H16.1062Z" fill="#292F36" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.65987 4.60791C6.28487 4.60791 4.39229 6.5376 4.39229 8.87549C4.39229 11.2505 6.28487 13.1431 8.65987 13.1431C10.9978 13.1431 12.9274 11.2505 12.9274 8.87549C12.9274 6.5376 10.9978 4.60791 8.65987 4.60791ZM8.65987 11.6587C7.13839 11.6587 5.87667 10.4341 5.87667 8.87549C5.87667 7.354 7.10128 6.12939 8.65987 6.12939C10.1814 6.12939 11.406 7.354 11.406 8.87549C11.406 10.4341 10.1814 11.6587 8.65987 11.6587ZM14.0778 4.45947C14.0778 3.90283 13.6325 3.45752 13.0759 3.45752C12.5192 3.45752 12.0739 3.90283 12.0739 4.45947C12.0739 5.01611 12.5192 5.46143 13.0759 5.46143C13.6325 5.46143 14.0778 5.01611 14.0778 4.45947ZM16.8982 5.46143C16.8239 4.12549 16.5271 2.93799 15.5622 1.97314C14.5974 1.0083 13.4099 0.711426 12.0739 0.637207C10.7009 0.562988 6.58175 0.562988 5.2087 0.637207C3.87276 0.711426 2.72237 1.0083 1.72042 1.97314C0.755574 2.93799 0.458699 4.12549 0.38448 5.46143C0.310262 6.83447 0.310262 10.9536 0.38448 12.3267C0.458699 13.6626 0.755574 14.813 1.72042 15.8149C2.72237 16.7798 3.87276 17.0767 5.2087 17.1509C6.58175 17.2251 10.7009 17.2251 12.0739 17.1509C13.4099 17.0767 14.5974 16.7798 15.5622 15.8149C16.5271 14.813 16.8239 13.6626 16.8982 12.3267C16.9724 10.9536 16.9724 6.83447 16.8982 5.46143ZM15.1169 13.7739C14.8571 14.5161 14.2634 15.0728 13.5583 15.3696C12.445 15.8149 9.84737 15.7036 8.65987 15.7036C7.43526 15.7036 4.83761 15.8149 3.76143 15.3696C3.01925 15.0728 2.46261 14.5161 2.16573 13.7739C1.72042 12.6978 1.83175 10.1001 1.83175 8.87549C1.83175 7.68799 1.72042 5.09033 2.16573 3.97705C2.46261 3.27197 3.01925 2.71533 3.76143 2.41846C4.83761 1.97314 7.43526 2.08447 8.65987 2.08447C9.84737 2.08447 12.445 1.97314 13.5583 2.41846C14.2634 2.67822 14.82 3.27197 15.1169 3.97705C15.5622 5.09033 15.4509 7.68799 15.4509 8.87549C15.4509 10.1001 15.5622 12.6978 15.1169 13.7739Z" fill="#292F36" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="team-item-contacts">
                                    +1 (378) 400-1234
                                    interno@email.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-team-item">
                        <div className="team-item-content">
                            <h4 className="team-item-name">Nora Owen</h4>
                            <p className="team-item-desc">Design, Australia</p>
                            <div className="team-item-social d-f align-center">
                                <div>
                                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.98055 10.3755H7.34384V18.2505H3.82821V10.3755H0.945398V7.14111H3.82821V4.64502C3.82821 1.83252 5.51571 0.250488 8.08212 0.250488C9.31259 0.250488 10.6134 0.496582 10.6134 0.496582V3.27393H9.17196C7.76571 3.27393 7.34384 4.11768 7.34384 5.03174V7.14111H10.4727L9.98055 10.3755Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6559 4.59424C17.359 4.06689 17.9918 3.43408 18.484 2.6958C17.8512 2.97705 17.1129 3.18799 16.3746 3.2583C17.1481 2.80127 17.7106 2.09814 17.9918 1.21924C17.2887 1.64111 16.4801 1.95752 15.6715 2.1333C14.9684 1.39502 14.0192 0.973145 12.9645 0.973145C10.9254 0.973145 9.27308 2.62549 9.27308 4.66455C9.27308 4.9458 9.30824 5.22705 9.37855 5.5083C6.31995 5.33252 3.57777 3.85596 1.74964 1.64111C1.43324 2.16846 1.25745 2.80127 1.25745 3.50439C1.25745 4.77002 1.89027 5.89502 2.9098 6.56299C2.31214 6.52783 1.71449 6.38721 1.2223 6.10596V6.14111C1.2223 7.93408 2.48792 9.41064 4.17542 9.76221C3.89417 9.83252 3.54261 9.90283 3.2262 9.90283C2.98011 9.90283 2.76917 9.86768 2.52308 9.83252C2.98011 11.3091 4.3512 12.3638 5.96839 12.3989C4.70277 13.3833 3.12074 13.981 1.39808 13.981C1.08167 13.981 0.800423 13.9458 0.519173 13.9106C2.13636 14.9653 4.06995 15.563 6.17933 15.563C12.9645 15.563 16.6559 9.97314 16.6559 5.08643C16.6559 4.91064 16.6559 4.77002 16.6559 4.59424Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.90702 16.0005V5.48877H0.637485V16.0005H3.90702ZM2.25467 4.08252C3.30936 4.08252 4.15311 3.20361 4.15311 2.14893C4.15311 1.12939 3.30936 0.285645 2.25467 0.285645C1.23514 0.285645 0.391391 1.12939 0.391391 2.14893C0.391391 3.20361 1.23514 4.08252 2.25467 4.08252ZM16.1062 16.0005H16.1414V10.2349C16.1414 7.42236 15.5086 5.24268 12.2039 5.24268C10.6219 5.24268 9.56717 6.12158 9.11014 6.93018H9.07498V5.48877H5.94608V16.0005H9.21561V10.7974C9.21561 9.42627 9.4617 8.12549 11.1492 8.12549C12.8367 8.12549 12.8719 9.67236 12.8719 10.9028V16.0005H16.1062Z" fill="#292F36" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.65987 4.60791C6.28487 4.60791 4.39229 6.5376 4.39229 8.87549C4.39229 11.2505 6.28487 13.1431 8.65987 13.1431C10.9978 13.1431 12.9274 11.2505 12.9274 8.87549C12.9274 6.5376 10.9978 4.60791 8.65987 4.60791ZM8.65987 11.6587C7.13839 11.6587 5.87667 10.4341 5.87667 8.87549C5.87667 7.354 7.10128 6.12939 8.65987 6.12939C10.1814 6.12939 11.406 7.354 11.406 8.87549C11.406 10.4341 10.1814 11.6587 8.65987 11.6587ZM14.0778 4.45947C14.0778 3.90283 13.6325 3.45752 13.0759 3.45752C12.5192 3.45752 12.0739 3.90283 12.0739 4.45947C12.0739 5.01611 12.5192 5.46143 13.0759 5.46143C13.6325 5.46143 14.0778 5.01611 14.0778 4.45947ZM16.8982 5.46143C16.8239 4.12549 16.5271 2.93799 15.5622 1.97314C14.5974 1.0083 13.4099 0.711426 12.0739 0.637207C10.7009 0.562988 6.58175 0.562988 5.2087 0.637207C3.87276 0.711426 2.72237 1.0083 1.72042 1.97314C0.755574 2.93799 0.458699 4.12549 0.38448 5.46143C0.310262 6.83447 0.310262 10.9536 0.38448 12.3267C0.458699 13.6626 0.755574 14.813 1.72042 15.8149C2.72237 16.7798 3.87276 17.0767 5.2087 17.1509C6.58175 17.2251 10.7009 17.2251 12.0739 17.1509C13.4099 17.0767 14.5974 16.7798 15.5622 15.8149C16.5271 14.813 16.8239 13.6626 16.8982 12.3267C16.9724 10.9536 16.9724 6.83447 16.8982 5.46143ZM15.1169 13.7739C14.8571 14.5161 14.2634 15.0728 13.5583 15.3696C12.445 15.8149 9.84737 15.7036 8.65987 15.7036C7.43526 15.7036 4.83761 15.8149 3.76143 15.3696C3.01925 15.0728 2.46261 14.5161 2.16573 13.7739C1.72042 12.6978 1.83175 10.1001 1.83175 8.87549C1.83175 7.68799 1.72042 5.09033 2.16573 3.97705C2.46261 3.27197 3.01925 2.71533 3.76143 2.41846C4.83761 1.97314 7.43526 2.08447 8.65987 2.08447C9.84737 2.08447 12.445 1.97314 13.5583 2.41846C14.2634 2.67822 14.82 3.27197 15.1169 3.97705C15.5622 5.09033 15.4509 7.68799 15.4509 8.87549C15.4509 10.1001 15.5622 12.6978 15.1169 13.7739Z" fill="#292F36" />
                                    </svg>
                                </div>
                            </div>
                            <p className="team-item-contacts">
                                +1 (378) 400-1234
                                interno@email.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-talk'>
                <h3 className="about-talk-title">Creative project? Let's have a productive talk.</h3>
                <form action="" className='about-talk-fm'>
                    <div className="input-bl d-f">
                        <input type="text" name='clientName' placeholder='Name' />
                        <input type="email" name="clientEnail" placeholder='Email' />
                    </div>
                    <textarea name="msg" placeholder='Hello Iam Intrested in..'></textarea>
                    <div className="about-talk-action d-f align-center">
                        <div className="action-name">Send Now</div>
                        <a href="" className="d-b"><img src="/images/start-arrow.png" alt="start-arrow" /></a>
                    </div>
                </form>
            </section>
        </>
    )
}

export default About