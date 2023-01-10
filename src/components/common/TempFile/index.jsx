import styles from "./style.module.css"
import React, { useState, useContext } from 'react'

import mainContext from "../../../context/mainContext"

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from "../BtnSubmitText"

import apiCalls from "../../../functions/apiRequest"
import RadioBtnWithIcon from "../../all/radioBtn/WithIcon"

const TempFile = ({ data, step, project, id, stepId }) => {
    const { language, drawer } = useContext(mainContext)

    const [question, setQuestion] = useState()
    const [isRequired, setIsRequired] = useState()

    const handleChange = (e) => {
        setQuestion(e.target.value);
    }

    const handleRadio = (e) => {
        // console.dir(e.target.value);
        e.target.value === language.ASK_REQ ? setIsRequired(true) : setIsRequired(false)
    }

    const handleSubmitAnswer = async () => {
        data = {
            ...data,
            type: "file",
            owner: "client",
            title: question,
            isRequired: isRequired,
            content: "",
            step,
            project,
            id,
            stepId
            // i have to send this info
            // bizName,
            // projectName,
            // stepName,
            // description, // important ???
        }
        const formData = new FormData();
        formData.append("objShortQuestion", JSON.stringify(data))
        const result = await apiCalls('post', '/files/upload-file/', formData)
        console.log("apiCalls result", result);

        drawer.setDrawer('')
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={language.UPLOAD}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }} />
            <Input
                name={"TempFile"}
                placeholder={language.DESCRIPTION_FILE}
                onChange={(e) => handleChange(e)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.radio}>
                {/* <RadioBtn
                    arr={['שאלת חובה', 'שאלת רשות']}
                    changeFunc={(e) => handleRadio(e)}
                /> */}
                <RadioBtnWithIcon
                    changeFunc={(e) => handleRadio(e)}
                    obj={[{ name: language.ASK_REQ }, { name: language.ASK_PER }]}
                />
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text={language.SAVE} func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default TempFile