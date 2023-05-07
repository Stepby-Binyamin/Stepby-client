import React, { useContext } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import { useNavigate } from "react-router-dom";
import mainContext from '../../../context/mainContext'
import apiCalls from '../../../functions/apiRequest'
import { useState } from 'react'

const RenameProject = ({ oldName, renameProjectFunc }) => {
    const { language } = useContext(mainContext)
    const [nameProject, setNameProject] = useState(oldName)
    const [isLoading, setIsLoading] = useState(false)

    const btnSubmit = (e) => {
        setIsLoading(true)
        renameProjectFunc(e, nameProject)
    }
    return (
        <div className={styles.container}>
            <form onSubmit={btnSubmit}>
                <input className={styles.keyboard} value={nameProject} onChange={e => setNameProject(e.target.value)} />
                <div className={styles.btn}>
                    <BtnSubmitText
                        color={"gray"}
                        text={language.SAVE}
                        icon={"v to text.svg"}
                        isLoading={isLoading} />
                </div>
            </form>
        </div>
    )
}
export default RenameProject