import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserName from '../pages/user/UserName'
import Login from '../pages/user/LoginPage'
import Verification from '../pages/user/Verification'
import BusinessCategory from '../pages/user/BusinessCategory'
import BusinessName from '../pages/user/BusinessName'

function User() {

   return (
      <Routes>
         <Route path='/login' element={<Login/>} />
         <Route path='/verification' element={<Verification/>} />
         <Route path='/user-name' element={<UserName/>} />
         <Route path='/business-name' element={<BusinessName/>} />
         <Route path='/businessCategory' element={<BusinessCategory/>} />

    

         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default User