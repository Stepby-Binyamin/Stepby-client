import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login__Signup'

function User() {

   return (
      <Routes>
         <Route path='/login' element={<Login/>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default User