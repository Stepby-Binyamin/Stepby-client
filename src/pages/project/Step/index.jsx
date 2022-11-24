import styles from "./style.module.css"
import React, { useState, useContext, useEffect } from 'react'
import { useParams, useLocation, useNavigate, Navigate } from "react-router-dom"

import StatusStep from "../../../components/all/StatusStep"
import Answer from "../../../components/all/Answer"
import ImageView from "../../../components/all/ImageView"
import BtnSubmitIcon from "../../../components/common/BtnSubmitIcon"
import UploadCShortAnswer from "../../../components/common/UploadCShortAnswer"
import UploadPicture from "../../../components/common/UploadPicture"

import mainContext from "../../../context/mainContext"

import Pdf from "../../../test.pdf"
import TempSimpleAnswer from "../../../components/common/TempSimpleAnswer"
import TempIMG from "../../../components/common/TempIMG"
import TempPDF from "../../../components/common/TempPDF"
import UploadedIMGView from "../../../components/common/UploadedIMGView"

import axios from "axios"
import apiCalls from "../../../functions/apiRequest"

const Step = () => {
    const { state } = useLocation()
    console.log("🚀 ~ file: index.jsx ~ line 26 ~ Step ~ state", state)
    const navigate = useNavigate()
    const { templateId, stepId } = useParams()
    const { header, drawer } = useContext(mainContext)

    const [isUploaded, setIsUploaded] = useState(false)
    const [isAnswer, setIsAnswer] = useState(false)
    const [uploadLocation, setUploadLocation] = useState()
    const [image, setImage] = useState()
    const [stepInformation, setStepInformation] = useState()

    //isCreatorApprove = true biz false client
    //isApprove ???

    const index = 1
    const _id = '14'
    const client = "solyattie"
    const project = 'fisrtProject'
    const step_ = "1"

    // const fileName = "answerName.txt"
    const fileName = "Tour_Eiffel.jpg"
    // const fileName = "lesson.pdf"



    // Calculate the Days
    // const d = new Date()
    // let Difference_In_Time = d.getTime() - projects.projects[0].lastApprove.getTime()
    // let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24))

    useEffect(() => {
        header.setTitle("אתר מרכז הצדקה")
        header.setSubTitle("מורדי איזנשטיין")
        // header.setIsDots(false)                 // HeaderTitle

        apiCalls('get', `/project/getStepById/${templateId}/${stepId}`)
            .then((res) => setStepInformation(res))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        header.setIsArrow(stepInformation?.isCreatorApprove);
        header.setIsHamburguer(!stepInformation?.isCreatorApprove);
    }, [stepInformation])

    const handlePDF = () => {
        axios({
            url: "http://localhost:5000/files/download",
            // url: "https://stepby-server-stepby.vercel.app/files/download",
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
    const handleIMG = () => {
        // drawer.setDrawer(<UploadPicture setIsUploaded={setIsUploaded} setUploadLocation={setUploadLocation} client={client} project={project} step={step} />); //id={id} stepId={stepId}
        // drawer.setDrawer(<TempPDF step={step} project={project}/>)
        // drawer.setDrawer(<UploadedIMGView step={step} project={project} />)
        const data = {
            // This is the body part
            client: "solyattie",
            projectName: "firstProject",
            stepNum: "1",
            fileName: fileName,
        }

        apiCalls('post', '/files/showImg', data)
            .then((img) => setImage(`data:image/jpeg;base64,${img}`))
            .catch((err) => console.log(err))

        // axios({
        //     url: "https://stepby-server-stepby.vercel.app/files/showImg",
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
    const handleFile = () => {
        drawer.setDrawer(<UploadPicture setIsUploaded={setIsUploaded} setUploadLocation={setUploadLocation} client={client} project={project} step={step_} />); //id={id} stepId={stepId}
    }
    const handleAnswer = () => {
        drawer.setDrawer(<UploadCShortAnswer setIsAnswer={setIsAnswer} client={client} project={project} step={step_} />);
    }
    const completed = () => {
        const body = { stepId }

        apiCalls('put', `/project/completeStep/${templateId}`, body)
            .then((res) => { navigate(`/project/biz/${templateId}`) })
            .catch((err) => console.log(err))
    }
    const stepEdit = () => {
        console.log("GO TO EDIT STEP");
        navigate(`/template/${templateId}/edit-step/${stepId}`)
    }
    return (
        <div className={styles.page}>
            {stepInformation?.isCreatorApprove === true  // can be false => client or true => biz
                ? <StatusStep numOfStage={stepInformation?.index} user={""/*findProject.client.clientName*/} time={""/*Difference_In_Days*/} />
                : <StatusStep numOfStage={stepInformation?.index} user={""/*findProject.client.clientName*/} />}

            <div className={styles.title}>{stepInformation?.name}</div>
            <div className={styles.text}>{stepInformation?.description}</div>

            {/* no relevant yet but dont delete  */}
            {/* {image &&
                <div className={styles.downImg}>
                    <img src={image} alt="base64 test" />
                </div>
            } */}

            <div className={styles.pdf} >
                {stepInformation?.data.map((data, index) => {
                    switch (data.type) {
                        case "img":
                            return <ImageView
                                key={Math.random().toString()}
                                imgDescription={data.title}
                                imgPath={data.content}
                                onClick={handleIMG}
                            />
                        case "pdf":
                            return <Answer src="/images/icon-btns/filePDF.svg"
                                key={Math.random().toString()}
                                onClick={handlePDF}
                                title={data.title}
                                p={data.content}
                                isTitleFirst={true}
                                isAdmin={false}
                            />


                        case "file":
                            return <Answer src="\images\icon-btns\Upload.svg"
                                key={Math.random().toString()}
                                onClick={handleFile}
                                title={data.title}
                                p={data.content}
                                isTitleFirst={true}
                                isAdmin={true}
                                isDone={isUploaded}
                            />

                        case "answer":
                            return <Answer src="/images/icon-btns/answer.svg"
                                key={Math.random().toString()}
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
                <>
                    <div style={{ width: "14%" }}>
                        <BtnSubmitIcon icon="pencil.svg" color="lite" func={stepEdit} />
                    </div>
                    <div style={{ width: "86%" }}>
                        <BtnSubmitIcon icon="v.svg" color="gray" func={completed} />
                    </div>
                </>
            </div>
        </div>
    )
}

export default Step