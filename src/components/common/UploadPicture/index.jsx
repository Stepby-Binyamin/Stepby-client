import React, { useState, useContext} from 'react'
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css"

import BtnIcon from "../../../components/common/BtnIcon"
import Input from "../../../components/common/Input/Input.jsx"
import BtnSubmitText from "../BtnSubmitText"

import axios from "axios"
import mainContext from "../../../context/mainContext"



const UploadPicture = ({ setIsUploaded, setUploadLocation, step, project }) => {
    const { drawer, language} = useContext(mainContext)

    const [description, setDescription] = useState()
    const [currentFile, setCurrentFile] = useState()
    const [fileName, setFileName] = useState()

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const showInfo = (file) => {

        const typeArr = file.name.split(".");

        if (typeArr[1] !== "pdf" && typeArr[1] !== "jpeg" && typeArr[1] !== "jpg" && typeArr[1] !== "png") {
            return console.log("file is not supported");
        }

        if (file.size / 1024 / 1024 > 4) return alert("This file is too big!!!");

        setFileName(file.name)
        setCurrentFile(file);
    }

    const handleSubmitAnswer = () => {

        const formData = new FormData();
        formData.append("new_file", currentFile);
        formData.append("objShortQuestion", JSON.stringify({question: language.SHORT_QUESTION01, answer: description, project: project, step: step, date: new Date()}))

        // formData.append("description", description);
        // formData.append("project", project);
        // formData.append("step", step);

        axios({
            method: "post",
            url: `http://localhost:5000/shaul/files/upload/`,
            data: formData

        })
            .then((result) => {
                console.log(result.data.uploadLocation);
                setUploadLocation(result.data)
            })
            .catch((error) => console.log(error || "error"));

        currentFile && setIsUploaded(true)
        drawer.setDrawer('')
    }


    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={language.IMG}
                icon={"/images/icon-btns/image.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadPicture"}
                htmlFor="fileUpload"
                placeholder={language.DESCRIPTION_IMG}
                onChange={(e) => handleChange(e)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>{language.FILE_LOAD}</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])} />
                {fileName ? <span>{fileName}</span> : <span>No file found.</span>}
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text={language.SAVE} func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default UploadPicture