import styles from "./style.module.css"
import React, { useState } from 'react'

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"

const UploadCShortAnswer = () => {
    const [answer, setAnswer] = useState()


    const handleSubmitAnswer = () => {
        console.log(answer);
        console.log("handleSubmitAnswer");
    }

    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"מי המתחרה העיקרי שלך באינטרנט?"}
                icon={"/images/icon-btns/answer.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadCShortAnswer"}
                placeholder="התשובה שלך..."
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
        </div>
        <div className={styles.submitButton}>
            <div className={styles.sub}>
                <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
            </div>
        </div>    </>
    )
}

export default UploadCShortAnswer