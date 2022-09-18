import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import LiComp from './liComponnet'
import BtnIcon from "../../../components/common/BtnIcon"
import { useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'
import { useContext } from 'react'
import { setToken } from '../../../functions/apiRequest'



const Setting = ({ style = {}, ...props }) => {


    const [language, setLanguage] = useState(JSON.parse(localStorage.language));
    useEffect(() => {
        setLanguage(JSON.parse(localStorage.language))
    },[])
    const navigate = useNavigate()
    //  TODO: add real data from context
    const { userData, setUserData } = useContext(userContext)
  

    let interests = "".concat(userData.categories)//.replaceAll(',',' ')

    const logof = () => {
        setUserData({})
        localStorage.user=""
        localStorage.token=""
        setToken('')
        navigate("/login")
        console.log("logout")
    }

    return (
        <div className={styles.Name} style={style} {...props} >
            <div>
                <ul>
                    <li>
                        <LiComp header={language.FIRST_AND_LAST_NAME} subTitle={userData.firstName + " " + userData.lastName}
                            link="/user-name" />
                    </li>
                    <li>
                        <LiComp header={language.BUSINESS_NAME} subTitle={userData.bizName} link="/business-name" />
                    </li>
                    <li>
                        <LiComp header={`${language.AREAS_PRACTICE} ${userData.bizName}`} subTitle={interests} link="/business-category" />
                    </li>
                </ul>
            </div>
            <div className={styles.btnff}>

                <BtnIcon icon="/images/icon-btns/exit.svg" text={language.LOGGING_OFF} onClick={logof} />
            </div>
        </div >
    )
}

export default Setting