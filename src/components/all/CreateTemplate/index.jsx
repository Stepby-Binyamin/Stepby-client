import React, { version, useRef, useEffect } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"

const CreateTemplate = ({ placeholder, iconSrc, ...props }) => {
    const text = "זה שם שמיועד לשימוש פנימי שלך (הלקוחות שלך לא יהיו חשופים אליו)."

    function collect(e){
        e.preventDefault();
        const fd = new FormData(e.target)

        const data ={
            newTamplate: fd.get("newTamplate", e.target.newTamplate.value)
        }
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <form on onSubmit={(e)=> collect(e)}>
            <Keyboard placeholder={"שם התבנית החדשה..."} name="newTamplate" />
            <div className={styles.text}>{text}</div>

            <div className={styles.btn}> <BtnSubmitText color={"gray"} text="שמירה" icon={"v to text.svg"} /> </div>
            </form>

        </div>
    )
}

export default CreateTemplate