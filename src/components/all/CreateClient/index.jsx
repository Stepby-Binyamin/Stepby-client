import React, { version, useRef, useEffect } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"



const CreateClient = () => {
    
    


    return (
        <form className={styles.container} >
            <Keyboard placeholder={"שם מלא של הלקוח"} name="name"  />
            <SubKeyboard placeholder={"טלפון"} iconSrc={"/images/icons/tell.svg"} name="phoneNumber"  />
            <SubKeyboard placeholder={"אימייל"} iconSrc={"/images/icons/email.svg"} name="email"  />
            <div className={styles.btn}> <BtnSubmitText color={"gray"} text="שמירת לקוח חדש" icon={"v to text.svg"} /> </div>
        </form>
    )
}

export default CreateClient