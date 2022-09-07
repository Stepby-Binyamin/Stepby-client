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
   const { header } = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [dataState, setDataState] = useState(data.projects.filter(item => item.status !== 'done'))
   const [donedata, setDoneData] = useState(data.projects.filter(item => item.status === 'done'))
   const [sortListBy, setsortListBy] = useState(ALL)
   const [sortDirection, setSortDirection] = useState(false)

   const bizCounter = data.projects.filter(item => item.status === 'biz').length
   const clientCounter = data.projects.filter(item => item.status === 'client').length


   const filterActives = () => {
      let filter = data.projects.filter(item => item.status !== 'done')
      setDataState(filter)
   }
   const filterDone = () => {
      let filter = data.projects.filter(item => item.status === 'done')
      setDoneData(filter)
   }
   const filterBiz = () => {
      let filter = data.projects.filter(item => item.status === 'biz')
      setDataState(filter)
   }
   const filterClient = () => {
      let filter = data.projects.filter(item => item.status === 'client')
      setDataState(filter)
   }
   const sortAtoB = (data) => {
      return data && data.sort((a, b) => {
         return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
      })
   }
   const sortBtoA = (data) => {
      return data && data.sort((a, b) => {
         return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
      })
   }

   
   
   // console.log(dataState);
   // dataState=[]

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)
      setDataState(sortAtoB(dataState))
      setDoneData(sortAtoB(donedata))
      
   }, [])

   useEffect(() => {
      if (sortListBy === ALL) {
         filterActives()
         filterDone()
      }
      else if (sortListBy === MY_CARE) {
         filterBiz()
         setDoneData(false)
      }
      else if (sortListBy === WAITING_CUSTOMER) {
         filterClient()
         setDoneData(false)
      }
   }, [sortListBy])

   const sortFunc = () => {
       setSortDirection(!sortDirection)
      if (sortDirection) {
         setDataState(sortAtoB(dataState))
         setDoneData(sortAtoB(donedata))
      }
      else {
         setDataState(sortBtoA(dataState))
         setDoneData(sortBtoA(donedata))
      }
   }
   
   return (
      <div className={styles.HomeProject} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setsortListBy} firstText={ALL} secondText={MY_CARE} thirdText={WAITING_CUSTOMER} counter2={bizCounter} counter3={clientCounter} />

         <ul className={styles.list}>
            {!dataState ? <div>loading...</div> : (
               dataState.length === 0 ?

                  <div className={styles.noProjects} >
                     <div className={styles.noProjectsContainer}>
                        <div className={styles.letStart} >{LETS_GO}</div>
                        <div className={styles.iconCall} >
                           {ICON}
                           <img src='/images/icons/iconCallYou.svg' alt="iconCallYou" className={styles.iconCallIcon} />
                           {CALL_YOU}
                        </div>
                     </div>
                  </div> :
                  <>{
                     dataState.map(item =>
                        <ListItem
                           key={item._id}
                           status={item.status}  // item.steps[0].status
                           mainTitle={item.client.clientName}
                           secondaryTitle={item.name}
                           sconderyBoldTitle={item.steps[0].name}  //get current temp
                           time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                           link={`/project/${item._id}`}  //path
                        />)}{
                        donedata && donedata.map(item =>
                           <ListItem
                              key={item._id}
                              status={item.status}  // item.steps[0].status
                              mainTitle={item.client.clientName}
                              secondaryTitle={item.name}
                              sconderyBoldTitle={item.steps[0].name}  //get current temp
                              time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                              link={`/project/${item._id}`}  //path
                           />
                        )}</>
                        )}
                     </ul>
            
                     <div className={styles.sortDirection} onClick={sortFunc} >
                        {sortDirection ?
                           <img src='/images/icon-btns/1to2.svg' alt='sort by date' /> :
                           <img src='/images/icon-btns/2to1.svg' alt='sort by date' />
                        }
                     </div>
                  </div>
               )
            }
            
            export default HomeProject

            // useEffect(() => {
            //    if(sortDirection){
            //    setDataState(sortBtoA(dataState))
            //    donedata && 
            //    setDoneData(sortBtoA(donedata))
            //    }else{
            //    setDataState(sortAtoB(dataState))
            //    donedata && 
            //    setDoneData(sortAtoB(donedata))
            //    }
            // }, [ sortDirection])

            
                        // sortListBy === ALL && sortDirection ?  
                        //    <>{
                           //       dataState
                           //          .filter(item => item.status !== 'done')
               //          .sort((a, b) => {
               //             return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
               //          })
               //          .map(item =>
               //             <ListItem
               //                key={item._id}
               //                status={item.status}  // item.steps[0].status
               //                mainTitle={item.client.clientName}
               //                secondaryTitle={item.name}
               //                sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                link={`/project/${item._id}`}  //path
               //             />
               //          )}
               //       {dataState
               //          .filter(item => item.status === 'done')
               //          .sort((a, b) => {
               //             return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
               //          })
               //          .map(item =>
               //             <ListItem
               //                key={item._id}
               //                status={item.status}  // item.steps[0].status
               //                mainTitle={item.client.clientName}
               //                secondaryTitle={item.name}
               //                sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                link={`/project/${item._id}`}  //path
               //             />
               //          )
               //       }</> :

               //    sortListBy === ALL && !sortDirection ?
               //       <>{

               //          dataState
               //             .filter(item => item.status !== 'done')
               //             .sort((a, b) => {
               //                return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
               //             })
               //             .map(item =>
               //                <ListItem
               //                   key={item._id}
               //                   status={item.status}
               //                   mainTitle={item.client.clientName}
               //                   secondaryTitle={item.name}
               //                   sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                   time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                   link={`/project/${item._id}`}  //path
               //                />
               //             )}{
               //             dataState
               //                .filter(item => item.status === 'done')
               //                .sort((a, b) => {
               //                   return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
               //                })
               //                .map(item =>
               //                   <ListItem
               //                      key={item._id}
               //                      status={item.status}
               //                      mainTitle={item.client.clientName}
               //                      secondaryTitle={item.name}
               //                      sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                      time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                      link={`/project/${item._id}`}  //path
               //                   />
               //                )
               //          }</> :

               //       sortListBy === MY_CARE && sortDirection ?

               //          dataState
               //             .sort((a, b) => {
               //                return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
               //             })
               //             .map(item =>
               //                item.status === "biz" &&
               //                <ListItem
               //                   key={item._id}
               //                   status={item.status}
               //                   mainTitle={item.client.clientName}
               //                   secondaryTitle={item.name}
               //                   sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                   time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                   link={`/project/${item._id}`}  //path
               //                />

               //             ) :

               //          sortListBy === MY_CARE && !sortDirection ?

               //             dataState
               //                .sort((a, b) => {
               //                   return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
               //                })
               //                .map(item =>
               //                   item.status === "biz" &&
               //                   <ListItem
               //                      key={item._id}
               //                      status={item.status}
               //                      mainTitle={item.client.clientName}
               //                      secondaryTitle={item.name}
               //                      sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                      time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                      link={`/project/${item._id}`}  //path
               //                   />

               //                ) :

               //             sortListBy === WAITING_CUSTOMER && sortDirection ?

               //                dataState
               //                   .sort((a, b) => {
               //                      return (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime())
               //                   })
               //                   .map(item =>
               //                      item.status === "client" &&
               //                      <ListItem
               //                         key={item._id}
               //                         status={item.status}
               //                         mainTitle={item.client.clientName}
               //                         secondaryTitle={item.name}
               //                         sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                         time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                         link={`/project/${item._id}`}  //path
               //                      />

               //                   ) :

               //                sortListBy === WAITING_CUSTOMER && !sortDirection ?

               //                   dataState
               //                      .sort((a, b) => {
               //                         return (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
               //                      })
               //                      .map(item =>
               //                         item.status === "client" &&
               //                         <ListItem
               //                            key={item._id}
               //                            status={item.status}
               //                            mainTitle={item.client.clientName}
               //                            secondaryTitle={item.name}
               //                            sconderyBoldTitle={item.steps[0].name}  //get current temp
               //                            time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
               //                            link={`/project/${item._id}`}  //path
               //                         />

               //                      ) :
               //                   <div>error</div>