import { useState } from 'react';
import React, { useContext } from 'react'

import Main from './Main';

import HeaderLogo from '../components/common/HeaderLogo';
import HeaderTitle from '../components/common/HeaderTitle';

// import dataContext from '../context/dataContext';
import mainContext from '../context/mainContext';

import MainDrawer from '../drawer/MainDrawer';


const Layout = ({ children }) => {

   const { header, drawer } = useContext(mainContext);
   // const { projectsData } = useContext(dataContext);

   return (
      <>
         {header.isTitle ?
            <HeaderTitle isArrow={header.isArrow} isHamburguer={header.isHamburguer} title={header.title} subTitle={header.subTitle} drawerContent={header.drawerContent} /> :
            <HeaderLogo />}

         <Main />

         <MainDrawer>{drawer.drawer}</MainDrawer>
      </>
   )
}

export default Layout
