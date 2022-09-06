import React, { useState, useEffect, useContext } from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import { convertDate } from '../../../functions/convertDate'
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'

const HomeProject = ({ style = {}, ...props }) => {


   const { PROJECTS, TEMPLATES, ALL, MY_CARE, WAITING_CUSTOMER, LETS_GO, ICON, CALL_YOU } = languages[0].dict
   // const [api, setapi] = useState()
   const [sortDirection, setSortDirection] = useState(true)
   const [sortListBy, setsortListBy] = useState(ALL)
   const { data } = useContext(dataContext)
   const { header } = useContext(mainContext)


   // console.log(data.projects[0].lastApprove);

   useEffect(() => {

      header.setIsTitle(false)
      header.setIsArrow(false)
   }, [])

   return (
      <div className={styles.HomeProject} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setsortListBy} firstText={ALL} secondText={MY_CARE} thirdText={WAITING_CUSTOMER} counter={data.projects.length} />

         <ul className={styles.list}>
            {data.projects && (

               data.projects.length === 0 ?

                  <div className={styles.noProjects} >
                     <div className={styles.noProjectsContainer}>
                        <div className={styles.letStart} >{LETS_GO}</div>
                        <div className={styles.iconCall} >
                           {ICON}
                           <img src='/images/icons/iconCallYou.svg' alt="iconCallYou" />
                           {CALL_YOU}
                        </div>
                     </div>
                  </div> :

                  sortListBy === ALL && sortDirection ?  //ignore done
                     <>{
                        data.projects
                           .filter(item => item.status !== 'done')
                           .sort((a, b) => {
                              return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
                           })
                           .map(item =>
                              <ListItem
                                 key={item._id}
                                 status={item.status}  // item.steps[0].status
                                 mainTitle={item.client.clientName}
                                 secondaryTitle={item.name}
                                 sconderyBoldTitle={item.steps[0].name}  //get current temp
                                 time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                 link={`/project/${item._id}`}  //path
                              />
                           )}
                        {data.projects
                           .filter(item => item.status === 'done')
                           .sort((a, b) => {
                              return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
                           })
                           .map(item =>
                              <ListItem
                                 key={item._id}
                                 status={item.status}  // item.steps[0].status
                                 mainTitle={item.client.clientName}
                                 secondaryTitle={item.name}
                                 sconderyBoldTitle={item.steps[0].name}  //get current temp
                                 time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                 link={`/project/${item._id}`}  //path
                              />
                           )
                        }</> :

                     sortListBy === ALL && !sortDirection ?
                        <>{

                           data.projects
                              .filter(item => item.status !== 'done')
                              .sort((a, b) => {
                                 return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
                              })
                              .map(item =>
                                 <ListItem
                                    key={item._id}
                                    status={item.status}
                                    mainTitle={item.client.clientName}
                                    secondaryTitle={item.name}
                                    sconderyBoldTitle={item.steps[0].name}  //get current temp
                                    time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                    link={`/project/${item._id}`}  //path
                                 />
                              )}{
                              data.projects
                                 .filter(item => item.status === 'done')
                                 .sort((a, b) => {
                                    return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
                                 })
                                 .map(item =>
                                    <ListItem
                                       key={item._id}
                                       status={item.status}
                                       mainTitle={item.client.clientName}
                                       secondaryTitle={item.name}
                                       sconderyBoldTitle={item.steps[0].name}  //get current temp
                                       time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                       link={`/project/${item._id}`}  //path
                                    />
                                 )
                           }</> :

                        sortListBy === MY_CARE && sortDirection ?

                           data.projects
                              .sort((a, b) => {
                                 return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
                              })
                              .map(item =>
                                 item.status === "biz" &&
                                 <ListItem
                                    key={item._id}
                                    status={item.status}
                                    mainTitle={item.client.clientName}
                                    secondaryTitle={item.name}
                                    sconderyBoldTitle={item.steps[0].name}  //get current temp
                                    time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                    link={`/project/${item._id}`}  //path
                                 />

                              ) :

                           sortListBy === MY_CARE && !sortDirection ?

                              data.projects
                                 .sort((a, b) => {
                                    return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
                                 })
                                 .map(item =>
                                    item.status === "biz" &&
                                    <ListItem
                                       key={item._id}
                                       status={item.status}
                                       mainTitle={item.client.clientName}
                                       secondaryTitle={item.name}
                                       sconderyBoldTitle={item.steps[0].name}  //get current temp
                                       time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                       link={`/project/${item._id}`}  //path
                                    />

                                 ) :

                              sortListBy === WAITING_CUSTOMER && sortDirection ?

                                 data.projects
                                    .sort((a, b) => {
                                       return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
                                    })
                                    .map(item =>
                                       item.status === "client" &&
                                       <ListItem
                                          key={item._id}
                                          status={item.status}
                                          mainTitle={item.client.clientName}
                                          secondaryTitle={item.name}
                                          sconderyBoldTitle={item.steps[0].name}  //get current temp
                                          time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                          link={`/project/${item._id}`}  //path
                                       />

                                    ) :

                                 sortListBy === WAITING_CUSTOMER && !sortDirection ?

                                    data.projects
                                       .sort((a, b) => {
                                          return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
                                       })
                                       .map(item =>
                                          item.status === "client" &&
                                          <ListItem
                                             key={item._id}
                                             status={item.status}
                                             mainTitle={item.client.clientName}
                                             secondaryTitle={item.name}
                                             sconderyBoldTitle={item.steps[0].name}  //get current temp
                                             time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                             link={`/project/${item._id}`}  //path
                                          />

                                       ) :
                                    <div>error</div>
            )}
         </ul>

         <div className={styles.sortDirection} onClick={() => setSortDirection(!sortDirection)} >
            {sortDirection ?
               <img src='/images/icon-btns/1to2.svg' alt='sort by date' /> :
               <img src='/images/icon-btns/2to1.svg' alt='sort by date' />
            }
         </div>
      </div>
   )
}



export default HomeProject