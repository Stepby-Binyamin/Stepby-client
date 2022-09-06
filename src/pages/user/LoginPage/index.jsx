import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import SignUpInfo from '../../../components/all/SignUpInfo'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
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
        <BtnSubmitIcon color='orange' icon='Arrow.svg'/>
        </div>
    </div>
  )
}