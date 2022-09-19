import React, { useState } from 'react'
import styles from "./style.module.css"
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import { useLocation, useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'
import apiCalls from '../../../functions/apiRequest'



//  phoneNumber, firstName, lastName, email, bizName, categories

export default function UserName() {
  const { userData, setUserData } = useContext(userContext)

  const { header } = useContext(mainContext)
  const navigate = useNavigate(),
    [language, setLanguage] = useState(JSON.parse(localStorage.language)),
    [data, setData] = useState({})

  useEffect(() => {
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    header.setIsArrow(false)
    setLanguage(JSON.parse(localStorage.language))
  }, [])

  const saveData = (e) => {
    if (e.target.name === 'firstName' && e.target.value !== '') {
      setData({ ...data, firstName: e.target.value })
    }
    if (e.target.name === 'lastName' && e.target.value !== '') {
      setData({ ...data, lastName: e.target.value })
    }
    if (e.target.name === 'email' && e.target.value !== '') {
      setData({ ...data, email: e.target.value })
    }
  }

  const handleClick = (newUser) => {
    console.log(1234555, data);
    apiCalls('put', '/user/edit-biz', data).then(res => {
      setUserData(res)
      if (typeof res === 'object') localStorage.user = JSON.stringify(res)
      newUser ? navigate('/business-name')
        : navigate('/setting')
    }).catch(err => console.log(err))

  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text1={language.PERSONAL_INFORMATION} />
      </div>
      <div className={styles.input}>
        <Input autoFocus onChange={saveData} type='text' name='firstName' placeholder={!userData?.firstName ? language.FIRST_NAME : ''} defaultValue={userData?.firstName ? userData?.firstName : ''} />
        <Input onChange={saveData} type='text' name='lastName' placeholder={!userData?.lastName ? language.LAST_NAME : ''} defaultValue={userData?.lastName ? userData?.lastName : ''} />
        {!userData?.email && <Input onChange={saveData} type='email' name='email' placeholder={language.EMAIL} />}
      </div>
      <div className={styles.btn}>
        <BtnSubmitIcon color='orange' icon={userData?.email ? 'v to text.svg' : 'Arrow.svg'} func={() => handleClick(userData?.email ? false : true)} />
      </div>
    </div>
  )
}