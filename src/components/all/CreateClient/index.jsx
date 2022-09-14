import React, {  useContext} from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import mainContext from "../../../context/mainContext"
import apiRequest from '../../../functions/apiRequest'

const CreateClient = () => {
  
    const {language, drawer}= useContext(mainContext)

    function collect(e) {
        e.preventDefault();
        const fd = new FormData(e.target);

        const data = {
            name: fd.get("name", e.target.name.value),
            phoneNumber: fd.get("phoneNumber", e.target.phoneNumber.value),
            email: fd.get("email", e.target.email.value)
        }
        apiRequest('post','/user/new-client',data)
        drawer.setDrawer('')
    }


    return (
        <form className={styles.container} onSubmit={(e) => collect(e)} >
            <Keyboard placeholder={language.FULL_NAME_CUSTOMER} name="name" />
            <SubKeyboard placeholder={language.PHONE} iconSrc={"/images/icons/tell.svg"} name="phoneNumber" />
            <SubKeyboard placeholder={language.EMAIL} iconSrc={"/images/icons/email.svg"} name="email" />
            <div className={styles.btn}> <BtnSubmitText color={"gray"} text={language.SAVE_CUSTOMER} icon={"v to text.svg"} /> </div>
        </form>
    )
}

export default CreateClient