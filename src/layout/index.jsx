import React, { useContext, useEffect, useState } from 'react'
import Main from './Main';
import HeaderLogo from '../components/common/HeaderLogo';
import HeaderTitle from '../components/common/HeaderTitle';
import mainContext from '../context/mainContext';
import Splash from "../pages/Splash/splash"
import MainDrawer from '../drawer/MainDrawer';

const Layout = () => {
   const { header, language } = useContext(mainContext);
   const [showSplash, setShowSplash] = useState(true)

   useEffect(() => {
      if (language) {
         setTimeout(() => {
            setShowSplash(false)
         }, 3000)
      }
   }, [language])

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