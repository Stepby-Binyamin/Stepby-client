import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from "./style.module.css"
import SwipeLeft from '../../all/SwipeLeft'

const ListItem = ({
   style = {},
   inTreatmentOf = "b",  //"c"
   mainTitle = "איסוף הרשאות",
   secondaryTitle = "בהמתנה ל",  //"בטיפול " "complete"
   sconderyBoldTitle = "אפיון",
   firstStep = true, //or false
   time = "0d",
   link,  //path
   complete, //true or false
   up,
   down,
   ...props
}) => {

   const seperatorIcon = ">";
   const { pathname } = useLocation();
   const [showMoveArrow, setShowMoveArrow] = useState(false);

   const moveItem = () => {
      setShowMoveArrow(true);
   }
   const closeItem = () => {
      setShowMoveArrow(false)
   }

   return (
      <SwipeLeft func onSwipe={moveItem}>
         <li className={styles.ListItem} style={style} {...props} onClick={closeItem}>
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
               {complete &&
                  <img src={'/images/icons/smallCheckedGrey.svg'} alt="checked" className={styles.checked} />}

               {secondaryTitle ?
                  <div className={styles.col}>
                     <div className={styles.row}>

                        <div className={complete ? styles.grey : styles.current}>{mainTitle}</div>

                        {firstStep &&
                           <div className={styles.firstStep}>יוצאים לדרך!</div>
                        }

                     </div>

                     {secondaryTitle === "complete" ?
                        <div className={styles.complete}>
                           <img src={'/images/icons/smallChecked.svg'} alt="checked" style={{ "marginLeft": "4px" }} />
                           הושלם
                        </div> :

                        <div className={styles.row}>
                           <div className={styles.secondaryTitle}>{secondaryTitle}</div>
                           {sconderyBoldTitle && <>
                              <div className={styles.secondaryTitleTriangle}>{seperatorIcon}</div>
                              <div className={styles.secondaryBold}>{sconderyBoldTitle}</div>
                           </>}
                           <div className={sconderyBoldTitle ? styles.timeEnd : styles.time}>{time}</div>
                        </div>
                     }

                  </div> :
                  <div className={styles.grey}>{mainTitle}</div>
               }

            </NavLink>
         </li>
      </SwipeLeft>
   )
}

export default ListItem