import styles from "./style.module.css"
import React, { useContext, useState } from 'react'
import axios from 'axios'
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"
import mainContext from "../../../context/mainContext"

const UploadCShortAnswer = ({ setIsAnswer }) => {
    const { drawer, language } = useContext(mainContext) 

    const [description, setDescription] = useState()
    const [readedFiles, setReadedFiles] = useState()

    const handleSubmitAnswer = () => {

        const formData = new FormData();
        formData.append("objShortQuestion", JSON.stringify({question: language.SHORT_QUESTION01, answer: description, project: project, step: step, date: new Date()}))
        // formData.append("question",language.SHORT_QUESTION01)
        // formData.append("description", description);
        // formData.append("project", project);
        // formData.append("step", step);

        axios({
            method: "post",
            url: `http://localhost:5000/shaul/files/upload/`,
            data: formData

        })
            .then((result) => setReadedFiles(result))
            .catch((error) => console.log(error || "error"));


        description && setIsAnswer(true)
        drawer.setDrawer('')
    }

    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={language.SHORT_QUESTION01}
                icon={"/images/icon-btns/answer.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadCShortAnswer"}
                placeholder={language.YOUR_ANSWER}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
        </div>
        <div className={styles.submitButton}>
            <div className={styles.sub}>
                <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
            </div>
        </div>
    </>
    )
}

export default UploadCShortAnswer