// import { useState } from 'react';
import React, { useContext, useEffect, useState } from 'react'

import Main from './Main';

import HeaderLogo from '../components/common/HeaderLogo';
import HeaderTitle from '../components/common/HeaderTitle';
import SwipeDown from '../components/all/SwipeDown'
// import dataContext from '../context/dataContext';
import mainContext from '../context/mainContext';
import Splash from "../pages/Splash/splash"

import MainDrawer from '../drawer/MainDrawer';


const Layout = ({ children }) => {

   const [showSplash, setShowSplash] = useState(true)



   useEffect(() => {
      setTimeout(() => {
         setShowSplash(false)
      }, 500)
   }, [])


   const { header, drawer } = useContext(mainContext);
   // const { projectsData } = useContext(dataContext);

   return (
      showSplash ? <Splash /> : (
         <>
            {header.isTitle ?
               <HeaderTitle isArrow={header.isArrow} isHamburguer={header.isHamburguer} title={header.title} subTitle={header.subTitle} DrawerContentHeader={header.DrawerContentHeader} /> :
               <HeaderLogo />}
            <Main />
            <MainDrawer>{drawer.drawer}</MainDrawer>
         </>)
   )

}

export default Layout