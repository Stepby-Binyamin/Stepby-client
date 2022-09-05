import React, { useState, useContext } from 'react'
import { useEffect } from 'react'

import HeaderLogo from '../../components/common/HeaderLogo'
import HeaderTitle from '../../components/common/HeaderTitle'

import { headerTitleContext } from '../../helper/Context'

export default function Shaul() {
   //HeaderLogo
   const [isArrow, setIsArrow] = useState(true)
   const [isHeaderSet, setIsHeaderSet] = useState(true)

   //HeaderTitle
   // const [isArrow, setIsArrow] = useState(true)
   const [isHamburguer, setIsHamburguer] = useState(false)

   const drawerFunc = () => {
      alert("drawerFunc on HeaderTitle")
   }

   //setting context
   const headerTitleContextLocal = useContext(headerTitleContext)
   useEffect(() => {
      headerTitleContextLocal.setTitle("איסוף השראות ")
      headerTitleContextLocal.setSubtitle("אפיון ועיצוב אתר תדמית מו...")
   }, [])
   
   return (
      <>
         <HeaderLogo isArrow={isArrow} isHeaderSet={isHeaderSet} />
         <HeaderTitle drawerFunc={drawerFunc} isArrow={isArrow} isHamburguer={isHamburguer} />
      </>
   )
}
