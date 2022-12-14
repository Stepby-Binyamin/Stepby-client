import { useContext, useState, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import StatusProject from "../../../components/all/StatusProject"
import StatusTemp from "../../../components/all/StatusTemp"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import userContext from '../../../context/userContext'
import { convertDate } from "../../../functions/convertDate"
import styles from "./style.module.css"
import UiDirectionText from "../../../components/all/UiDirectionText"
import apiCalls from "../../../functions/apiRequest"
import StepBasics from "../../../components/all/StepBasics"
import CreateProjectNewUser from "../../../components/all/CreateProjectNewUser"
import MoreMenuTemplate from "../../../components/all/MoreMenuTemplate"
import MoreProject from "../../../components/all/MoreProject"

const Project = ({ mode }) => {
    const navigate = useNavigate()
    const { templateId } = useParams()
    const { userData } = useContext(userContext)
    const { drawer, header, language = {} } = useContext(mainContext)

    const [curr, setCurr] = useState()
    const [stepsDisplay, setStepsDisplay] = useState()
    const [indexNextStep, setIndexNextStep] = useState()
    const [approvedForEditing, setApprovedForEditing] = useState(false)

    const findNextStep = () => {
        const result = curr && curr.steps.find(step => step.isApprove === false)
        return result?.index
    }

    useEffect(() => {
        apiCalls("get", `/project/projectById/${templateId}`)
            .then((result) => { setCurr(result) })
            .catch((err) => console.log("🚀 ~ file: index.jsx:37 ~ useEffect ~ err", err))
    }, [templateId])

    useEffect(() => {
        console.log("🚀 ~ file: index.jsx ~~ curr", curr)
        header.setIsArrow(true)
        header.setIsTitle(true)
        header.setTitle(curr?.name)
        // curr?.status === "done" && header.setArrowNav("/projects")
        switch (mode) {
            case "template":
                header.setSubTitle("")
                drawer.setDrawerContentHeader(<MoreMenuTemplate templateId={templateId} creatorIdPermissions={curr?.creatorId.permissions} deleteProjectFunc={() => deleteProjectFunc("templates")} />)
                break;
            case "client":
                header.setIsArrow(false)
                header.setIsDots(false)
                header.setSubTitle(curr?.creatorId?.bizName)
                break;
            case "biz":
                header.setIsDots(true)
                header.setIsArrow(true)
                header.setIsHamburguer(false)
                header.setSubTitle(curr?.client?.fullName)
                drawer.setDrawerContentHeader(<MoreProject templateId={templateId} completeProjectFunc={completeProjectFunc} deleteProjectFunc={() => deleteProjectFunc("projects")} />)
                break;

            default:
                break;
        }
        curr && setStepsDisplay([...curr.steps].sort((a, b) => a.index < b.index ? -1 : 1))
        setIndexNextStep(findNextStep())
        console.log("ApprovedForEditing:" + !(userData.permissions === "biz" && curr?.creatorId.permissions === "admin"));
        setApprovedForEditing(!(userData.permissions === "biz" && curr?.creatorId.permissions === "admin"))
    }, [curr])

    const deleteProjectFunc = (page) => {
        apiCalls("delete", `/template/deleteTemplate/${templateId}`)
            .then((res) => {
                navigate(`/${page}`)
                drawer.setDrawer()
            })
    }
    const completeProjectFunc = () => {
        apiCalls("put", `/project/doneProject/${templateId}`)
            .then((res) => {
                setCurr(res)
                drawer.setDrawer()
            })
    }

    const findTheOwner = (curr) => {
        const result = curr.steps[indexNextStep]?.isCreatorApprove
        return result ? language.YOURS : (curr?.client?.firstName, curr?.client?.lastName) || curr?.client?.fullName

    }
    const secondaryTitle = (curr, step) => {
        return step.isApprove === true ?
            language.COMPLET
            : indexNextStep === step.index && `${language.TREATMENT} ${findTheOwner(curr)}`
    }
    const upMove = (step) => {
        apiCalls("put", `/template/downSteps/${templateId}`, { "stepIndex": step.index - 1 })
            .then((result) => setCurr(result))
    }
    const downMove = (step) => {
        apiCalls("put", `/template/downSteps/${templateId}`, { "stepIndex": step.index })
            .then((result) => {
                setCurr(result)
            })
    }
    const nav = (mode, curr, step) => {
        // console.log('mode: ', mode, 'curr: ', curr, 'step: ', step);
        switch (mode) {
            case "template":
                return `/template/${curr._id}/edit-step/${step._id}`
            case "biz":
                return `/project/biz/${curr._id}/step/${step._id}`
            case "client":
                return `/project/client/${curr._id}/step/${step._id}`
            default:
                break;
        }
    }
    const buttonsAccordingMode = () => {
        switch (mode) {
            case "template":
                const addStep = approvedForEditing ? [{ color: "gray", icon: "+", func: onClickPlus, link: '' }] : []
                return curr.steps?.length < 1 ? addStep
                    : [{ color: "lite", icon: "triangle", func: () => createNewProject(), link: '' }].concat(addStep)
            case "biz":
                return curr?.status === "done" ? [{ color: "lite", icon: "whatsapp", link: `https://wa.me/${curr?.client?.phoneNumber?.replace("0", "+972")}` }]
                    :
                    [{ color: "lite", icon: "whatsapp", link: `https://wa.me/${curr?.client?.phoneNumber?.replace("0", "+972")}` }
                        , { color: "gray", icon: "+", func: onClickPlus, link: '' }]
            case "client":
                return [{ color: "lite", icon: "whatsapp", link: `https://wa.me/${userData.phoneNumber.replace("0", "+972")}` }]
            default:
                break;
        }
    }

    //Mode-template
    const createNewProject = () => {
        drawer.setDrawer(<CreateProjectNewUser templateName={curr.name} templateId={templateId} />)
    }

    //Mode -template , biz
    const onClickPlus = () => {
        drawer.setDrawer(<StepBasics isCreatorApprove={true} fetchDataFunc={newStep} />);
    }
    const newStep = (data) => {
        const dataToServer = {
            stepName: data.stepName,
            description: data.description,
            isCreatorApprove: data.radio === language.MY ? true : false
        }
        apiCalls("put", `/template/newStep/${templateId}`, dataToServer)
            .then(response => {
                setCurr((current) => ({ ...current, steps: response }));
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (<>
        {curr &&
            <div className={styles.container}>
                {(mode === "client" || mode === "biz") &&
                    <StatusProject
                        isDone={curr.status === "done"}
                        isLink={mode === "biz" ? true : false}
                        name={curr.status === "biz" ? userData.firstName : curr.client?.fullName}
                        completed={indexNextStep}
                        totalTask={curr.steps.length}
                        projectId={templateId}
                        clientPhone={curr?.client?.phoneNumber}
                        isCreatorApprove={curr.steps[indexNextStep]?.isCreatorApprove}
                    />}
                {mode === "template" && <StatusTemp />}
                {stepsDisplay?.map(step =>
                    <ListItem
                        status={step.isCreatorApprove ? "biz" : "client"}
                        secondaryTitle={mode !== "template" && secondaryTitle(curr, step)}
                        mainTitle={step.name}
                        stepsNum={curr.steps.length}
                        key={step._id}
                        time={step.approvedDate && `${convertDate(step.approvedDate).time}${convertDate(step.approvedDate).type}`}
                        step={step}
                        up={approvedForEditing && upMove}
                        down={approvedForEditing && downMove}
                        id={step._id}
                        link={nav(mode, curr, step)}
                        linkState={{ tempName: curr.name, bizName: curr.creatorId.firstName, client: curr.client, step: step }}
                    />)
                }
                {curr.steps?.length < 1 &&
                    <UiDirectionText
                        mainTitle={language.STEP_BY_STEP}
                        text1={language.PRESS_ON}
                        text2={language.ADD_STEP}
                    />
                }
                <BtnHolder buttons={buttonsAccordingMode()} />
            </div>
        }
    </>)
}
export default Project