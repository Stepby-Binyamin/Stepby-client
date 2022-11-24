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

const UserName = () => {
  const navigate = useNavigate()
  const { header, language } = useContext(mainContext)
  const { userData, setUserData } = useContext(userContext)

  const [data, setData] = useState({})

  useEffect(() => {
    if (!userData?.email) {
      header.setIsArrow(true)
    }
    else {
      header.setIsTitle(false)
      header.setIsHeaderSet(false)
      header.setIsArrow(false)
    }
  }, [])

  const saveData = (e) => {
    if (e.target.value === '') return
    switch (e.target.name) {
      case 'firstName':
        setData({ ...data, firstName: e.target.value })
        break;
      case 'lastName':
        setData({ ...data, lastName: e.target.value })
        break;
      case 'email':
        setData({ ...data, email: e.target.value })
        break;
      default:
        break;
    }
  }

  const handleClick = (newUser) => {
    console.log("🚀 ~ file: index.jsx ~ line 60 ~ handleClick ~ data", data)
    if (data.firstName && data.lastName && data.email) {
      apiCalls('put', '/user/edit-biz', data).then(res => {
        setUserData(res)
        if (typeof res === 'object') localStorage.user = JSON.stringify(res)
        newUser ? navigate('/business-name') : navigate('/setting')
      }).catch(err => console.log(err))
    }
    else {
      console.log("ERROR - enter firstName,lastName or email")
    }
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text1={language.PERSONAL_INFORMATION} />
      </div>
      <div className={styles.input}>
        <Input
          autoFocus
          onChange={saveData}
          type='text'
          name='firstName'
          placeholder={!userData?.firstName ? language.FIRST_NAME : ''}
          defaultValue={userData?.firstName ? userData?.firstName : ''}
        />
        <Input
          onChange={saveData}
          type='text'
          name='lastName'
          placeholder={!userData?.lastName ? language.LAST_NAME : ''}
          defaultValue={userData?.lastName ? userData?.lastName : ''}
        />
        {!userData?.email &&
          <Input
            onChange={saveData}
            type='email'
            name='email'
            placeholder={language.EMAIL}
          />}
      </div>
      <div className={styles.btn}>
        <BtnSubmitIcon
          color='orange'
          icon={userData?.email ? 'v to text.svg' : 'Arrow.svg'}
          func={() => handleClick(userData?.email ? false : true)}
        />
      </div>
    </div>
  )
}
export default UserName