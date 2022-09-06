import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserName from '../pages/user/UserName'
import Login from '../pages/user/LoginPage'
import Verification from '../pages/user/Verification'

function User() {

   return (
      <Routes>
         <Route path='/login' element={<Login/>} />
         <Route path='/verification' element={<Verification/>} />
         <Route path='/user-name' element={<UserName/>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default User