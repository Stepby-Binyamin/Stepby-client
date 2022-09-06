import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import styles from "./style.module.css"
import HeaderLogo from '../../../components/common/HeaderLogo'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'

const HomeProject = ({ style = {}, ...props }) => {


   const up =()=>{};
   const down =()=>{};
   const [api, setapi] = useState()
   const [sortListBy, setsortListBy] = useState()


   useEffect(()=>{

      // axios.get('http://localhost:3002/api/',
      // { headers: { Authorization: 'Bearer ' + localStorage.userToken } } )
      // .then(response =>{  
      //     console.log(response.data);
      //     setSongs(response.data);
      // })
      // .catch(error =>{
      //     console.log(error)
      //     setPopup(error.response.data);
      // });

   },[])

   return (
      <div className={styles.HomeProject} style={style} {...props} >
         <HeaderLogo />
         <NavLink />
         <NavLinkTab state={sortListBy} setState= {setsortListBy} firstText={"הכל"} secondText={"בטיפול שלי"} thirdText={"ממתין ללקוח"} counter={1} />
         <ListItem
            inTreatmentOf={"b"} //c
            mainTitle={"איסוף הרשאות"}
            secondaryTitle={"בהמתנה ל"}  //"בטיפול " "complete"
            sconderyBoldTitle={"אפיון"}
            firstStep={true} //or false
            time={"0d"}
            link  //path
            complete ={''} //true or false
            up={up}
            down={down}
         />
      </div>
   )
}

export default HomeProject