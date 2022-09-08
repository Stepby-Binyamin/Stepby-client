import styles from "./style.module.css"
import React from 'react'

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'


const handleChange = (e) => {
    console.log(e.target.value);
}

const handleRadio = (e) => {
    console.log(e.target.value);
}

const UploadAnswer = () => {
    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"תשובה פשוטה"}
                icon={"/images/icon-btns/answer.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadAnswer"}
                placeholder="השאלה שלך"
                onChange={(e) => handleChange(e)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.radio}>
                <RadioBtn
                    arr={['שאלת חובה', 'שאלת רשות']}
                    changeFunc={(e) => handleRadio(e)}
                />
            </div>
        </div>
    </>
    )
}

export default UploadAnswer