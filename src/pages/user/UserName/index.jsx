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

  const [data, setData] = useState({ firstName: '', lastName: '', email: '' })

  const [missingData, setMissingData] = useState({ firstName: false, lastName: false, email: false })

  useEffect(() => {
    header.setIsTitle(false)
    header.setIsArrow(userData?.email)
    header.setIsHeaderSet(false)
    // setData({ email: userData?.email ? userData?.email : '' })
  }, [])

  useEffect(() => {
    console.log("🚀 ~ file: index.jsx:29 ~ UserName ~ userData", userData)
  }, [userData])

  useEffect(() => {
    console.log("🚀 ~ file: index.jsx:20 ~ UserName ~ data", data)
    console.log("🚀 ~ file: index.jsx:29 ~ UserName ~ missingData", missingData)
  }, [missingData])

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
    if ((newUser && data.firstName && data.lastName && data.email)
      || (!newUser && (data.firstName !== undefined || data.lastName !== undefined))) {
      apiCalls('put', '/user/edit-biz', data)
        .then(res => {
          setUserData(res)
          // if (typeof res === 'object')
          localStorage.user = JSON.stringify(res)
          newUser ? navigate('/business-name') : navigate('/setting')
        })
        .catch(err => console.log(err))
    }
    else {
      newUser ?
        setMissingData(current => ({ ...current, firstName: !data.firstName, lastName: !data.lastName, email: !data.email }))
        :
        navigate('/setting')
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
          missingData={missingData.firstName}
        />
        <Input
          onChange={saveData}
          type='text'
          name='lastName'
          placeholder={!userData?.lastName ? language.LAST_NAME : ''}
          defaultValue={userData?.lastName ? userData?.lastName : ''}
          missingData={missingData.firstName}
        />
        {!userData?.email &&
          <Input
            onChange={saveData}
            type='email'
            name='email'
            placeholder={language.EMAIL}
            missingData={missingData.firstName}
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