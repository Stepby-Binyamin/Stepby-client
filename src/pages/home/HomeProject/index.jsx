import React, { useState } from 'react'
import styles from "./style.module.css"
import HeaderLogo from '../../../components/common/HeaderLogo'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'

const HomeProject = ({ style = {}, ...props }) => {

   const [whoClicked, setWhoClicked] = useState()

   return (
      <div className={styles.HomeProject} style={style} {...props} >
         <HeaderLogo />
         <NavLink />
         <NavLinkTab onClick={[whoClicked, setWhoClicked]} firstText secondText thirdText counter />
         <ListItem />
      </div>
   )
}

export default HomeProject