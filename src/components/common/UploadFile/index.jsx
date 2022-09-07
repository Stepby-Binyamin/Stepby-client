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

const UploadFile = () => {
    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"העלאת קובץ / צילום"}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }} />
            <Input
                name={"UploadFile"}
                placeholder="תיאור לקובץ"
                onChange={(e) => handleChange(e)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.radio}>
                <RadioBtn
                    arr={['רשות', 'חובה']}
                    changeFunc={(e) => handleRadio(e)}
                />
            </div>
        </div>
    </>
    )
}

export default UploadFile