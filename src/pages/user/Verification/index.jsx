import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import InputVerification from '../../../components/all/InputVerification'
import { useLocation } from 'react-router-dom'
export default function Verification() {
    const {header} = useContext(mainContext)
    const phoneNumber = useLocation()
    useEffect(()=>{
        header.setIsTitle(false)
        console.log(phoneNumber.state)
    },[])
    
  return (
    <div className={styles.box}>
        <div className={styles.title}>
        <UserTitle text={languages[0].dict.SUBMIT_CODE}/>
        </div>
        <div className={styles.input}> 
        <InputVerification/>
        </div>
        {/* FOR JOSH enter the text under the input here */}
        <div className={styles.btn}>
        <BtnSubmitIcon color='orange' icon='Arrow.svg'/>
        </div>
    </div>
  )
}