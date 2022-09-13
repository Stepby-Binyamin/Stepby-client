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
import { users } from "../../../data/fakeProjects";
import { setToken } from '../../../functions/apiRequest'
import apiCalls from '../../../functions/apiRequest'

export default function Verification() {
  // need to add navigation to existing user that will show his projects page
  const { header } = useContext(mainContext);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const [data, setData] = useState(location.state);
  const [code, setCode] = useState()
  const [newUser, setNewUser] = useState()
  const [wrongPassword, setWrongPassword] = useState(false);
  const [correctCode, setCorrectCode] = useState(false)
  const [language, setLanguage] = useState()
  let start = "054", end = "7668489"


  if (data.phoneNumber) {
    start = data.phoneNumber.slice(0, 3)
    end = data.phoneNumber.slice(3)
  }
  const ilPhoneNum = `${start}-${end}`

  const sendCode = async () => {
    await apiCalls("/user/send-code", "post", { phoneNumber: data.phoneNumber })
  }

  useEffect(() => {
    sendCode()
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)
    setLanguage(JSON.parse(localStorage.language))
  }, [])
      
  async function goToNextPage() {
    const body = { phoneNumber: data.phoneNumber, code: code }

    const result = await apiCalls('/user/check-code', 'post', body)
    if (typeof result === 'string') setWrongPassword(true)
    if (typeof result === 'object') {
      setNewUser(result.newUser)
      setCorrectCode(!correctCode)
      setToken(result.token)
    }

  }

  useEffect(() => {
    if (correctCode) {
      if (newUser) navigate('/user-name', { state: data })
      if (!newUser) navigate('/projects', { state: data })
    }
  }, [goToNextPage])


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
        <UserNumberVerification counter={counter} phoneNum={data.phoneNumber} ilPhoneNum1={ilPhoneNum} />
      </div>}
      {/* צריך להוסיף אופציה למקרה שהוא הזין סיסמא לא נכונה ואז הוא מבקש שישלחו סיסמא שוב שיציג את הUSERVERIFICATION ולא את הודעת השגיאה
       */}

      <div className={styles.someThingWrong}>
        <SomethingWentWrong sendCode={sendCode} phoneNumer={data.phoneNum} setCounter={setCounter} setWrongPassword={setWrongPassword} />
      </div>
      <div className={styles.btn}>
        <BtnSubmitIcon color='orange' icon='Arrow.svg' func={goToNextPage} />
      </div>
    </div >
  )
}