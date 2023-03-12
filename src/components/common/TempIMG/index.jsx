import React, { useState, useContext } from 'react'
import styles from "./style.module.css"
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'

const TempIMG = ({ data, step, project, id, stepId }) => {
    const { language, drawer } = useContext(mainContext)
    // console.log("data00",data);
    const [currentFile, setCurrentFile] = useState()
    const [question, setQuestion] = useState()
    const [fileName, setFileName] = useState()
    const [alert, setAlert] = useState("")

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
    const handleSubmitAnswer = async () => {
        data = {
            ...data,
            type: "img",
            owner: "biz",
            title: question,
            isRequired: "",
            content: "",
            step,
            project,
            id,
            stepId
            // i have to send this info
            // bizName,
            // projectName,
            // stepName,
        }
        const formData = new FormData();
        formData.append("new_file", currentFile);
        formData.append("objShortQuestion", JSON.stringify(data))
        console.log("🚀 ~ file: index.jsx:48 ~ handleSubmitAnswer ~ formData", formData)

        const result = await apiCalls('post', '/files/upload-file/', formData)
        console.log("apiCalls result", result);

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
                name={"TempIMG"}
                htmlFor="fileUpload"
                placeholder={language.DESCRIPTION_IMG}
                onChange={(e) => handleChange(e)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.upload}>
                <label htmlFor="fileUpload">
                    <img src={"/images/icon-btns/Upload.svg"} alt="" />
                    <span>{language.FILE_LOAD}</span>
                </label>
                <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])} />
                {fileName ? <span>{fileName}</span> : <span>{alert}</span>}
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text={language.SAVE} func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default TempIMG