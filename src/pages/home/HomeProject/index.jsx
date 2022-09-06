import React, { useState, useEffect, useContext } from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
// import HeaderLogo from '../../../components/common/HeaderLogo'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'

const HomeProject = ({ style = {}, ...props }) => {


   const { ALL, MY_CARE, WAITING_CUSTOMER, TREATMENT, COMPLET, LETS_GO, ICON, CALL_YOU } = languages[0].dict
   const up = () => { };
   const down = () => { };
   const [api, setapi] = useState()
   const [sortListBy, setsortListBy] = useState()
   const { data } = useContext(dataContext)
   const { header } = useContext(mainContext)


   useEffect(() => {

      header.setIsTitle(true)
      header.setIsArrow(false)
      console.log(data.projects[0]);

   }, [])

   return (
      <div className={styles.HomeProject} style={style} {...props} >
         {/* <HeaderLogo /> */}
         <NavLink />
         <NavLinkTab state={sortListBy} setState={setsortListBy} firstText={ALL} secondText={MY_CARE} thirdText={WAITING_CUSTOMER} counter={1} />

         <ul className={styles.list}>
            {data.projects && data.projects.map(item=>

            <ListItem
            key={item._id}
            inTreatmentOf={"biz"} //  biz/client/done
               mainTitle={item.client.clientName}
               secondaryTitle={item.name} 
               sconderyBoldTitle={item.steps[0].name}  //get current temp
               // isFirstStep={true} 
               time={ item.status==="done"? "" : convertDate(item.lastApprove)}
               link  //path
               up={up}
               down={down}
            />

            )}
         </ul>
      </div>
   )
}

function convertDate(date){
   //convert Date to number of days/weeks elpased
   const current = Date.now()
   const diff =  current -  date.getTime()
   const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
   if(!(diffDays % 7)){
       const weeks= diffDays/7
       return {type:"w",time:weeks}
   }
    return   {type:"d",time:diffDays}

}

export default HomeProject