import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import Confirm from '../../components/all/Confirm'
import Logo from '../../components/all/Logo'
import BtnCheckBox from '../../components/common/BtnCheckBox'
import BtnIcon from '../../components/common/BtnIcon'

import HeaderLogo from '../../components/common/HeaderLogo'
import HeaderTitle from '../../components/common/HeaderTitle'
import Input from '../../components/common/Input/Input'
import UploadIMG from '../../components/common/UploadIMG'
import mainContext from '../../context/mainContext'

import BExample1 from '../../pages/project/BExample1'
import BExample2 from '../../pages/project/BExample2'

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


   const { header, drawer } = useContext(mainContext)


   // useEffect(() => {
   //    drawer.setDrawerContentHeader(<Confirm />)
   //    // header.setIsTitle(false)
   //    header.setTitle("אתר מרכז הצדקה")      // HeaderTitle
   //    header.setSubTitle("מורדי איזנשטיין")  // HeaderTitle
   //    header.setIsHamburguer(true)            // HeaderTitle
   //    // header.setIsDots(false)                 // HeaderTitle
   //    header.setIsArrow(false)                // HeaderLogo and HeaderTitle
   //    // header.setIsHeaderSet(false)            // HeaderLogo
   // }, [])
   function add() {
      drawer.setDrawer(<></>)
   }

   return (
      <>
         {/* <HeaderLogo /> */}
         {/* <HeaderTitle DrawerContentHeader={DrawerContentHeader} /> */}

         {/* {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />)} */}
         {/* <BExample1 /> */}
         <BExample2 />
         {/* <UploadIMG /> */}
      </>
   )
}
