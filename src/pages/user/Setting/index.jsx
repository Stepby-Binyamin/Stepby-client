import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import FakeData from "../../../data/fakeProjects"
import LiComp from './liComponnet'
import BtnIcon from "../../../components/common/BtnIcon"
import { useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'
import { useContext } from 'react'
import { users } from "../../../data/fakeProjects";



const Setting = ({ style = {}, ...props }) => {


    const [language, setLanguage] = useState(JSON.parse(localStorage.language));
    useEffect(() => {
        setLanguage(JSON.parse(localStorage.language))
    },[])
    console.log(FakeData.projects[0])
    const navigate = useNavigate()
    //  TODO: add real data from context
    const { userData, setUserData } = useContext(userContext)
    const user = { user: users[0], token: "1234567890" } //ימחק בהמשך 
    // const user = userData //יהיה במקום השורה שמעל 

    let interests = user.user.interest?.map(e => e.name).join()

    // const user = {
    //     firstName: "דורון",
    //     lastName: "מאיר",
    //     bizName: "דורון מאיר דיגיטל",
    //     interest: ["בניית אתרים ", "שיווק דיגיטלי"]
    // }
    // let interests = user.interest.join()

    const logof = () => {
        navigate("/login")
        setUserData({})
        localStorage.loginDate=""
        localStorage.userToken=""
        console.log("logout")
    }

    return (
        <div className={styles.Name} style={style} {...props} >
            <div>
                <ul>
                    <li >
                        <LiComp header={language.FIRST_AND_LAST_NAME} subTitle={user.user.firstName + " " + user.user.lastName}
                            link="/user-name" />
                    </li>
                    <li>
                        <LiComp header={language.BUSINESS_NAME} subTitle={user.user.bizName} link="/business-name" />
                    </li>
                    <li>
                        <LiComp header={language.AREAS_PRACTICE} subTitle={interests} link="/business-category" />
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