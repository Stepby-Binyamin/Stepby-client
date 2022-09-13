import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
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
import axios from 'axios'

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
  let start = "054", end = "7668489"

  if (data.phoneNum) {
    start = data.phoneNum.slice(0, 3)
    end = data.phoneNum.slice(3)

  }
  const ilPhoneNum = `${start}-${end}`

  const sendCode = async () => {
    await axios.post('http://localhost:5000/user/send-code', { phoneNumber: data.phoneNum })
      .then(Response => {
        setData({ ...data, status: Response.data.status })
      })
      .catch(error => console.log('error: ', error))
  }

  useEffect(() => {
    sendCode()
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)
  }, [])

  async function goToNextPage() {

    const body = { phoneNumber: data.phoneNum, code: data.code }
    await axios.post('http://localhost:5000/user/check-code', body)
      .then(Response => {
        setNewUser(Response.data.newUser)
        setCode(data.code)
        setCorrectCode(!correctCode)
        setData({ ...data, token: Response.data.token })
      })
      .catch(error => {
        setWrongPassword(true)
        console.log('error: ', error)
      })

    console.log({ data });
    console.log({ correctCode });


    console.log("not equal");

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
        <UserTitle text1={languages[0].dict.SUBMIT_CODE} text2={languages[0].dict.SUBMIT_CODE_END} />
      </div>
      <div className={styles.input}>
        <InputVerification setData={setData} data={data} />
      </div>
      {wrongPassword ? <div className={styles.thatpasswordiswrong}>
        <div><b>{languages[0].dict.WRONG_CODE_MESSAGE}{ilPhoneNum}</b></div>
      </div> : <div className={styles.phoneNum}>
        <UserNumberVerification counter={counter} phoneNum={data.phoneNum} ilPhoneNum1={ilPhoneNum} />
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