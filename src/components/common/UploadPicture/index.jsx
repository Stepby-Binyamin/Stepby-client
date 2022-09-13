import React, { useState, useContext} from 'react'
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css"

import BtnIcon from "../../../components/common/BtnIcon"
import Input from "../../../components/common/Input/Input.jsx"
import BtnSubmitText from "../BtnSubmitText"


const UploadPicture = () => {

const {language}= useContext(mainContext)
    const [currentFile, setCurrentFile] = useState()
    const [answer, setAnswer] = useState()

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    const showInfo = (file) => {
        console.log(file.size);
        setCurrentFile(file);
        // if (file.size / 1024 > 4) {
        //     alert("file is too big")
        //     return
        // }
        // setIsButton(true)
    }
    // const [isButton, setIsButton] = useState(false)

    const handleSubmitAnswer = () => {
        console.log(currentFile);
        console.log(answer);
        console.log("handleSubmitAnswer");
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"תמונה"}
                icon={"/images/icon-btns/image.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadPicture"}
                htmlFor="fileUpload"
                placeholder="תיאור לתמונה"
                onChange={(e) => handleChange(e)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>טעינת קובץ</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])}/>
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default UploadPicture