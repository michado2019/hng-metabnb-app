import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import PlaceToStay from '../pages/PlaceToStay'

export const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/stay" element={<PlaceToStay />} /> 
             {/* <Route path="/nfts" element={<NFTs />} />
            <Route path="/community" element={<Community />} /> */}
        </Routes>
    </div>
  )
}