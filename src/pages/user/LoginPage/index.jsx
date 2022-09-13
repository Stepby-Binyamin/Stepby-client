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
    [data, setData] = useState({ fName: '', lName: '', email: '', businessNm: '', phoneNum: '', code: '', theCategories: '' }),
    [language, setLanguage] = useState();
    
    useEffect(() => {
      header.setIsTitle(false)
      header.setIsHeaderSet(false)
      header.setIsArrow(false)
      setLanguage(JSON.parse(localStorage.language))
  }, [])

  // const handlePress = (e)=>{
  //  if ( e.keyCode ===69 ){
  //   console.log(e.target.value);
  //   //  setLimitDigits(e.target.value)
  //   }//console.log(e.target.value);
  // }

  const handleChange = (e) => {
    if (e.keyCode === '53') {
      console.log(e.target.value.length - 1);
      // setLimitDigits(e.target.value.toString().length-1)
    }
    console.log(typeof e.target.value);
    if (e.target.value.length > 10) {
      return
    }
    setLimitDigits(e.target.value)
    setData({ ...data, phoneNum: e.target.value })
  }

  const handleClick = async () => {
    if (data.phoneNum.length < 10) return
    navigate('/verification', { state: data })
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