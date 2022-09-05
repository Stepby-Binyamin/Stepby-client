import React from 'react'
import { useState } from 'react';
import { headerTitleContext } from '../helper/Context'


const Layout = ({ children }) => {

   const [title, setTitle] = useState()
   const [subtitle, setSubtitle] = useState()
 
   return (
      <>
         <headerTitleContext.Provider value={{ title, setTitle, subtitle, setSubtitle }}>
            {children}
         </headerTitleContext.Provider>

      </>
   )
}

export default Layout
