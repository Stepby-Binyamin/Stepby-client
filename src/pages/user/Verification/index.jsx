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

export default function Verification({ newUser = false }) {
  // need to add navigation to existing user that will show his projects page
  const { header } = useContext(mainContext)
  const navigate = useNavigate()
  const [counter, setCounter] = useState(0)
  const [code, setCode] = useState("")
  const location = useLocation()
  const [data, setData] = useState(location.state)

  const { userData, setUserData } = useContext(userContext)


  useEffect(() => {
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)

  }, [])

  function goToNextPage() {
    // console.log(code);
    //make an if clause if a user is new he will go to '/user-name' , else- if he is an existing user then go to 31
    setData({ ...data, code: code })
    setUserData("user")
    console.log(userData);
    navigate('/user-name', { state: data })
    if (!newUser) {
      navigate('/home/projects', { state: data })
    }

  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text1={languages[0].dict.SUBMIT_CODE} text2={languages[0].dict.SUBMIT_CODE_END} />
      </div>
      <div className={styles.input}>
        <InputVerification setData={setData} data={data} />
      </div>
      <div className={styles.phoneNum}>
        <UserNumberVerification counter={counter} phoneNum={data.phoneNum} />
      </div>
      <div className={styles.someThingWrong}>
        <SomethingWentWrong setCounter={setCounter} />
      </div>
      <div className={styles.btn}>
        <BtnSubmitIcon color='orange' icon='Arrow.svg' func={goToNextPage} />
      </div>
    </div >
  )
}