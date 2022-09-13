import styles from "./style.module.css"
import React , { useState } from 'react'

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from "../BtnSubmitText"

const TempFile = () => {
    const [radio, setRadio] = useState()
    const [answer, setAnswer] = useState()

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    const handleRadio = (e) => {
        setRadio(e.target.value)
    }

    const handleSubmitAnswer = (e) => {
        console.log(radio);
        console.log(answer);
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"העלאת קובץ / צילום"}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }} />
            <Input
                name={"TempFile"}
                placeholder="תיאור לקובץ"
                onChange={(e) => handleChange(e)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.radio}>
                <RadioBtn
                    arr={['רשות', 'חובה']}
                    changeFunc={(e) => handleRadio(e)}
                />
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default TempFile