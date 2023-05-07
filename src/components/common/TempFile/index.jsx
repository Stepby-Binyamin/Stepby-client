import styles from "./style.module.css"
import React, { useState, useContext } from 'react'

import mainContext from "../../../context/mainContext"

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from "../BtnSubmitText"

import apiCalls from "../../../functions/apiRequest"
import RadioBtnWithIcon from "../../all/radioBtn/WithIcon"

const TempFile = ({ data, setInformation }) => {
    const { language, drawer } = useContext(mainContext)

    const [question, setQuestion] = useState()
    const [isRequired, setIsRequired] = useState()

    const handleChange = (e) => setQuestion(e.target.value)

    const handleRadio = (e) => {
        e.target.value === language.ASK_REQ ? setIsRequired(true) : setIsRequired(false)
    }

    const handleSubmitAnswer = async () => {
        data = {
            ...data,
            type: "file",
            owner: "client",
            title: question,
            isRequired: isRequired
        }
        const formData = new FormData();
        formData.append("data", JSON.stringify(data))
        const result = await apiCalls('post', '/files/upload-file/', formData)
        setInformation((curr) => ({ ...curr, step: result }))
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
                    obj={[{ name: language.REQUIRED }, { name: language.PERMISSION }]}
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