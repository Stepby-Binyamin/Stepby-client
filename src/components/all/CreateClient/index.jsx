import React, { version, useRef, useEffect } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"

const CreateClient = () => {


    return (
        <div className={styles.container}>
            <Keyboard placeholder={"שם מלא של הלקוח"} />
            <SubKeyboard placeholder={"טלפון"} iconSrc={"/images/icons/tell.svg"} />
            <SubKeyboard placeholder={"אימייל"} iconSrc={"/images/icons/email.svg"} />
            <div className={styles.btn}> <BtnSubmitText color={"gray"} text="שמירת לקוח חדש" icon={"v to text.svg"} /> </div>

        </div>
    )
}

export default CreateClient