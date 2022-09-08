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

   //BtnCheckBox - how to set <BtnCheckBox /> example - dont DELETE IT

   // const dataTest = [
   //    { title: "A", isActive: false },
   //    { title: "B", isActive: false },
   //    { title: "C", isActive: false },
   //    { title: "D", isActive: false },]

   // useEffect(() => {
   //    setData(dataTest)
   // }, [])

   // const [data, setData] = useState()

   // const handleClick = (name) => {
   //    const result = data.map(elem => elem.title === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
   //    setData(result)
   // }

   return (
      <>
         {/* <HeaderLogo isArrow={isArrow} isHeaderSet={isHeaderSet} /> */}
         {/* <HeaderTitle drawerContent={drawerContent} isArrow={isArrow} isHamburguer={isHamburguer} /> */}
         {/* {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />)} */}
         <BExample1 />
      </>
   )
}
