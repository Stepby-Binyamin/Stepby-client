import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import Logo from '../../components/all/Logo'
import BtnCheckBox from '../../components/common/BtnCheckBox'
import BtnIcon from '../../components/common/BtnIcon'

import HeaderLogo from '../../components/common/HeaderLogo'
import HeaderTitle from '../../components/common/HeaderTitle'
import Input from '../../components/common/Input/Input'

import { headerTitleContext } from '../../helper/Context'

import BExample1 from '../../pages/BExample1'

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
   

   //BtnCheckBox
  
   const dataTest = ["A", "B", "C", "D"]

   return (
      <>
         {/* <HeaderLogo isArrow={isArrow} isHeaderSet={isHeaderSet} />
         <HeaderTitle drawerFunc={drawerFunc} isArrow={isArrow} isHamburguer={isHamburguer} /> */}
         {/* {dataTest.map(elem => <BtnCheckBox name={elem} id={elem} />)} */}
         <BExample1 />
      </>
   )
}
