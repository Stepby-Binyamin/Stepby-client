import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TemplateEdit from '../pages/template/TemplateEdit'

function Template() {

   return (
      <Routes>
         <Route path='/template/step/:id' element={<>start</>} />
         <Route path='/template/step-edit/:id' element={<TemplateEdit/>} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}

export default Template