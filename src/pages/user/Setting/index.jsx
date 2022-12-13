import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import LiComp from './liComponnet'
import BtnIcon from "../../../components/common/BtnIcon"
import { useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'
import { useContext } from 'react'
import { setToken } from '../../../functions/apiRequest'
import mainContext from '../../../context/mainContext'

const Setting = ({ style = {}, ...props }) => {
    const navigate = useNavigate()
    const { header, language } = useContext(mainContext)
    const { userData, setUserData } = useContext(userContext)

    const [interests, setInterests] = useState("")

    useEffect(() => {
        header.setIsArrow(true)
        header.setIsHeaderSet(false)
    }, [])

    useEffect(() => {
        let interestsStr = []
        userData?.categories?.map(cat => interestsStr.push(cat.categoryName))
        interestsStr = interestsStr.toString().replaceAll(',', ', ')
        setInterests(interestsStr)
    }, [userData])

    const logOff = () => {
        setUserData({})
        localStorage.user = ""
        localStorage.token = ""
        setToken('')
        navigate("/login")
    }

    return (
        <div className={styles.name} style={style} {...props} >
            <div>
                <ul>
                    <li>
                        <LiComp header={language.FIRST_AND_LAST_NAME}
                            subTitle={userData.firstName + " " + userData.lastName}
                            link="/user-name" />
                    </li>
                    <li>
                        <LiComp header={language.BUSINESS_NAME} subTitle={userData.bizName} link="/business-name" />
                    </li>
                    <li>
                        <LiComp header={language.PRACTICE_AREAS} subTitle={interests} link="/business-category" />
                    </li>
                </ul>
            </div>
            <div className={styles.btn_log_off}>
                <BtnIcon icon="/images/icon-btns/exit.svg" text={language.LOGGING_OFF} onClick={logOff} />
            </div>
        </div >
    )
}
export default Setting