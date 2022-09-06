import React from 'react'
import HeaderLogo from '../../../components/common/HeaderLogo'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import SignUpInfo from '../../../components/all/SignUpInfo'
import BtnConfirm from '../../../components/common/BtnSubmitIcon'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect } from 'react'
export default function Login() {
    const {header} = useContext(mainContext)
    useEffect(()=>{
        header.setIsTitle(false)
    },[])
    
  return (
    <div className={styles.box}>
        <div className={styles.title}>
        <UserTitle text={languages[0].dict.ENTER_PHONE}/>
        </div>
        <div className={styles.input}> 
        <Input placeholder={languages[0].dict.YOUR_PHONE}/>
        </div>
        <SignUpInfo/>
        <div className={styles.btn}>
        <BtnConfirm color='orange' icon='Arrow.svg'/>
        </div>
    </div>
  )
}