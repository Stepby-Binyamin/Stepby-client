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

const Verification = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const { header } = useContext(mainContext);
  const { setUserData } = useContext(userContext)

  const [ilPhoneNum, setIlPhoneNum] = useState()

  const [code, setCode] = useState()
  const [counter, setCounter] = useState(0);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [language, setLanguage] = useState(JSON.parse(localStorage.language))

  useEffect(() => {
    sendCode()
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)
    setLanguage(JSON.parse(localStorage.language))
  }, [])

  useEffect(() => {
    const start = state.phoneNumber.slice(0, 3)
    const end = state.phoneNumber.slice(3)
    setIlPhoneNum(`${start}-${end}`)
  }, [state])

  const sendCode = async () => {
    if (localStorage.token) setToken(localStorage.token)
    await apiCalls("post", "/user/send-code", { phoneNumber: state.phoneNumber })
      .then((res) => {
        if (res.firstName) {
          setUserData(res)
          localStorage.user = JSON.stringify(res)
          navigate('/projects')
        }
      })
      .catch((err) => console.log(err))
  }

  const handleClick = async () => {
    const body = { phoneNumber: state.phoneNumber, code: code }
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
      {wrongPassword ?
        <div className={styles.that_password_is_wrong}>
          <div><b>{language.WRONG_CODE_MESSAGE} {ilPhoneNum}</b></div>
        </div>
        :
        <div className={styles.phoneNum}>
          <UserNumberVerification counter={counter} phoneNum={state.phoneNumber} ilPhoneNum1={ilPhoneNum} />
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
export default Verification