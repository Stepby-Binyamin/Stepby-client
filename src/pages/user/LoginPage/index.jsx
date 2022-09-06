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
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Login() {

  const { header } = useContext(mainContext)
  const navigate = useNavigate(),
  [phoneNumber, setPhoneNumber] = useState(),
  [limitDigits, setLimitDigits] = useState('')

  useEffect(() => {
    header.setIsTitle(false)
  }, [])

  const handleChange = (e)=>{
    if(e.target.value.toString().length === 10){
      return
    }
    setLimitDigits(e.target.value)
    setPhoneNumber(e.target.value)
}

  const handleClick = ()=>{
    // TODO verify phone number 
    if (phoneNumber.toString().length < 9) return
    navigate('/verification', {state:phoneNumber})
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text={languages[0].dict.ENTER_PHONE} />
      </div>
      <div className={styles.input}>
        <Input value={limitDigits} onChange={handleChange} type='number' placeholder={languages[0].dict.YOUR_PHONE} />
      </div>
      <SignUpInfo />
      <div className={styles.btn}>
        <BtnSubmitIcon func={handleClick} color='orange' icon='Arrow.svg' />
      </div>
    </div>
  )
}