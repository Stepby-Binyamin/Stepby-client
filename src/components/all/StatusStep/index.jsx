import styles from './style.module.css';
import React, { useContext } from 'react'
import mainContext from "../../../context/mainContext"

const StatusStep = ({ isPreview = false, user, numOfStage, time, ...props }) => {
    const { language } = useContext(mainContext)

    return (
        <div className={`${time ? styles.supremeBox : styles.supremeBoxCenter}`}>
            {isPreview ?
                <div className={styles.preview}>
                    <img src="/images/icons/preview.svg" alt="preview" />
                    <div className={styles.previewText}>{language.PREVIEW}</div>
                </div>
                :
                <div className={`${time ? styles.currentStage : styles.currentStageCenter}`}>
                    <div className={`${time ? styles.rightSide : styles.center}`}>
                        <div className={styles.stageNow}>{language.CURRENT_STEP}  </div>
                        <div className={styles.stageNum}>{numOfStage + 1}</div>
                        <div className={styles.waitingFor}>{`${language.CURRENTLY_WAITING_FOR}${user}`}</div>
                    </div>
                    <div className={`${time ? styles.leftSide : styles.center}`}>
                        {time && <div> {time % 7 === 0 ?
                            <div className={styles.waitingTime}> {time / 7 + "w"} </div>
                            : <div className={styles.waitingTime}> {time + "d"} </div>}
                        </div>}
                    </div>
                </div>}
        </div>
    );
}
export default StatusStep