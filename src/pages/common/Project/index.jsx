import { useContext, useState, useEffect } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import StatusProject from "../../../components/all/StatusProject"
import StatusTemp from "../../../components/all/StatusTemp"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import { convertDate } from "../../../functions/convertDate"
import styles from "./style.module.css"
import UiDirectionText from "../../../components/all/UiDirectionText"
import apiCalls from "../../../functions/apiRequest"
import StepBasics from "../../../components/all/StepBasics"
import CreateProjectNewUser from "../../../components/all/CreateProjectNewUser"


export default function Project({ mode }) {
    const { templateId } = useParams()
    const { state } = useLocation()
    const { drawer, header, language = {} } = useContext(mainContext)
    const { COMPLET, STEP_BY_STEP, PRESS_ON, ADD_STEP } = language
    const [curr, setCurr] = useState()
    const indexFirst = findTheNext(curr)

    const [stepAdded, setStepAdded] = useState();
    const navigate = useNavigate()

    // const mode = state && state.mode
    // const owner = findTheOwner(curr)

    console.log("project / template page", curr);

    useEffect(() => {
        if (state && state.temp)
            setCurr(state.temp)

        const fetchData = () =>
            apiCalls("get", "/project/projectById/" + templateId)
                .then((result) => setCurr(result));

        fetchData();
    }, [])

    useEffect(() => {
        header.setIsTitle(true)
        header.setTitle(curr?.name)
        // TODO יש צורך בלהגדיר את הdrawers לפי המצב
        switch (mode) {
            case "template":
                // TODO setDrawerContentHeader
                break;

            case "client":
                header.setIsArrow(false)
                header.setIsDots(false)
                header.setSubTitle(curr?.client?.fullName || (curr?.client?.firstName, curr?.client?.lastName))
                // TODO setDrawerContentHeader
                break;

            case "biz":
                header.setIsDots(true)
                header.setIsArrow(true)
                header.setSubTitle(curr?.client?.fullName || (curr?.client?.firstName, curr?.client?.lastName))
                // TODO setDrawerContentHeader
                break;

            default:
                break;
        }
    }, [curr])

    function findTheOwner(curr) {
        // if (mode !== "template") { // TODO - התנאי נצרך או לא???
        const result = curr.steps[indexFirst]?.isCreatorApprove
        if (result) {
            return "שלך"
        } else {
            return (curr?.client?.firstName, curr?.client?.lastName) || curr?.client?.fullName
        }
        // }
    }

    function upMove(step) {
        apiCalls("put", "/template/downSteps/" + templateId, { "stepIndex": step.index - 1 })
            .then((result) => setCurr(result))
        // console.log("hay i'm up", " step index:step" + step.index--, "project id:" + curr._id);
        return // למה צריך להחזיר ריק?
    }

    function downMove(step) {
        apiCalls("put", "/template/downSteps/" + templateId, { "stepIndex": step.index })
            .then((result) => setCurr(result))
        // console.log("hay i'm down", " step index:" + step.index, "project id:" + curr._id);
        return // למה צריך להחזיר ריק?
    }

    function secondaryTitle(curr, step) {
        //TODO אם ה ? : מתחיל להיות לא מובן לעבור לתנאי רגיל 
        return step.isApprove === true ? COMPLET : indexFirst === step.index && `בטיפול ${findTheOwner(curr)}`
    }

    function nav({ mode, curr, step }) {
        // console.log('mode: ', mode, 'curr: ', curr, 'step: ', step);
        if (mode === "client")
            return `/project/client/${curr._id}/step/${step._id}`

        if (mode === "template")
            return `/template/${curr._id}/edit-step/${step._id}`

        if (mode === "biz")
            return `/project/biz/${curr._id}/step/${step._id}`
    }

    function findTheNext(curr) {
        curr && curr.steps.sort((a, b) => a.index < b.index ? -1 : 1)
        const result = curr && curr.steps.find(step => step.isApprove === false)
        return result?.index
    }


    function createNewProject() {
        drawer.setDrawer(<CreateProjectNewUser tamplateName={curr.name} newProject={newProject} templateId={templateId} />)
    }

    const newProject = (data) => {
        // console.log(data);
        apiCalls('post', `/project/createProject/${templateId}`, data)
            .then(projectId => {
                // console.log("res:", projectId)
                navigate(`/project/biz/${projectId}`)
            })
            .catch(error => {
                console.log(error)
            });
    }


    curr && curr.steps?.sort((a, b) => a.index < b.index ? -1 : 1)

    const onClickPlus = () => {
        drawer.setDrawer(<StepBasics isCreatorApprove={true} fetchDataFunc={newStep} />);
    }

    function newStep(data) {
        // console.log('newStepData :', data);

        const dataToServer = { stepName: data.stepName, description: data.description, isCreatorApprove: data.radio == 'שלי' ? true : false }

        // console.log('dataToServer: ', dataToServer);

        apiCalls("put", "/template/newStep/" + templateId, dataToServer)
            .then(response => {
                console.log('response: ', response);
                console.log('curr: ', curr);
                setCurr((current) => ({ ...current, steps: response }));
            })
            .catch(error => {
                console.log(error)
            });

        // console.log(curr);
    }

    return (<>
        {curr &&
            <div className={styles.container}>
                {(mode === "client" || mode === "biz") && <StatusProject isLink={mode === "client" ? false : true} />}
                {mode === "template" && <StatusTemp />}
                {curr.steps?.map(step =>
                    <ListItem
                        status={step.isCreatorApprove ? "biz" : "client"}
                        secondaryTitle={mode !== "template" && secondaryTitle(curr, step)}
                        mainTitle={step.name}
                        isFirstStep={step.index === 0 ? true : false}
                        key={step._id}
                        time={step.approvedDate && `${convertDate(step.approvedDate).time}${convertDate(step.approvedDate).type}`}
                        step={step}
                        up={upMove}
                        down={downMove}
                        id={step._id}
                        link={nav({ mode, curr, step })}
                        linkState={{ tempName: curr.name, stepId: step._id, curr, step }}

                    />)}
                {curr.steps?.length < 1 && <UiDirectionText mainTitle={STEP_BY_STEP} text1={PRESS_ON} text2={ADD_STEP} />}
                {mode === "client" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }]} />}
                {mode === "template" && <BtnHolder buttons={curr.steps?.length < 1 ? [{ color: "gray", icon: "+", func: onClickPlus, link: '' }] : [{ color: "lite", icon: "triangle", func: () => createNewProject(), link: '' }, { color: "gray", icon: "+", func: onClickPlus, link: '' }]} />}
                {mode === "biz" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }, { color: "gray", icon: "+", func: onClickPlus, link: '' }]} />}

            </div>
        }
    </>)
}