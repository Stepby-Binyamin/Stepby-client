import React, { useContext, useEffect, useState } from 'react'
import Main from './Main';
import HeaderLogo from '../components/common/HeaderLogo';
import HeaderTitle from '../components/common/HeaderTitle';
import SwipeDown from '../components/all/SwipeDown'
import mainContext from '../context/mainContext';
import Splash from "../pages/Splash/splash"
import MainDrawer from '../drawer/MainDrawer';

const Layout = () => {
   const { header } = useContext(mainContext);
   const [showSplash, setShowSplash] = useState(true)

   useEffect(() => {
      setTimeout(() => {
         setShowSplash(false)
      }, 2000)
   }, [])

   return (
      showSplash ? <Splash /> : (
         <>
            {header.isTitle ? <HeaderTitle /> : <HeaderLogo />}
            <Main />
            <MainDrawer />
         </>)
   )
}
export default Layout