import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
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
import userContext from "../../../context/userContext"
import apiCalls from '../../../functions/apiRequest'

const HomeProject = ({ style = {}, ...props }) => {
   const { userData } = useContext(userContext)
   const { header, drawer, language } = useContext(mainContext)

   const [allProjects, setAllProjects] = useState()
   const [sortListBy, setSortListBy] = useState(language.ALL)
   const [sortDirection, setSortDirection] = useState(false)

   const bizCounter = allProjects && allProjects.filter(item => item.status === 'biz').length
   const clientCounter = allProjects && allProjects.filter(item => item.status === 'client').length

   const getData = (dataArr, searchBy) => {
      const filterByStatus =
         sortListBy === language.ALL ? dataArr :
            sortListBy === language.MY_CARE ? dataArr.filter(item => item.status === 'biz') :
               dataArr.filter(item => item.status === 'client')

      const sortByDate = filterByStatus.sort((a, b) => {
         return searchBy ? (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime()) :
            (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
      })

      const activeStatus = sortByDate.filter(item => item.status !== 'done')
      const doneStatus = sortByDate.filter(item => item.status === 'done')
      return { activeStatus, doneStatus }
   }

   const dataToPrint = allProjects && getData(allProjects, sortDirection)

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)
      header.setIsHeaderSet(true)

      apiCalls('get', '/project/projectByUser')
         .then(response => {
            setAllProjects(response);
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


   const createTemp = () => {
      // navigate('/template')
      console.log(userData);
      userData?.permissions === "admin" ?
         drawer.setDrawer(<CreateTemplateGeneral />) :
         drawer.setDrawer(<CreateTemplate />)

   }
   const openDrawer = () => {
      console.log(userData?.permissions);
      drawer.setDrawer(<AllAction newTempFunc={createTemp} newUserFunc={createClient} projectToUserFunc={createProject} />)
   }
   const handleDirection = () => {
      setSortDirection(!sortDirection)
   }
   const findCurrentStep = (steps) => {
      if (steps) {
         let y = steps.sort((a, b) => a.index < b.index ? -1 : 1)  //TODO fix sort
         let z = y.find(v => !v.isApprove)
         return z ? z.name : y.name
      }
      else { return "" }
   }
   const getButtons = () => {
      const btnSortDirection = { color: "lite", icon: sortDirection ? "1to2" : "2to1", func: handleDirection }
      const btnOpenDrawer = { color: "gray", icon: "+", func: openDrawer }
      return allProjects?.length !== 0 ? [btnSortDirection, btnOpenDrawer] : [btnOpenDrawer]
   }

   return (
      <div className={styles.HomeProject} style={style} {...props} >
         <NavLink />
         <NavLinkTab state={sortListBy}
            setState={setSortListBy}
            firstText={language.ALL}
            secondText={language.MY_CARE}
            thirdText={language.WAITING_CUSTOMER}
            counter2={bizCounter}
            counter3={clientCounter} />

         <ul className={styles.list}>
            {
               // !dataState ? <div>loading...</div> : 
               // (
               allProjects && allProjects.length === 0 ?

                  <UiDirectionText mainTitle={language.LETS_GO} text1={language.ICON} text2={language.CALL_YOU} />
                  :
                  <>{
                     dataToPrint && dataToPrint.activeStatus.map(item => {
                        console.log(item);
                        return <ListItem
                           key={item._id}
                           status={item.status}
                           mainTitle={item.client?.fullName}
                           secondaryTitle={item.name}
                           secondaryBoldTitle={findCurrentStep(item.steps)}
                           time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                           link={`/project/biz/${item._id}`}
                           linkState={{ temp: item }}
                        />
                     })
                  }{
                        dataToPrint && dataToPrint.doneStatus.map(item =>
                           <ListItem
                              key={item._id}
                              status={item.status}
                              mainTitle={item.client?.bizName}
                              secondaryTitle={item.name}
                              secondaryBoldTitle={findCurrentStep(item.steps)}
                              time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                              link={`/project/biz/${item._id}`}
                              linkState={{ temp: item }}
                           />)
                     }</>
               // )
            }
         </ul>
         <BtnHolder buttons={getButtons()} />
      </div>
   )
}

export default HomeProject
