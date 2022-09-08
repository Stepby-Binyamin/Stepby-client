import styles from "./style.module.css"
import React from 'react'

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"

const handleChange = (e) => {
    console.log(e.target.value);
}

const UploadCShortAnswer = () => {
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
                onChange={(e) => handleChange(e)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
        </div>
        <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" />
    </>
    )
}

export default UploadCShortAnswer