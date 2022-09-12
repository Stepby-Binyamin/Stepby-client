import styles from "./style.module.css"
import React, { useContext, useState } from 'react'
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"
import mainContext from "../../../context/mainContext"

import axios from "axios"


const TempPDF = ({ setIsUploaded }) => {
    const { drawer } = useContext(mainContext)

    const [description, setDescription] = useState()
    const [currentFile, setCurrentFile] = useState()


    const showInfo = (file) => {

        setCurrentFile(file);

    }

    const handleSubmitAnswer = () => {
        currentFile && setIsUploaded(true)
        drawer.setDrawer('')
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"העלאת קובץ"}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"TempPDF"}
                placeholder="תיאור למסמך"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
                htmlFor="fileUpload"
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>טעינת קובץ</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])} />
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default TempPDF