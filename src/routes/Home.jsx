import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeProject from '../pages/home/HomeProject'
import HomeTemplate from '../pages/home/HomeTemplate'

function Home() {

   return (
      <Routes>
         <Route path='/home/projects' element={<HomeProject />} />
         <Route path='/home/templates' element={<HomeTemplate />} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default Home