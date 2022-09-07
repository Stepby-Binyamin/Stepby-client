import { useContext } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import StatusProject from "../../../components/all/StatusProject"
import StatusTemp from "../../../components/all/StatusTemp"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import fakeProjects from "../../../data/fakeProjects"
import styles from "./style.module.css"

export default function Project({ mode = "biz" }) {
    const { header } = useContext(mainContext)

  
    useEffect(() => {
        header.setTitle(fakeProjects.projects[0].name)
        mode !== "template" && header.setSubTitle(fakeProjects.projects[0].client.clientName)
        mode === "client" ? header.setIsArrow(false) : header.setIsArrow(true)
        mode === "client" ? header.setIsDots(false) : header.setIsDots(true)
    }, [])

    return (<>
        {(mode === "client" || mode === "biz") && <StatusProject isLink={mode === "client" ? false : true} />}
        {mode === "template" && <StatusTemp />}
        {/* connect to real databace and filter by email/ phone */}
        {/* to change isFirstStep to notFirstStep and to connect to index */}
        {fakeProjects.projects[0].steps.map(v => <ListItem status={v.status} mainTitle={v.name} isFirstStep={true} key={v._id} />)}
        {(mode === "client" ) && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: ()=>{console.log("Hello") }, link: '' }]}/>}
        {mode === "template" && <BtnHolder buttons={[{ color: "gray", icon: "+", func: ()=>{console.log("Hello") }, link: '' },{ color: "lite", icon: "triangle", func: ()=>{console.log("Hello") }, link: '' }]}  />}
        { mode === "biz" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: ()=>{console.log("Hello") }, link: '' },{ color: "gray", icon: "+", func: ()=>{console.log("Hello") }, link: '' }]} />}
    </>)
}