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

const Login = () => {
  const navigate = useNavigate()
  const { header } = useContext(mainContext)

  const [limitDigits, setLimitDigits] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [language, setLanguage] = useState({});

  useEffect(() => {
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)
    setLanguage(localStorage.language ? JSON.parse(localStorage.language) : {})
  }, [])

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      return
    }
    setLimitDigits(e.target.value)
    setPhoneNumber(e.target.value)
  }

  const handleClick = async () => {
    if (phoneNumber.length < 10) return
    navigate('/verification', { state: { phoneNumber } })
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
export default Login