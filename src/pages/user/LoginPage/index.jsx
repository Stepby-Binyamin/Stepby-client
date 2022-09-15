import React from 'react'
import styles from "./style.module.css"
// import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import SignUpInfo from '../../../components/all/SignUpInfo'
import { useContext, useState, useEffect } from 'react'
import mainContext from '../../../context/mainContext'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const { header } = useContext(mainContext),
    navigate = useNavigate(),
    [limitDigits, setLimitDigits] = useState(''),
    [phoneNumber, setphonenumber] = useState(''),
    [language, setLanguage] = useState(JSON.parse(localStorage.language));

  useEffect(() => {
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)  
    setLanguage(JSON.parse(localStorage.language))
  }, [])

  const handleChange = (e) => {

    if (e.target.value.length > 10) {
      return
    }
    setLimitDigits(e.target.value)
    setphonenumber(e.target.value)
  }

  const handleClick = async () => {
    if (phoneNumber.length < 10) return
    navigate('/verification', { state: phoneNumber })
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text1={language.ENTER_PHONE} />
      </div>
      <div className={styles.input}>
        <Input autoFocus value={limitDigits} onChange={handleChange} type='number' placeholder={language.YOUR_PHONE} />
      </div>
      <SignUpInfo />
      <div className={styles.btn}>
        <BtnSubmitIcon func={handleClick} color='orange' icon='Arrow.svg' />
      </div>
    </div>
  )
}