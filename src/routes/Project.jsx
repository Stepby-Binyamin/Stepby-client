import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Project() {

   return (
      <Routes>
         <Route path='/project' element={<>start</>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default Project