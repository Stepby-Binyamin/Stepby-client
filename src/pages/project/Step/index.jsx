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
import MoreStep from "../../../components/all/MoreStep"
import Confirm from "../../../components/all/Confirm"
import userContext from "../../../context/userContext"

const Step = ({ mode }) => {
    const navigate = useNavigate()
    const { state } = useLocation()
    console.log("🚀 ~ file: index.jsx:26 ~ state", state)
    const { templateId, stepId } = useParams()
    const { userData } = useContext(userContext)
    const { header, drawer, language } = useContext(mainContext)

    const [information, setInformation] = useState()
    const [buttons, setButtons] = useState({ edit: false, whatsApp: false, light: false, dark: false, undo: false })
    const [approvedForEditing, setApprovedForEditing] = useState(false)

    const [isUploaded, setIsUploaded] = useState(false)
    const [isAnswer, setIsAnswer] = useState(false)
    const [uploadLocation, setUploadLocation] = useState()
    const [image, setImage] = useState()


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
        state ?
            setInformation(state)
            :
            apiCalls("get", `/project/getStepById/${templateId}/${stepId}`)
                .then(response => { setInformation(response) })
                .catch(error => { console.log(error) });
    }, [])

    useEffect(() => {
        header.setIsTitle(true)
        switch (mode) {
            case "template":
                header.setTitle(information?.step.name)
                header.setSubTitle(information?.tempName)
                header.setIsArrow(true)
                header.setIsHamburguer(false)
                break
            case "biz":
                header.setTitle(information?.tempName)
                header.setSubTitle(information?.client?.fullName)
                header.setIsArrow(true)
                header.setIsHamburguer(false)
                break
            case "client":
                header.setTitle(information?.tempName)
                header.setSubTitle(information?.bizName)
                header.setIsArrow(false)
                header.setIsHamburguer(true)
                break
            default:
                break;
        }
        setApprovedForEditing(!(userData.permissions === "biz" && information?.creatorIdPermissions === "admin"))
        console.log("🚀 ~ file: index.jsx:92 ~ useEffect ~ approvedForEditing", !(userData.permissions === "biz" && information?.creatorIdPermissions === "admin"))
        if (information) {
            buttonsAccordingMode()
        }
        console.log("🚀 ~ file: index.jsx ~ Step ~ mode", mode)
        console.log("🚀 ~ file: index.jsx:92 ~ useEffect ~ information", information)
    }, [information])

    useEffect(() => {
        if (mode === "client" || !approvedForEditing) {
            header.setIsDots(false)
        }
        else {
            header.setIsDots(true)
            drawer.setDrawerContentHeader(<MoreStep templateId={templateId} stepId={stepId} isTemplate={mode === "template"} isApprove={information?.step.isApprove} />)
        }
    }, [approvedForEditing])

    useEffect(() => {
        console.log("🚀 ~ file: index.jsx ~ line 94 ~ Step ~ buttons", buttons)
    }, [buttons])

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
    const handleAnswer = (title) => {
        console.log(information.step.isCreatorApprove);
        switch (mode) {
            case "template": return
            case "biz":
                information.step.isCreatorApprove
                    && drawer.setDrawer(<UploadCShortAnswer title={title} setIsAnswer={setIsAnswer} client={client} project={project} step={step_} />);
                break;
            case "client":
                !information.step.isCreatorApprove
                    && drawer.setDrawer(<UploadCShortAnswer title={title} setIsAnswer={setIsAnswer} client={client} project={project} step={step_} />);
                break;
            default:
                break;
        }
    }
    const completed = () => {
        const name = mode === "biz" ? information?.client?.fullName : information?.bizName;
        const btnNo = () => { drawer.setDrawer("") }
        const btnYes = () => {
            apiCalls('put', `/project/completeStep/${templateId}`, { stepId })
                .then((res) => {
                    // navigate(`/project/${mode}/${templateId}`)/
                    information.step.isApprove = true
                    buttonsAccordingMode()
                    drawer.setDrawerContentHeader(<MoreStep templateId={templateId} stepId={stepId} isTemplate={false} isApprove={information?.step.isApprove} />)
                })
                .catch((err) => console.log("🚀 ~ file: index.jsx:195 ~ btnYes ~ err", err))
            drawer.setDrawer("")
        }
        drawer.setDrawer(<Confirm clientName={name} nextStepName={information?.nextStepName} btnYes={btnYes} btnNo={btnNo} />)
    }
    const undo = () => {
        apiCalls('put', `/project/stepUndo/${templateId}`, { stepId })
            .then((res) => {
                information.step.isApprove = false
                buttonsAccordingMode()
                drawer.setDrawerContentHeader(<MoreStep templateId={templateId} stepId={stepId} isTemplate={false} isApprove={information?.step.isApprove} />)
            })
            .catch((err) => console.log("🚀 ~ file: index.jsx:207 ~ undo ~ err", err))
    }
    const stepEdit = () => {
        mode === "biz" ?
            navigate(`/project/biz/${templateId}/edit-step/${stepId}`, { state: information })
            :
            navigate(`/template/${templateId}/edit-step/${stepId}`, { state: information })
    }
    const goToProject = () => {
        navigate(`/project/biz/${templateId}`, { state: information })
    }
    const buttonsAccordingMode = () => {
        console.log("🚀 ~ file: index.jsx:242 ~ buttonsAccordingMode")

        switch (mode) {
            case "template":
                setButtons((current) => ({ ...current, edit: approvedForEditing }))
                break
            case "biz":
                information?.step?.isCreatorApprove ?
                    setButtons((current) => ({ ...current, edit: !information?.step.isApprove, dark: !information?.step.isApprove, undo: information?.step.isApprove }))
                    :
                    setButtons((current) => ({ ...current, light: true }))
                break
            case "client":
                information?.step?.isCreatorApprove ?
                    setButtons((current) => ({ ...current, whatsApp: true }))
                    :
                    setButtons((current) => ({ ...current, whatsApp: !information?.step.isApprove, dark: !information?.step.isApprove, undo: information?.step.isApprove }))
                break
            default:
                break;
        }
    }
    return (
        <div className={styles.page}>
            {mode === "template" ?
                <StatusStep isPreview={true} />
                :
                information?.isCurrent && (information?.step?.isCreatorApprove ?
                    <StatusStep numOfStage={information?.index + 1} user={information?.bizName} time={""/*Difference_In_Days*/} />
                    :
                    <StatusStep numOfStage={information?.index + 1} user={information?.client?.fullName} />)}

            <div className={styles.title}>{information?.step?.name}</div>
            <div className={styles.text}>{information?.step?.description}</div>
            <div className={styles.pdf} >
                {information?.step?.data.map((data, index) => {
                    console.log("🚀 ~ file: index.jsx:257 ~ {information?.step?.data.map ~ data", data.content)
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
                            return <Answer src="/images/icon-btns/Upload.svg"
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
                                onClick={() => handleAnswer(data.title)}
                                title={data.title}
                                p={!data.content ? `${language.FOR_HER_ANSWER_CLICK_HERE}` : `${data.content}`}
                                isTitleFirst={true}
                                isAdmin={true}
                                isDone={isAnswer}
                            />
                        default: return <></>
                    }
                })}
            </div>

            <div className={styles.btns}>
                {buttons.edit && <div style={{ width: "52px" }}>
                    <BtnSubmitIcon icon="pencil.svg" color="lite" func={stepEdit} />
                </div>}
                {buttons.undo && <div style={{ width: "52px" }}>
                    <BtnSubmitIcon icon="undo.svg" color="lite" func={undo} />
                </div>}
                {buttons.whatsApp &&
                    <a href={`https://wa.me/${information?.client.phoneNumber}`}>
                        <div style={{ width: "52px" }}>
                            <BtnSubmitIcon icon="whatsapp.svg" color="lite" func={""} />
                        </div>
                    </a>
                }
                {buttons.dark && <div style={{ width: "283px", marginRight: '12px' }}>
                    <BtnSubmitIcon icon="v.svg" color="gray" func={completed} />
                </div>}
                {buttons.light && <div style={{ width: "52px" }}>
                    <BtnSubmitIcon icon="v.svg" color="lite" func={goToProject} />
                </div>}
            </div>
        </div>
    )
}
export default Step