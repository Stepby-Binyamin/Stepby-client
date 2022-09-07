import styles from "./style.module.css"
import React from 'react'
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"

const handleChange = (e) => {
    console.log(e.target.value);
}

const UploadPDF = () => {
    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"PDF קובץ "}
                icon={"/images/icon-btns/filePDF.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadPDF"}
                placeholder="תיאור למסמך"
                onChange={(e) => handleChange(e)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
                htmlFor="fileUpload"
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>טעינת קובץ</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" />
            </div>


            {/* <BtnIcon text={"תשובה פשוטה"} icon={"/images/icon-btns/answer.svg"} style={{ "marginBottom": "15px" }} /> */}
            {/* <BtnIcon text={"העלאת קובץ / צילום"} icon={"/images/icon-btns/Upload.svg"} style={{ "marginBottom": "15px" }} /> */}
        </div>
    </>
    )
}

export default UploadPDF