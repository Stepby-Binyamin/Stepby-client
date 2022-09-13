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


export default function UserName({ newUser = true, firstName, lastName }) {
  const { userData, setUserData } = useContext(userContext)
  console.log(userData);

  const { header } = useContext(mainContext)
  const navigate = useNavigate(),
    location = useLocation(),
    [data, setData] = useState(location.state),
    [language, setLanguage] = useState();

    useEffect(() => {
      header.setIsTitle(false)
      header.setIsHeaderSet(false)
      header.setIsArrow(false)
      setLanguage(JSON.parse(localStorage.language))
  }, [])

  const saveData = (e) => {
    if (e.target.name === 'firstName' && e.target.value !== '') {
      setData({ ...data, fName: e.target.value })
    }
    if (e.target.name === 'lastName' && e.target.value !== '') {
      setData({ ...data, lName: e.target.value })
    }
    if (e.target.name === 'email' && e.target.value !== '') {
      setData({ ...data, email: e.target.value })
    }
  }

  const handleClick = () => {
    navigate('/business-name', { state: data })
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text1={language.PERSONAL_INFORMATION} />
      </div>
      <div className={styles.input}>
        <Input autoFocus onChange={saveData} type='text' name='firstName' placeholder={newUser ? language.FIRST_NAME : ''} defaultValue={!newUser ? firstName : ''} />
        <Input onChange={saveData} type='text' name='lastName' placeholder={newUser ? language.LAST_NAME : ''} defaultValue={!newUser ? lastName : ''} />
        {newUser && <Input onChange={saveData} type='email' name='email' placeholder={language.EMAIL} />}
      </div>
      <div className={styles.btn}>
        {newUser ? <BtnSubmitIcon color='orange' icon='Arrow.svg' func={handleClick} /> : <BtnSubmitIcon color='orange' icon='v to text.svg' />}
      </div>
    </div>
  )
}