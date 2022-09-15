import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
// import { useNavigate } from 'react-router-dom'
import styles from "./style.module.css"
import { convertDate } from '../../../functions/convertDate'
import mainContext from '../../../context/mainContext'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'
import AllAction from '../../../components/all/AllAction'
import CreateClient from '../../../components/all/CreateClient'
import CreateProject from '../../../components/all/CreateProject'
import CreateTemplate from '../../../components/all/CreateTemplate'
import CreateTemplateGeneral from '../../../components/all/CreateTemplateGeneral'
import BtnHolder from '../../../components/common/BtnHolder/BtnHolder'
import UiDirectionText from '../../../components/all/UiDirectionText'
import apiCalls from '../../../functions/apiRequest'


const HomeProject = ({ style = {}, ...props }) => {

   const { header, drawer, language } = useContext(mainContext)
   const { PROJECTS, TEMPLATES, ALL, MY_CARE, WAITING_CUSTOMER, LETS_GO, ICON, CALL_YOU } = language
   const [dataState, setDataState] = useState()
   const [sortListBy, setsortListBy] = useState(ALL)
   const [sortDirection, setSortDirection] = useState(false)


   const bizCounter = dataState && dataState.filter(item => item.status === 'biz').length
   const clientCounter = dataState && dataState.filter(item => item.status === 'client').length

   function getData(dataArr, searchBy) {
      const filterByStatus =
         sortListBy === ALL ? dataArr :
            sortListBy === MY_CARE ? dataArr.filter(item => item.status === 'biz') :
               dataArr.filter(item => item.status === 'client')

      const sortByDate = filterByStatus.sort((a, b) => {
         return searchBy ? (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime()) :
            (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
      })

      const activeStatus = sortByDate.filter(item => item.status !== 'done')
      const doneStatus = sortByDate.filter(item => item.status === 'done')
      return { activeStatus, doneStatus }
   }

   const dataToPrint = dataState && getData(dataState, sortDirection)

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)
      header.setIsHeaderSet(true)

      apiCalls('get', '/project/projectByUser')
         .then(response => {
            console.log(response)
            setDataState(response);
         })
         .catch(error => {
            console.log(error)
         });


   }, [])

   const createClient = () => {
      drawer.setDrawer(<CreateClient />)
   }
   const createProject = () => {
      drawer.setDrawer(<CreateProject />)
   }
   const admin = true
   const createTemp = () => {
      // navigate('/template')
      admin ? drawer.setDrawer(<CreateTemplateGeneral printData={printData} />) :
         drawer.setDrawer(<CreateTemplate printData={printData} />)
   }
   const printData = (d) => {
      console.log("printData:", d);
   }
   const openDrawer = () => {
      drawer.setDrawer(<AllAction newTempFunc={createTemp} newUserFunc={createClient} projectToUserFunc={createProject} />)
   }
   const handleDirection = () => {
      setSortDirection(!sortDirection)
   }

   function findCurrentStep(steps) {
      if (steps) {
         let y = steps.sort((a, b) => a.index - b.index)  //TODO fix sort
         let z = y.find(v => v.isApprove)
         return z ? z.name : y.name
      }
      else { return "" }
   }

   return (
      <div className={styles.HomeProject} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setsortListBy} firstText={ALL} secondText={MY_CARE} thirdText={WAITING_CUSTOMER} counter2={bizCounter} counter3={clientCounter} />

         <ul className={styles.list}>
            {
               // !dataState ? <div>loading...</div> : 
               // (
               dataState && dataState.length === 0 ?

                  <UiDirectionText mainTitle={LETS_GO} text1={ICON} text2={CALL_YOU} />
                  :
                  <>{
                     dataToPrint && dataToPrint.activeStatus.map(item =>
                        <ListItem
                           key={item._id}
                           status={item.status}
                           // mainTitle={item.client.bizName}
                           secondaryTitle={item.name}
                           sconderyBoldTitle={findCurrentStep(item.steps)}
                           time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                           link={`/project/biz/${item._id}`}
                           linkState={{ proj: item }}
                        />)
                  }{
                        dataToPrint && dataToPrint.doneStatus.map(item =>
                           <ListItem
                              key={item._id}
                              status={item.status}
                              // mainTitle={item.client.bizName}
                              secondaryTitle={item.name}
                              sconderyBoldTitle={findCurrentStep(item.steps)}
                              time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                              link={`/project/biz/${item._id}`}
                              linkState={{ proj: item }}
                           />)
                     }</>
               // )
            }
         </ul>
         <BtnHolder buttons={[{ color: "lite", icon: sortDirection ? "1to2" : "2to1", func: handleDirection }, { color: "gray", icon: "+", func: openDrawer }]} />
      </div>
   )
}

export default HomeProject
