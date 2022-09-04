import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Template() {

   return (
      <Routes>
         <Route path='/template' element={<>start</>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default Template