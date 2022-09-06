import React, { version, useRef, useEffect } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import { languages } from '../../../functions/languages'

const CreateClient = () => {
    const dict = languages[0].dict;

    function collect(e) {
        e.preventDefault();
        const fd = new FormData(e.target);

        const data = {
            name: fd.get("name", e.target.name.value),
            phoneNumber: fd.get("phoneNumber", e.target.phoneNumber.value),
            email: fd.get("email", e.target.email.value)
        }

        console.log(data)
        // now all the data inside FormData (fd).
    }


    return (
        <form className={styles.container} onSubmit={(e) => collect(e)} >
            <Keyboard placeholder={dict.FULL_NAME_CUSTOMER} name="name" />
            <SubKeyboard placeholder={dict.PHONE} iconSrc={"/images/icons/tell.svg"} name="phoneNumber" />
            <SubKeyboard placeholder={dict.EMAIL} iconSrc={"/images/icons/email.svg"} name="email" />
            <div className={styles.btn}> <BtnSubmitText color={"gray"} text={dict.SAVE_CUSTOMER} icon={"v to text.svg"} /> </div>
        </form>
    )
}

export default CreateClient