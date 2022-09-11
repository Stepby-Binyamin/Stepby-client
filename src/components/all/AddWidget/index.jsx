import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
export const AddWidget = () => {
    return (
        <div className={styles.addWidget}>
            <div><label>איסוף מידע מהלקוח</label></div>
            <BtnIcon text={"תשובה פשוטה"} icon={"/images/icon-btns/answer.svg"} style={{ "margin-bottom": "15px" }} />
            <BtnIcon text={"העלאת קובץ / צילום"} icon={"/images/icon-btns/file.svg"} style={{ "margin-bottom": "15px" }} />
            <BtnIcon text={"בחירה מרשימה"} icon={"/images/icon-btns/list.svg"} isSoon={true} style={{ "margin-bottom": "15px" }} />
            <BtnIcon text={"דירוג"} icon={"/images/icon-btns/grading.svg"} isSoon={true} style={{ "margin-bottom": "15px" }} />
            <BtnIcon text={"דרישת תשלום"} icon={"/images/icon-btns/payment.svg"} isSoon={true} style={{ "margin-bottom": "32px" }} />
            <div><label>הצגת מידע נוסף ללקוח</label></div>
            <BtnIcon text={"תמונה"} icon={"/images/icon-btns/img.svg"} style={{ "margin-bottom": "15px" }} />
            <BtnIcon text={"PDF קובץ "} icon={"/images/icon-btns/pdf.svg"} style={{ "margin-bottom": "15px" }} />
            <BtnIcon text={"סרטון"} icon={"/images/icon-btns/video.svg"} isSoon={true} style={{ "margin-bottom": "15px" }} />
        </div>
    )
}

