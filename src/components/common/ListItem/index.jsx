import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import SwipeLeft from "../../all/SwipeLeft"

const ListItem = ({
   style = {},
   status = "",  // "biz" / client" / "done"
   mainTitle = "",
   secondaryTitle = '',  // "done"  / small fontsize, light grey
   secondaryTitleWeight = '',  //next to secondaryTitle, small fontsize, light grey, weight 500
   sconderyBoldTitle = "",     //triangle-seperator ,time at end, small fontsize, light grey, weight 500 
   isFirstStep = false, //set true if step index=0
   time = "", // `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`
   link,  //path to navigate to onclick
   up,   //send function to change index up
   down, //send function to change index down
   ...props
}) => {

   const { TO_THE_WAY, COMPLET } = languages[0].dict
   const seperatorIcon = ">";
   const navigate = useNavigate()
   const [showMoveArrow, setShowMoveArrow] = useState(false);

   const moveItem = () => {
      up && down &&
         setShowMoveArrow(true);
   }
   // const closeItem = () => {
   //    setShowMoveArrow(false)
   // }
   const handleOnClick = () => {
      showMoveArrow? setShowMoveArrow(false) : link && navigate(link)
   }

   return (
      <SwipeLeft onSwipe={moveItem}>
         <li className={styles.ListItem} onClick={handleOnClick} style={style} {...props} >
            {/* <NavLink to={link || pathname} className={styles.navlink}> */}


               {
                  showMoveArrow && <>
                     <img src={`/images/icons/listArrowDown.svg`} onClick={() => down()} alt="move down" style={{ "marginLeft": "4px" }} />
                     <img src={`/images/icons/listArrowUp.svg`} onClick={() => up()} alt="move up" style={{ "marginLeft": "7.5px" }} /> </>
               }

               {status === "biz" &&
                  <img src={`/images/icons/triangleOrange.svg`} alt="triangle" className={styles.triangle} />
               }
               {status === "client" &&
                  <img src={`/images/icons/circle.svg`} alt="circle" className={styles.circle} />
               }
               {status === "done" &&
                  <img src={'/images/icons/smallCheckedGrey.svg'} alt="checked" className={styles.checked} />}

               {secondaryTitle ?
                  <div className={styles.col}>
                     <div className={styles.row}>

                        <div className={secondaryTitle === "done" ? styles.mainGrey : status === "done" ? styles.mainGreyBold : styles.current}>{mainTitle}</div>

                        {isFirstStep && secondaryTitle !== "done" &&
                           <div className={styles.firstStep}>{TO_THE_WAY}</div>
                        }

                     </div>

                     {secondaryTitle === "done" ?
                        <div className={styles.done}>
                           <img src={'/images/icons/smallChecked.svg'} alt="checked" style={{ "marginLeft": "4px" }} />
                           {COMPLET}
                        </div> :

                        <div className={styles.row}>
                           <div className={styles.secondaryTitle}>{secondaryTitle}</div>
                           {secondaryTitleWeight &&
                              <div className={styles.secondaryTitleWeight}>{secondaryTitleWeight}</div>}
                           {sconderyBoldTitle && <>
                              <div className={styles.secondaryTitleTriangle}>{seperatorIcon}</div>
                              <div className={styles.secondaryBold}>{sconderyBoldTitle}</div>
                           </>}
                           <div className={
                              sconderyBoldTitle && status === "biz" ? styles.timeEndOrange :
                                 sconderyBoldTitle && status === "client" ? styles.timeEndGrey :
                                    status === "biz" ? styles.timeOrange :
                                       styles.timeGrey
                           }>{time}</div>
                        </div>
                     }

                  </div> :
                  <div className={styles.grey}>{mainTitle}</div>
               }

            {/* </NavLink> */}
         </li>
      </SwipeLeft>
   )
}

export default ListItem