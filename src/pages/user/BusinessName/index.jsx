import React from 'react'
import styles from "./style.module.css"
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import { useContext, useEffect, useState } from 'react'
import mainContext from '../../../context/mainContext'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import { useLocation, useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'
import apiCalls from '../../../functions/apiRequest'

export default function BusinessName() {

    const { header } = useContext(mainContext),
        { userData, setUserData } = useContext(userContext),
        navigate = useNavigate(),
        [bizName, setBizName] = useState(),
        [language, setLanguage] = useState(JSON.parse(localStorage.language));
    useEffect(() => {
        header.setIsTitle(false)
        header.setIsHeaderSet(false)
        header.setIsArrow(false)
        setLanguage(JSON.parse(localStorage.language))
        console.log('bizzzz: ', userData);
    }, [])

    const handleChange = (e) => {
        setBizName(e.target.value)
    }



    const handleClick = (newUser) => {
        apiCalls('put', '/user/edit-biz', { bizName: bizName }).then(res => {
            console.log('/user/edit-biz',res);
            //adding apicall to create client's biz folder - shaul
            apiCalls("post", "/files/createbiz", res)
            setUserData(res)
            if (typeof res === 'object') localStorage.user = JSON.stringify(res)
            newUser ? navigate('/business-category')
                : navigate('/setting')
        }).catch(err => console.log(err))

    }


    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <UserTitle text1={language.BUSINESS_NAME_HEADER} />
            </div>
            <div className={styles.input}>
                <Input autoFocus type='text' onChange={handleChange} placeholder={!userData?.bizName ? language.YOUR_BUSINESS_NAME : ''} defaultValue={userData?.bizName ? userData?.bizName : ''} />
            </div>
            <div className={styles.btn}>
                <BtnSubmitIcon color='orange' icon={userData?.bizName ? 'v to text.svg' : 'Arrow.svg'} func={() => handleClick(userData?.bizName ? false : true)} />
            </div>
        </div>
    )
}