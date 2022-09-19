import styles from "./style.module.css"
import React, { useState, useContext, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom"

import StatusStep from "../../../components/all/StatusStep"
import Answer from "../../../components/all/Answer"
import ImageView from "../../../components/all/ImageView"
import BtnSubmitIcon from "../../../components/common/BtnSubmitIcon"
import UploadCShortAnswer from "../../../components/common/UploadCShortAnswer"
import UploadPicture from "../../../components/common/UploadPicture"

import mainContext from "../../../context/mainContext"
import projects from "../../../data/fakeProjects.js"
import Pdf from "../../../test.pdf"


import TempSimpleAnswer from "../../../components/common/TempSimpleAnswer"
import TempIMG from "../../../components/common/TempIMG"
import TempPDF from "../../../components/common/TempPDF"
import UploadedIMGView from "../../../components/common/UploadedIMGView"

import axios from "axios"
import apiCalls from "../../../functions/apiRequest"

const BExample2 = () => {
    const [isUploaded, setIsUploaded] = useState(false)
    const [isAnswer, setIsAnswer] = useState(false)
    const [uploadLocation, setUploadLocation] = useState()
    const [image, setImage] = useState()

    const { templateId, stepId } = useParams()
    const { state} = useLocation()
    const projName = state && state.tempName
    const stepp = state && state.step

    // console.log("templateId",templateId);
    // console.log("stepId",stepId);

    const index = 1
    const _id = '14'
    const client = "solyattie"
    const project = 'fisrtProject'
    const step = "1"

    // const fileName = "answerName.txt"
    const fileName = "Tour_Eiffel.jpg"
    // const fileName = "lesson.pdf"

    const findProject = projects.projects.find(project => project._id === _id)
    const findStep = findProject.steps.find(step => step.index === index)

    const { header, drawer } = useContext(mainContext)

    // Calculate the Days
    const d = new Date()
    var Difference_In_Time = d.getTime() - projects.projects[0].lastApprove.getTime()
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24))

    useEffect(() => {
        header.setTitle("אתר מרכז הצדקה")
        header.setSubTitle("מורדי איזנשטיין")
        // header.setIsDots(false)                 // HeaderTitle
        findStep.data[0].owner === "biz" ? header.setIsArrow(true) : header.setIsArrow(false)
        findStep.data[0].owner === "biz" ? header.setIsHamburguer(false) : header.setIsHamburguer(true)
    }, [])

    const handlePDF = () => {
        axios({
            url: "http://localhost:5000/files/download",
            method: "POST",
            responseType: "blob",  // important
            data: {
                // This is the body part
                client: "solyattie",
                projectName: "fisrtProject",
                stepNum: "1",
                fileName: fileName,
            },
        }).then((response) => {
            console.log("response.data", response.headers["content-type"]);
            const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers["content-type"] }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
        });
    }

    function handleIMG() {
        // drawer.setDrawer(<UploadPicture setIsUploaded={setIsUploaded} setUploadLocation={setUploadLocation} client={client} project={project} step={step} />); //id={id} stepId={stepId}

        // drawer.setDrawer(<TempPDF step={step} project={project}/>)
        // drawer.setDrawer(<UploadedIMGView step={step} project={project} />)
        const data = {
            // This is the body part
            client: "solyattie",
            projectName: "fisrtProject",
            stepNum: "1",
            fileName: fileName,
        }
        apiCalls('post','/files/showImg',data)
        .then((img)=>setImage(`data:image/jpeg;base64,${img}`))
        .catch((err)=>console.log(err))

        // axios({
        //     url: "http://localhost:5000/files/showImg",
        //     method: "POST",
        //     data: {
        //         // This is the body part
        //         client: "solyattie",
        //         projectName: "fisrtProject",
        //         stepNum: "1",
        //         fileName: fileName,
        //     },
        // }).then((img) => {
        //     // console.log(img);
        //     setImage(`data:image/jpeg;base64,${img.data}`)
        // })
    }




    function handleFile() {
        drawer.setDrawer(<UploadPicture setIsUploaded={setIsUploaded} setUploadLocation={setUploadLocation} client={client} project={project} step={step} />); //id={id} stepId={stepId}

    }

    function handleAnswer() {
        drawer.setDrawer(<UploadCShortAnswer setIsAnswer={setIsAnswer} client={client} project={project} step={step} />);
    }

    console.log(image);

    return (
        <div className={styles.page}>
            {findStep.data[0].owner === "biz"  // can be client or biz
                ? <StatusStep numOfStage={findStep.index} user={findProject.client.clientName} time={Difference_In_Days} />
                : <StatusStep numOfStage={findStep.index} user={findProject.client.clientName} />}

            <div className={styles.title}>{findStep.name}</div>
            <div className={styles.text}>{findStep.des}</div>

            {image &&
                <div className={styles.downImg}>
                    <img src={image} alt="base64 test" />
                </div>
            }

            <div className={styles.pdf} >
                {findStep.data.map((data, index) => {
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
                            return <Answer src="\images\icon-btns\Upload.svg"
                                key={data.title}
                                onClick={handleFile}
                                title={data.title}
                                p={data.content}
                                isTitleFirst={true}
                                isAdmin={true}
                                isDone={isUploaded}
                            />

                        case "answer":
                            return <Answer src="/images/icon-btns/answer.svg"
                                key={data.title}
                                onClick={handleAnswer}
                                title={data.title}
                                p={data.content === "" ? "למענה לוחצים כאן..." : `${data.content}`}
                                isTitleFirst={true}
                                isAdmin={true}
                                isDone={isAnswer}
                            />

                        default:
                        // code block
                    }
                })}
            </div>

            <div className={styles.btns}>
                {findStep.data[0].owner === "client" && findStep.status === "client" ?
                    <>
                        <div style={{ width: "14%" }}><BtnSubmitIcon icon="whatsapp.svg" color="lite" /></div>
                        <div style={{ width: "86%" }}><BtnSubmitIcon icon="v.svg" color="gray" /></div></>
                    : findStep.data[0].owner === "client" && findStep.status === "biz" ?
                        <div style={{ width: "14%" }}><BtnSubmitIcon icon="whatsapp.svg" color="lite" /></div>
                        : findStep.data[0].owner === "biz" && findStep.status === "biz" ?
                            <>
                                <div style={{ width: "14%" }}><BtnSubmitIcon icon="pencil.svg" color="lite" /></div>
                                <div style={{ width: "86%" }}><BtnSubmitIcon icon="v.svg" color="gray" /></div></>
                            : <div style={{ width: "14%" }}><BtnSubmitIcon icon="pencil.svg" color="lite" /></div>
                }


            </div>
        </div>
    )
}

export default BExample2