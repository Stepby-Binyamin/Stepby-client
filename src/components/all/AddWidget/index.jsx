import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
export const AddWidget = ({func}) => {


    return (
        <div className={styles.addWidget}>
            <div><label>איסוף מידע מהלקוח</label></div>
            <BtnIcon onClick={(e)=>func('answer')} text={"תשובה פשוטה"} icon={"/images/icon-btns/answer.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon onClick={()=>func('file')} text={"העלאת קובץ / צילום"} icon={"/images/icon-btns/Upload.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon onClick={(e)=>func('list')} text={"בחירה מרשימה"} icon={"/images/icon-btns/list.svg"} isSoon={true} style={{ "marginBottom": "15px" }} />
            <BtnIcon onClick={(e)=>func('grading')} text={"דירוג"} icon={"/images/icon-btns/grading.svg"} isSoon={true} style={{ "marginBottom": "15px" }} />
            <BtnIcon onClick={(e)=>func('payment')} text={"דרישת תשלום"} icon={"/images/icon-btns/payment.svg"} isSoon={true} style={{ "marginBottom": "32px" }} />
            <div><label>הצגת מידע נוסף ללקוח</label></div>
            <BtnIcon onClick={(e)=>func('img')} text={"תמונה"} icon={"/images/icon-btns/image.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon onClick={(e)=>func('pdf')} text={"PDF קובץ "} icon={"/images/icon-btns/filePDF.svg"} style={{ "marginBottom": "15px" }} />
            <BtnIcon onClick={(e)=>func('video')} text={"סרטון"} icon={"/images/icon-btns/video.svg"} isSoon={true} style={{ "marginBottom": "15px" }} />
        </div>
    )
}

