<<<<<<< HEAD
import React from 'react'
<<<<<<< HEAD
=======
import { useState } from 'react';
import { headerTitleContext } from '../helper/Context'
=======
import React, { useContext } from 'react'

import Main from './Main';

import HeaderLogo from '../components/common/HeaderLogo';
import HeaderTitle from '../components/common/HeaderTitle';

// import dataContext from '../context/dataContext';
import mainContext from '../context/mainContext';

import MainDrawer from '../drawer/MainDrawer';
>>>>>>> a06030fa96944f7497bef9a629a4b98a6e621013


>>>>>>> 09d7db28878f60f3c27042f95ab8f9ee394cc8cc
const Layout = ({ children }) => {

   const { header, drawer } = useContext(mainContext);
   // const { projectsData } = useContext(dataContext);

   return (
      <>
         {header.isTitle ?
            <HeaderTitle isArrow={header.isArrow} isHamburguer={header.isHamburguer} title={header.title} subTitle={header.subTitle} drawerContent={header.drawerContent} /> :
            <HeaderLogo />}

         <Main />

        {drawer.drawer && <MainDrawer>{drawer.drawer}</MainDrawer>}
      </>
   )
}

export default Layout
