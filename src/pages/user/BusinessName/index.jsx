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

const BusinessName = () => {
    const navigate = useNavigate()
    const { header } = useContext(mainContext)
    const { userData, setUserData } = useContext(userContext)

    const [bizName, setBizName] = useState()
    const [language, setLanguage] = useState({});

    const [missingBizName, setMissingBizName] = useState(false)

    useEffect(() => {
        header.setIsTitle(false)
        header.setIsArrow(userData?.bizName)
        header.setIsHeaderSet(false)
        localStorage.language && setLanguage(JSON.parse(localStorage.language))
    }, [])

    const handleClick = (newUser) => {
        console.log("🚀 ~ file: index.jsx ~ line 28 ~ BusinessName ~ bizName", bizName)
        if (bizName) {
            apiCalls('put', '/user/edit-biz', { bizName: bizName })
                .then(res => {
                    //TODO- adding apicall to create client's biz folder - shaul
                    apiCalls("post", "/files/create-biz", res)
                    setUserData(res)
                    // if (typeof res === 'object') 
                    localStorage.user = JSON.stringify(res)
                    newUser ? navigate('/business-category') : navigate('/setting')
                })
                .catch(err => console.log(err))
        }
        else {
            newUser ?
                setMissingBizName(true)
                :
                navigate('/setting')
        }
    }

    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <UserTitle text1={language.BUSINESS_NAME_HEADER} />
            </div>
            <div className={styles.input}>
                <Input autoFocus
                    type='text'
                    onChange={(e) => setBizName(e.target.value)}
                    placeholder={!userData?.bizName ? language.YOUR_BUSINESS_NAME : ''}
                    defaultValue={userData?.bizName ? userData?.bizName : ''}
                    missingData={missingBizName} />
            </div>
            <div className={styles.btn}>
                <BtnSubmitIcon color='orange'
                    icon={userData?.bizName ? 'v to text.svg' : 'Arrow.svg'}
                    func={() => handleClick(userData?.bizName ? false : true)} />
            </div>
        </div>
    )
}
export default BusinessName