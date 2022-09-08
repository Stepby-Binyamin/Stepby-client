import React, { useState } from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import { useLocation, useNavigate } from 'react-router-dom'
// import userContext from '../../../context/userContext'


export default function UserName({ newUser = true, firstName, lastName }) {
  // const { userData, setUserData } = useContext(userContext)
  // console.log(userData);
  const { header } = useContext(mainContext)
  const navigate = useNavigate(),
    location = useLocation(),
    [data, setData] = useState(location.state)

  useEffect(() => {
    header.setIsTitle(false)
    console.log(data);
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
        <UserTitle text={languages[0].dict.PERSONAL_INFORMATION} />
      </div>
      <div className={styles.input}>
        <Input onChange={saveData} type='text' name='firstName' placeholder={newUser ? languages[0].dict.FIRST_NAME : ''} defaultValue={!newUser ? firstName : ''} />
        <Input onChange={saveData} type='text' name='lastName' placeholder={newUser ? languages[0].dict.LAST_NAME : ''} defaultValue={!newUser ? lastName : ''} />
        {newUser && <Input onChange={saveData} type='email' name='email' placeholder={languages[0].dict.EMAIL} />}
      </div>
      <div className={styles.btn}>
        {newUser ? <BtnSubmitIcon color='orange' icon='Arrow.svg' func={handleClick} /> : <BtnSubmitIcon color='orange' icon='v to text.svg' />}
      </div>
    </div>
  )
}