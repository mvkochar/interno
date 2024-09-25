import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Services } from '../../pages'
import Pricing from '../../pages/Pricing'

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
    </Routes>
  )
}

export default Main