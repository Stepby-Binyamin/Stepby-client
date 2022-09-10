import React from 'react'
import styles from "./style.module.css"
import { languages } from "../../../functions/languages.js"
import FakeData from "../../../data/fakeProjects"
import LiComp from './liComponnet'
import BtnIcon from "../../../components/common/BtnIcon"
import { useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'
import { useContext } from 'react'


const Setting = ({ style = {}, ...props }) => {



    const lan = languages[0].dict
    console.log(FakeData.projects[0])
    const navigate = useNavigate()
    const { userData, setUserData } = useContext(userContext)
    //  TODO: add real data from context
    // const user = userData
    // let interests = user.interest.map(e => e.name).join()

    const user = {
        firstName: "דורון",
        lastName: "מאיר",
        bizName: "דורון מאיר דיגיטל",
        interest: ["בניית אתרים ", "שיווק דיגיטלי"]
    }
    let interests = user.interest.join()

    const logof = () => {
        navigate("/login")
        setUserData({})
        localStorage.clear()
        console.log("logout")
    }

    return (
        <div className={styles.Name} style={style} {...props} >
            <div>
                <ul>
                    <li >
                        <LiComp header={lan.FIRST_AND_LAST_NAME} subTitle={user.firstName + " " + user.lastName}
                            link="/user-name" />
                    </li>
                    <li>
                        <LiComp header={lan.BUSINESS_NAME} subTitle={user.bizName} link="/business-name" />
                    </li>
                    <li>
                        <LiComp header={lan.AREAS_PRACTICE} subTitle={interests} link="/business-category" />
                    </li>
                </ul>
            </div>
            <div className={styles.btnff}>

                <BtnIcon icon="/images/icon-btns/exit.svg" text={lan.LOGGING_OFF} onClick={logof} />
            </div>
        </div >
    )
}

export default Setting