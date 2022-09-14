import React, { useState, useContext } from 'react'
import styles from "./style.module.css"

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"
import userContext from "../../../context/userContext"

import axios from "axios"
import mainContext from "../../../context/mainContext"

const TempIMG = ({ data }) => {
    const { drawer } = useContext(mainContext)
    // console.log("data00",data);
    const [currentFile, setCurrentFile] = useState()
    const [question, setQuestion] = useState()
    const [fileName, setFileName] = useState()
    const [alert, setAlert] = useState("No file found.")

    const handleChange = (e) => {
        setQuestion(e.target.value);
    }

    const showInfo = (file) => {
        if (file.size / 1024 / 1024 > 4) {
            setAlert("file is too big")
            return
        }
        setFileName(file.name)
        setCurrentFile(file);
    }

    const handleSubmitAnswer = () => {
        data = {
            ...data,
            type: "img",
            owner: "biz",
            title: question,
            isRequired: "",
            content: ""
        }
        const formData = new FormData();
        formData.append("new_file", currentFile);
        formData.append("data", JSON.stringify(data))
        // console.log("new_file", currentFile);
        // console.log("data", data);
        axios({
            method: "post",
            // url: `http://localhost:5000/shaul/files/upload/`,
            data: formData

        })
            .then((result) => {
                console.log(result.data.uploadLocation);
                // setUploadLocation(result.data)
            })
            .catch((error) => console.log(error || "error"));

        drawer.setDrawer('')
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"תמונה"}
                icon={"/images/icon-btns/image.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"TempIMG"}
                htmlFor="fileUpload"
                placeholder="תיאור לתמונה"
                onChange={(e) => handleChange(e)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>טעינת קובץ</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])} />
                {fileName ? <span>{fileName}</span> : <span>{alert}</span>}

            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default TempIMG