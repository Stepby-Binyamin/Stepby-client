import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Home() {

   return (
      <Routes>
         <Route path='/home' element={<>start</>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default Home