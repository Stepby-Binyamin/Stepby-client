import React from 'react'
import { Route, Routes } from 'react-router-dom'

function User() {

   return (
      <Routes>
         <Route path='/login' element={<>start</>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default User