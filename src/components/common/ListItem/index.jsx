import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'

const ListItem = ({
   style = {},
   inTreatmentOf = "",  // "biz" / client" / "done"
   mainTitle = "",
   secondaryTitle ='', // "בהמתנה ל" "בטיפול " "done"
   sconderyBoldTitle = "",
   isFirstStep = false, //or true
   time = "",
   link,  //path
   up,
   down,
   ...props
}) => {

   const {ALL, MY_CARE, WAITING_CUSTOMER, TREATMENT, COMPLET, LETS_GO, ICON, CALL_YOU} = languages[0].dict
   const seperatorIcon = ">";
   const { pathname } = useLocation();
   const [showMoveArrow, setShowMoveArrow] = useState(false);

   const moveItem = () => {
      setShowMoveArrow(!showMoveArrow);
   }

   return (
      <li className={styles.ListItem} onClick={moveItem} style={style} {...props} >
         <NavLink to={link || pathname} className={styles.navlink}>


            {
               showMoveArrow && <>
                  <img src={`/images/icons/listArrowDown.svg`} onClick={() => down()} alt="move down" style={{ "marginLeft": "4px" }} />
                  <img src={`/images/icons/listArrowUp.svg`} onClick={() => up()} alt="move up" style={{ "marginLeft": "7.5px" }} /> </>
            }

            {inTreatmentOf === "biz" &&
               <img src={`/images/icons/triangle.svg`} alt="triangle" className={styles.triangle} />
            }
            {inTreatmentOf === "client" &&
               <img src={`/images/icons/circle.svg`} alt="circle" className={styles.circle} />
            }
            {inTreatmentOf === "done" &&
               <img src={'/images/icons/smallCheckedGrey.svg'} alt="checked" className={styles.checked} />}

            {secondaryTitle ?
               <div className={styles.col}>
                  <div className={styles.row}>

                     <div className={inTreatmentOf === "client" ? styles.grey : styles.current}>{mainTitle}</div>

                     {isFirstStep &&
                        <div className={styles.firstStep}>יוצאים לדרך!</div>
                     }

                  </div>

                  {secondaryTitle === "done" ?
                     <div className={styles.done}>
                        <img src={'/images/icons/smallChecked.svg'} alt="checked" style={{ "marginLeft": "4px" }} />
                        הושלם
                     </div> :

                     <div className={styles.row}>
                        <div className={styles.secondaryTitle}>{secondaryTitle}</div>
                        {sconderyBoldTitle && <>
                           <div className={styles.secondaryTitleTriangle}>{seperatorIcon}</div>
                           <div className={styles.secondaryBold}>{sconderyBoldTitle}</div>
                        </>}
                        <div className={
                           sconderyBoldTitle && inTreatmentOf === "biz" ? styles.timeEndOrange :
                              sconderyBoldTitle && inTreatmentOf === "client" ? styles.timeEndGrey :
                                 inTreatmentOf === "biz" ? styles.timeOrange :
                                    styles.timeGrey
                        }>{time}</div>
                     </div>
                  }

               </div> :
               <div className={styles.grey}>{mainTitle}</div>
            }

         </NavLink>
      </li>
   )
}

export default ListItem