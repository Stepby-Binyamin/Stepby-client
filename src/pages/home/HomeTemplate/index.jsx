import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
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
import apiCalls from '../../../functions/apiRequest'

const HomeTemplate = ({ style = {}, ...props }) => {
   // const { userData, setUserData } = useContext(userContext)
   // console.log(userData);


   const admin = true

   const { header, drawer, language} = useContext(mainContext)
   const { MY_TEMP, RECOMENDED, LAST_DUPLICATED, CREATED_BY, PROJECTS, TEMPLATES } = language
   const [dataState, setDataState] = useState()  
   const [recomend, setRecomend] = useState()   
   const [sortListBy, setSortListBy] = useState(MY_TEMP)
   // const navigate = useNavigate()

   const filterTemp = dataState && dataState.filter(item => item.isTemplate)
   const dataToPrint = sortListBy === MY_TEMP ? filterTemp : recomend

   const tempCounter = filterTemp&&filterTemp.length

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)

      apiCalls('get', '/template/templateByUser')
         .then(response => {
            setDataState(response);
         })
         .catch(error => {
            console.log(error)
         });
         
         apiCalls('get', '/template/categoriesByUser')
         .then(response => {
            setRecomend(response);
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
      admin ? drawer.setDrawer(<CreateTemplateGeneral printData={printData} />) :
         drawer.setDrawer(<CreateTemplate printData={printData} />)
   }
   const openDrawer = () => {
      drawer.setDrawer(<AllAction newTempFunc={createTemp} newUserFunc={createClient} projectToUserFunc={createProject} />)
   }
   const printData = (d) => {
      console.log("printData:", d);
   }

   return (
      <div className={styles.HomeTemplate} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setSortListBy} firstText={MY_TEMP} secondText={RECOMENDED} counter={tempCounter} />

         <ul className={styles.list}>
            {
               // !dataToPrint ? <div>loading...</div> :

               dataToPrint && dataToPrint.map(item =>
                  <ListItem
                  key={item._id}
                  mainTitle={item.name}  
                  secondaryTitle={sortListBy === MY_TEMP ? LAST_DUPLICATED : CREATED_BY}  
                  secondaryTitleWeight={sortListBy === MY_TEMP ?
                     `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}` : 
                     `${item.creatorId.firstName} ${item.creatorId.lastName}`}
                     link={`/template/${item._id}`}  
                     linkState={{temp: item, mode: "template"}}
                  />)

            }
         </ul>

         {sortListBy === MY_TEMP &&
            <BtnHolder buttons={[{ color: "gray", icon: "+", func: openDrawer }]} />
         }
      </div>
   )
}

export default HomeTemplate