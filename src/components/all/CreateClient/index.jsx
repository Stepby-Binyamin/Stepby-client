import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'

const CreateClient = ({ createProject = false, data_, templateId }) => {
    const { language, drawer } = useContext(mainContext)
    const navigate = useNavigate()

    const collect = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);

        const data = {
            fullName: fd.get("fullName", e.target.name.value),
            phoneNumber: fd.get("phoneNumber", e.target.phoneNumber.value),
            email: fd.get("email", e.target.email.value)
        }
        const dataToServer = { projectName: data_?.projectName, isNewClient: true, fullName: data.fullName, phoneNumber: data.phoneNumber, email: data.email }
        console.log(dataToServer);
        if (createProject) {
            apiCalls('post', `/project/createProject/${templateId}`, dataToServer)
                .then(projectId => {
                    console.log("res:", projectId)
                    navigate(`/project/biz/${projectId}`)
                })
                .catch(error => {
                    console.log(error)
                });
        }
        else {
            apiCalls('post', '/user/new-client', data)
        }
        drawer.setDrawer('')
    }


    return (
        <form className={styles.container} onSubmit={(e) => collect(e)} >
            <Keyboard placeholder={language.FULL_NAME_CUSTOMER} name="fullName" />
            <SubKeyboard placeholder={language.USER_PHONE} iconSrc={"/images/icons/tell.svg"} name="phoneNumber" />
            <SubKeyboard placeholder={language.EMAIL} iconSrc={"/images/icons/email.svg"} name="email" />
            <div className={styles.btn}> <BtnSubmitText color={"gray"} text={language.SAVE_CUSTOMER} icon={"v to text.svg"} /> </div>
            {createProject &&
                <div className={styles.btn}> <BtnSubmitText color={"gray"} text={language.CREATE_PROJECT} icon={"v to text.svg"} /> </div>
            }
        </form>
    )
}

export default CreateClient