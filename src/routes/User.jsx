import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/user/LoginPage'
import Verification from '../pages/user/Verification'

function User() {

   return (
      <Routes>
         <Route path='/login' element={<Login/>} />
         <Route path='/verification' element={<Verification/>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default User