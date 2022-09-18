import React from 'react'
import styles from "./style.module.css"
import UserTitle from '../../../components/common/UserTitle'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect, useState } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import InputVerification from '../../../components/all/InputVerification'
import SomethingWentWrong from '../../../components/all/somethingWentWrong'
import UserNumberVerification from '../../../components/all/UserNumberVerification'
import { useLocation, useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'
import { setToken } from '../../../functions/apiRequest'
import apiCalls from '../../../functions/apiRequest'

export default function Verification() {
  const { header } = useContext(mainContext);
  const { userData, setUserData } = useContext(userContext)
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const [code, setCode] = useState()
  const [wrongPassword, setWrongPassword] = useState(false);
  const [language, setLanguage] = useState(JSON.parse(localStorage.language))
  let start = "054", end = "7668489"


  if (location.state) {
    start = location.state.slice(0, 3)
    end = location.state.slice(3)
  }
  const ilPhoneNum = `${start}-${end}`

  const sendCode = async () => {
    if (localStorage.token) setToken(localStorage.token)
    await apiCalls("post", "/user/send-code", { phoneNumber: location.state })
      .then((res) => {
        console.log(1234, res)
        // if(res.categories !== []){
        if(res.firstName){
          setUserData(res) 
          localStorage.user = JSON.stringify(res)
           navigate('/projects')
        } 
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    sendCode()
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)
    setLanguage(JSON.parse(localStorage.language))
  }, [])

  async function handleClick() {
    const body = { phoneNumber: location.state, code: code }

    await apiCalls('post', '/user/check-code', body)
      .then(result => {
        setToken(result.token)
        setUserData(result.user)
        console.log(result)
        localStorage.user = JSON.stringify(result.user)
        localStorage.token = result.token
        result.user.firstName ? navigate('/projects') : navigate('/user-name')
      })
      .catch(() => setWrongPassword(true))
    console.log(localStorage.user);

  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text1={language.SUBMIT_CODE} text2={language.SUBMIT_CODE_END} />
      </div>
      <div className={styles.input}>
        <InputVerification setCode={setCode} />
      </div>
      {wrongPassword ? <div className={styles.thatpasswordiswrong}>
        <div><b>{language.WRONG_CODE_MESSAGE}{ilPhoneNum}</b></div>
      </div> : <div className={styles.phoneNum}>
        <UserNumberVerification counter={counter} phoneNum={location.state} ilPhoneNum1={ilPhoneNum} />
      </div>}
      {/* צריך להוסיף אופציה למקרה שהוא הזין סיסמא לא נכונה ואז הוא מבקש שישלחו סיסמא שוב שיציג את הUSERVERIFICATION ולא את הודעת השגיאה
       */}

      <div className={styles.someThingWrong}>
        <SomethingWentWrong sendCode={sendCode} setCounter={setCounter} setWrongPassword={setWrongPassword} />
      </div>
      <div className={styles.btn}>
        <BtnSubmitIcon color='orange' icon='Arrow.svg' func={handleClick} />
      </div>
    </div >
  )
}