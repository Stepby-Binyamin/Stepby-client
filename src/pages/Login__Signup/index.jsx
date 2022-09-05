import React from 'react'
import HeaderLogo from '../../components/common/HeaderLogo'
import SubHeader from '../../components/common/SubHeader'
import styles from "./style.module.css"
import { languages } from '../../functions/languages'
import Input from '../../components/common/Input/Input'
export default function Login() {
    
  return (
    <div className={styles.box}>
        <div className={styles.logo}>
        <HeaderLogo/> 
        </div>
        <div className={styles.sub}>
        <SubHeader text={languages[0].dict.ENTER_PHONE}/>
        </div>
        <Input/>
    </div>
  )
}

