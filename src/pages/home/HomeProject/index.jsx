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
            inTreatmentOf={item.status} //  biz/client/done
               mainTitle={item.client.clientName}
               secondaryTitle={item.name} 
               sconderyBoldTitle={item.steps[0].name}  //get current temp
               // isFirstStep={true} 
               time={"0d"}
               link  //path
               up={up}
               down={down}
            />

            )}
         </ul>
      </div>
   )
}

export default HomeProject