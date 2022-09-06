import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from "./style.module.css"

const ListItem = ({
   style = {},
   inTreatmentOf = "b",  //"c"
   mainTitle = "איסוף הרשאות",
   secondaryTitle = "בהמתנה ל",  //"בטיפול " "done"
   sconderyBoldTitle = "אפיון",
   firstStep = true, //or false
   time = "0d",
   link,  //path
   done, //true or false
   up,
   down,
   ...props
}) => {

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

            {inTreatmentOf === "b" &&
               <img src={`/images/icons/triangle.svg`} alt="triangle" className={styles.triangle} />
            }
            {inTreatmentOf === "c" &&
               <img src={`/images/icons/circle.svg`} alt="circle" className={styles.circle} />
            }
            {done &&
               <img src={'/images/icons/smallCheckedGrey.svg'} alt="checked" className={styles.checked} />}

            {secondaryTitle ?
               <div className={styles.col}>
                  <div className={styles.row}>

                     <div className={done ? styles.grey : styles.current}>{mainTitle}</div>

                     {firstStep &&
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
                           sconderyBoldTitle && inTreatmentOf === "b" ? styles.timeEndOrange :
                              sconderyBoldTitle && inTreatmentOf === "c" ? styles.timeEndGrey :
                                 inTreatmentOf === "b" ? styles.timeOrange :
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