import React, { version, useRef, useEffect } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import { languages } from '../../../functions/languages'


const CreateTemplate = ({ placeholder, iconSrc, ...props }) => {
    const dict = languages[0].dict;

    function collect(e) {
        e.preventDefault();
        const fd = new FormData(e.target)

        const data = {
            newTamplate: fd.get("newTamplate", e.target.newTamplate.value)
        }
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <form on onSubmit={(e) => collect(e)}>
                <Keyboard placeholder={dict.TEMPLATES_NAME} name="newTamplate" />
                <div className={styles.text}>{dict.TEMPLATES_TEXT}</div>

                <div className={styles.btn}> <BtnSubmitText color={"gray"} text={dict.SAVE} icon={"v to text.svg"} /> </div>
            </form>

        </div>
    )
}

export default CreateTemplate