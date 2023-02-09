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
  const [missingData, setMissingData] = useState({ firstName: false, lastName: false, email: false })

  useEffect(() => {
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
  }, [])

  useEffect(() => {
    header.setIsArrow(userData?.email)
    setData(current => ({
      ...current, firstName: userData?.firstName ? userData?.firstName : '',
      lastName: userData?.lastName ? userData.lastName : '',
      email: userData?.email ? userData?.email : ''
    }))
  }, [userData])

  useEffect(() => {
    console.log("🚀 ~ file: index.jsx:39 ~ UserName ~ data", data)
  }, [data])

  const saveData = (e) => {
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
    if (data.firstName && data.lastName && (newUser ? data.email : true)) {
      apiCalls('put', '/user/edit-biz', data)
        .then(res => {
          setUserData(res)
          // if (typeof res === 'object')
          localStorage.user = JSON.stringify(res)
          newUser ? navigate('/business-name') : navigate('/setting')
        })
        .catch(err => console.log("🚀 ~ file: index.jsx:66 ~ handleClick ~ err", err))
    }
    else {
      setMissingData(current => ({ ...current, firstName: data.firstName === '', lastName: data.lastName === '', email: data.email === '' }))
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
          placeholder={language.FIRST_NAME}
          defaultValue={userData?.firstName ? userData?.firstName : ''}
          missingData={missingData.firstName}
        />
        <Input
          onChange={saveData}
          type='text'
          name='lastName'
          placeholder={language.LAST_NAME}
          defaultValue={userData?.lastName ? userData?.lastName : ''}
          missingData={missingData.lastName}
        />
        {!userData?.email &&
          <Input
            onChange={saveData}
            type='email'
            name='email'
            placeholder={language.EMAIL}
            missingData={missingData.email}
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