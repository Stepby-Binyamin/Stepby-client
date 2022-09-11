import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StepEdit from '../pages/template/StepEdit'

function Template() {

   return (
      <Routes>
         <Route path='/template/step/:id' element={<>start</>} />
         <Route path='/template/step-edit/:id' element={<StepEdit/>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default Template