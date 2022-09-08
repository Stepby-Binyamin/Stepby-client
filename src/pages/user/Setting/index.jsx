import React from 'react'
import styles from "./style.module.css"
import { languages } from "../../../functions/languages.js"
import FakeData from "../../../data/fakeProjects"
import LiComp from './liComponnet'
import BtnIcon from "../../../components/common/BtnIcon"
import { useNavigate } from 'react-router-dom'

const Setting = ({ style = {}, ...props }) => {
    const lan = languages[0].dict
    console.log(FakeData.projects[0])
    const navigate = useNavigate()
    //  TODO: add real data from context
    const user = {
        firstName: "דורון",
        lastName: "מאיר",
        businessName: "דורון מאיר דיגיטל",
        interests: ["בניית אתרים ", "שיווק דיגיטלי"]
    }
    let interest = user.interests.join()

    const logof = () => {
        navigate("/login")
        console.log("need fuction exit")
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
                        <LiComp header={lan.BUSINESS_NAME} subTitle={user.businessName} link="/business-name" />
                    </li>
                    <li>
                        <LiComp header={lan.AREAS_PRACTICE} subTitle={interest} link="/business-category" />
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