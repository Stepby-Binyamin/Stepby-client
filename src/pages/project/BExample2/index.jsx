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
import UploadIMG from "../../../components/common/UploadIMG"
import UploadPDF from "../../../components/common/UploadPDF"
import UploadAnswer from "../../../components/common/UploadAnswer"
import UploadFile from "../../../components/common/UploadFile"

const BExample2 = () => {
    const index = 1
    const _id = '14'

    const findProject = projects.projects.find(project => project._id === _id)
    const findStep = findProject.steps.find(step => step.index === index)

    const { header, drawer } = useContext(mainContext)

    // Calculate the Days
    const d = new Date()
    var Difference_In_Time = d.getTime() - projects.projects[0].lastApprove.getTime()
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24))

    useEffect(() => {
        // drawer.setDrawerContent(<UploadFiles/>)
        header.setTitle("אתר מרכז הצדקה")
        header.setSubTitle("מורדי איזנשטיין")
        // header.setIsDots(false)                 // HeaderTitle
        findStep.data[0].owner === "biz" ? header.setIsArrow(true) : header.setIsArrow(false)
        findStep.data[0].owner === "biz" ? header.setIsHamburguer(false) : header.setIsHamburguer(true)
    }, [])

    function handleIMG (){
        drawer.setDrawerContent(<UploadIMG/>);
        drawer.setDrawer(true);
    }

    function handlePDF (){
        drawer.setDrawerContent(<UploadPDF/>);
        drawer.setDrawer(true);
    }
    function handleAnswer (){
        drawer.setDrawerContent(<UploadAnswer/>);
        drawer.setDrawer(true);
    }
    function handleFile (){
        drawer.setDrawerContent(<UploadFile/>);
        drawer.setDrawer(true);
    }

    return (
        <div className={styles.page}>
            {findStep.data[0].owner === "biz"  // can be client or biz
                ? <StatusStep numOfStage={findStep.index} user={findProject.client.clientName} time={Difference_In_Days} />
                : <StatusStep numOfStage={findStep.index} user={findProject.client.clientName} />}

            <div className={styles.title}>{findStep.name}</div>
            <div className={styles.text}>{findStep.des}</div>

            <div className={styles.pdf} >
                {findStep.data.map(data => {
                    switch (data.type) {
                        case "img":
                            return <ImageView
                                key={data.title}
                                imgDescription={data.title}
                                imgPath={data.content}
                                onClick={handleIMG}

                            />
                        case "pdf":
                            return <Answer src="/images/icon-btns/filePDF.svg"
                                key={data.title}
                                onClick={handlePDF}
                                title={data.title}
                                p={data.content}
                                isTitleFirst={true}
                                isAdmin={false}
                            />
                        case "file":
                            return <Answer src="/images/icon-btns/answer.svg"
                                key={data.title}
                                onClick={handleAnswer}
                                title={data.title}
                                p={data.content === "" ? "למענה לוחצים כאן..." : `${data.content}`}
                                isTitleFirst={true}
                                isAdmin={true}
                            />
                        case "answer":
                            return <Answer src="\images\icon-btns\Upload.svg"
                                key={data.title}
                                onClick={handleFile}
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