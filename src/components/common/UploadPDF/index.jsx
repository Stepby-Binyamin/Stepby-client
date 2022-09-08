import styles from "./style.module.css"
import React, { useState } from 'react'
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"


const UploadPDF = () => {
    const [fileName, setFileName] = useState()
    const [currentFile, setCurrentFile] = useState()

    const [isButton, setIsButton] = useState(false)

    const showInfo = (file) => {
        console.log(file.size);
        setCurrentFile(file);
        // if (file.size / 1024 > 4) {
        //     alert("file is too big")
        //     return
        // }
        setIsButton(true)
    }

    const handleSubmitAnswer = () => {
        console.log(currentFile);
        console.log(fileName);
        console.log("handleSubmitAnswer");
    }
console.log(isButton);
    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"העלאת קובץ"}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadPDF"}
                placeholder="תיאור למסמך"
                onChange={(e) => setFileName(e.target.value)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
                htmlFor="fileUpload"
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>טעינת קובץ</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])} />
            </div>
            <div className={styles.submitButton}>
                {isButton && <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />}
            </div>
        </div>
    </>
    )
}

export default UploadPDF