import styles from "./style.module.css"
import React, { useContext, useEffect, useState } from 'react'

import StatusStep from "../../../components/all/StatusStep"

import BtnConfirm from "../../../components/common/BtnSubmitIcon"
import Answer from "../../../components/all/Answer"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import mainContext from "../../../context/mainContext"
import Confirm from "../../../components/all/Confirm"

import ImageView from "../../../components/all/ImageView"

import projects from "../../../data/fakeProjects.js"

const BExample2 = () => {
    const index = 1
    const findStep = projects.projects[0].steps.find(step => step.index === index)

    const { header, drawer } = useContext(mainContext)

    // Calculate the Days
    const d = new Date()
    var Difference_In_Time = d.getTime() - projects.projects[0].lastApprove.getTime()
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24))

    useEffect(() => {
        header.setDrawerContent(<Confirm />)
        header.setTitle("אתר מרכז הצדקה")
        header.setSubTitle("מורדי איזנשטיין")
        findStep.data[0].owner  === "biz" ? header.setIsArrow(true): header.setIsArrow(false)
        findStep.data[0].owner  === "biz" ? header.setIsHamburguer(false): header.setIsHamburguer(true)
    }, [])

    return (
        <div className={styles.page}>
            {findStep.data[0].owner === "biz"  // can be client or biz
                ? <StatusStep numOfStage={findStep.index} user="לעמרם" time={Difference_In_Days} />
                : <StatusStep numOfStage={findStep.index} user="לעמרם" />}

            <div className={styles.title}>{findStep.name}</div>
            <div className={styles.text}>{findStep.des}</div>

            <div className={styles.pdf} >
                {findStep.data.map(data => {
                    switch (data.type) {
                        case "img":
                            return <ImageView
                                imgDescription={data.title}
                                imgPath={data.content}
                            />
                        case "pdf":
                            return <Answer src="/images/icon-btns/filePDF.svg"
                                onClick={() => console.log("PDF")}
                                title={data.title}
                                p={data.content}
                                isTitleFirst={true}
                                isAdmin={false}
                            />
                        case "file":
                            return <Answer src="/images/icon-btns/answer.svg"
                                onClick={() => console.log("Answer")}
                                title={data.title}
                                p={data.content === "" ? "למענה לוחצים כאן..." : `${data.content}`}
                                isTitleFirst={true}
                                isAdmin={true}
                            />
                        case "answer":
                            return <Answer src="\images\icon-btns\Upload.svg"
                                onClick={() => console.log("Upload")}
                                title={data.title}
                                p={data.content}
                                isTitleFirst={true}
                                isAdmin={true}
                            />
                        default:
                        // code block
                    }
                })}
            </div>

            <div className={styles.btns}>
                {findStep.data[0].owner === "client" && findStep.status === "client" ?
                    <><BtnHolder color="lite" icon="wahtsapp" /><BtnConfirm icon="v.svg" color="gray" /></>
                    : findStep.data[0].owner === "client" && findStep.status === "biz" ?
                        <BtnHolder color="lite" icon="wahtsapp" />
                        : findStep.data[0].owner === "biz" && findStep.status === "biz" ?
                            <><BtnHolder color="lite" icon="pencil" /><BtnConfirm icon="v.svg" color="gray" /></>
                            : <BtnHolder color="lite" icon="V" />
                }

            </div>
        </div>
    )
}

export default BExample2