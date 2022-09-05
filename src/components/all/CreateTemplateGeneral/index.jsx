import React, { version, useRef, useEffect } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"

const CreateTemplateGeneral = ({ placeholder, ...props }) => {
    const text = "זה שם שמיועד לשימוש פנימי שלך (הלקוחות שלך לא יהיו חשופים אליו)."

    return (
        <div className={styles.container}>
            <Keyboard placeholder={"שם התבנית החדשה..."} />


            <div className={styles.btn}> <BtnSubmitText color={"gray"} text="שמירה" icon={"v to text.svg"} /> </div>

        </div>
    )
}

export default CreateTemplateGeneral