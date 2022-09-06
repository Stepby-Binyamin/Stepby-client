import React from 'react'
<<<<<<< HEAD
=======
import { useState } from 'react';
import { headerTitleContext } from '../helper/Context'


>>>>>>> 09d7db28878f60f3c27042f95ab8f9ee394cc8cc
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
