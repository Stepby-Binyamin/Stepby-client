import { useContext, version } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import StatusProject from "../../../components/all/StatusProject"
import StatusTemp from "../../../components/all/StatusTemp"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import fakeProjects from "../../../data/fakeProjects"
import { languages } from "../../../functions/languages"
import {convertDate} from "../../../functions/convertDate"
import styles from "./style.module.css"

export default function Project({ mode = "client" }) {
    const { header } = useContext(mainContext)
    const {COMPLET} = languages[0].dict

  
    useEffect(() => {
        header.setTitle(fakeProjects.projects[0].name)
        mode !== "template" && header.setSubTitle(fakeProjects.projects[0].client.clientName)
        mode === "client" ? header.setIsArrow(false) && header.setIsDots(false) :header.setIsDots(true) && header.setIsArrow(true)
    }, [])

    return (<>
        {(mode === "client" || mode === "biz") && <StatusProject isLink={mode === "client" ? false : true} />}
        {mode === "template" && <StatusTemp />}
        {fakeProjects.projects[0].steps.map(v => <ListItem status={v.stepStatus} secondaryTitle={v.stepDone === true ? COMPLET : v.isNext  && `בטיפול ${v.clientName}`} mainTitle={v.name} isFirstStep={v.index === 0 ? true : false} key={v._id} time={`${convertDate(v.approvedDate).time}${convertDate(v.approvedDate).type}`} />)}
        {(mode === "client" ) && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: ()=>{console.log("Hello") }, link: '' }]}/>}
        {mode === "template" && <BtnHolder buttons={[{ color: "lite", icon: "triangle", func: ()=>{console.log("Hello") }, link: '' },{ color: "gray", icon: "+", func: ()=>{console.log("Hello") }, link: '' }]}  />}
        { mode === "biz" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: ()=>{console.log("Hello") }, link: '' },{ color: "gray", icon: "+", func: ()=>{console.log("Hello") }, link: '' }]} />}
    </>)
}