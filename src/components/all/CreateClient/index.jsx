import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'
import { useState } from 'react'

const CreateClient = ({ createProject = false, data_, templateId }) => {
    const navigate = useNavigate()
    const { language, drawer } = useContext(mainContext)

    const [missingCustomerName, setMissingCustomerName] = useState(false)
    const [missingPhone, setMissingPhone] = useState(false)
    const [missingEmail, setMissingEmail] = useState(false)


    const collect = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = {
            fullName: fd.get("fullName", e.target.name.value),
            phoneNumber: fd.get("phoneNumber", e.target.phoneNumber.value),
            email: fd.get("email", e.target.email.value)
        }
        data.fullName === '' && setMissingCustomerName(true)
        data.phoneNumber === '' && setMissingPhone(true)
        data.email === '' && setMissingEmail(true)
        if (data.fullName === '' || data.phoneNumber === '' || data.email === '') return

        const dataToServer = {
            projectName: data_?.projectName,
            isNewClient: true,
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            email: data.email
        }
        createProject ?
            apiCalls('post', `/project/createProject/${templateId}`, dataToServer)
                .then(project => {
                    apiCalls("post", "/files/create-project", { bizId: project.creatorId, projectId: project._id })
                        .then(() => navigate(`/project/biz/${project._id}`))
                })
                .catch(error => { console.log("🚀 ~ file: index.jsx ~ line 30 ~ collect ~ error", error) })
            :
            apiCalls('post', '/user/new-client', data)
        drawer.setDrawer('')
    }

    return (
        <form className={styles.container} onSubmit={(e) => collect(e)} >
            <Keyboard
                placeholder={language.FULL_NAME_CUSTOMER}
                name="fullName"
                missingData={missingCustomerName} />
            <SubKeyboard
                placeholder={language.USER_PHONE}
                iconSrc={"/images/icons/tell.svg"}
                name="phoneNumber"
                missingData={missingPhone} />
            <SubKeyboard
                placeholder={language.EMAIL}
                iconSrc={"/images/icons/email.svg"}
                name="email"
                missingData={missingEmail} />
            <div className={styles.btn}>
                <BtnSubmitText color={"gray"} text={language.SAVE_CUSTOMER} icon={"v to text.svg"} />
            </div>
            {createProject &&
                <div className={styles.btn}>
                    <BtnSubmitText color={"gray"} text={language.CREATE_PROJECT} icon={"v to text.svg"} />
                </div>
            }
        </form>
    )
}
export default CreateClient