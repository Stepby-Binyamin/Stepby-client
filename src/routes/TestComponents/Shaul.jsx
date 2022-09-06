import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import Logo from '../../components/all/Logo'
import BtnCheckBox from '../../components/common/BtnCheckBox'
import BtnIcon from '../../components/common/BtnIcon'

import HeaderLogo from '../../components/common/HeaderLogo'
import HeaderTitle from '../../components/common/HeaderTitle'
import Input from '../../components/common/Input/Input'

import BExample1 from '../../pages/project/BExample1'

export default function Shaul() {
   //HeaderLogo
   // const [isArrow, setIsArrow] = useState(true)
   // const [isHeaderSet, setIsHeaderSet] = useState(true)

   const drawerContent = () => {
      alert("drawerContent on HeaderTitle")
   }


   //BtnCheckBox

   const dataTest = ["A", "B", "C", "D"]

   return (
      <>
         {/* <HeaderLogo isArrow={isArrow} isHeaderSet={isHeaderSet} />
         <HeaderTitle drawerContent={drawerContent} isArrow={isArrow} isHamburguer={isHamburguer} /> */}
         {/* {dataTest.map(elem => <BtnCheckBox name={elem} id={elem} />)} */}
         {/* <BExample1 /> */}
      </>
   )
}
