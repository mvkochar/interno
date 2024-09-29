import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Faq, Home, License, NotFound, Pricing, Projects, Services, Team } from '../../pages'


const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='about'
          element={<About/>}
        />
        <Route
          path='services'
          element={<Services/>}
        />
        <Route
          path='pricing'
          element={<Pricing/>}
        />
        <Route
          path='projects'
          element={<Projects/>}
        />
        <Route
          path='blog'
          element={<Blog/>}
        />
        <Route
          path='team'
          element={<Team/>}
        />
        <Route
          path='contact'
          element={<Contact/>}
        />
        <Route
          path='faq'
          element={<Faq/>}
        />
        <Route
          path='license'
          element={<License/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
    </Routes>
  )
}

export default Main