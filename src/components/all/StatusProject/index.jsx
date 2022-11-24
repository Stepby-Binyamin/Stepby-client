import styles from "./style.module.css"
import React, { useContext } from 'react'
import mainContext from "../../../context/mainContext"

const StatusProject = ({ isLink, name, isCreatorApprove, status, completed, totalTask, clientPhone, projectId, style = {}, ...props }) => {
    const { language } = useContext(mainContext)

    const phoneUpdate = clientPhone && clientPhone.replace("0", "+972")
    const message = `http://localhost:3000/project/client/${projectId}` //TODO- localhost, message

    const careOf = ((isLink && isCreatorApprove) || (!isLink && !isCreatorApprove)) ? language.AWAIT : language.CARE_OF

    console.log("status === done:", status === "done");
    return (
        <div className={styles.large} {...props}>
            {status === "done" ?
                <div>
                    <img src={"/images/icons/doneProject.svg"} alt="doneProject" />
                    <div>{language.FINISH_PROJECT}</div>
                </div>
                :
                <>
                    <div className={styles.completed}>
                        <img src="/images/icons/clock.svg" alt="clock" />
                        <span >{completed}/{totalTask}  {language.COMPLET}  </span>
                    </div>
                    <p> {`${careOf} ${name}`}</p>
                    {isLink && (
                        <div className={styles.link}>
                            <img src="/images/icons/link.svg" alt="link" />
                            <a href={`https://wa.me/${phoneUpdate}?text=${message}`}> {language.SHARE_WITH_CLIENT}</a>
                        </div>)}
                </>
            }
        </div>
    );
}

export default StatusProject