import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./style.module.css"
import SwipeLeft from "../../all/SwipeLeft"
import mainContext from '../../../context/mainContext'

const ListItem = ({
   style = {},
   status = "",  // "biz" / client" / "done"
   mainTitle = "",
   secondaryTitle = '',  // "done"  / small fontsize, light grey
   secondaryTitleWeight = '',  //next to secondaryTitle, small fontsize, light grey, weight 500
   secondaryBoldTitle = "",     //triangle-seperator ,time at end, small fontsize, light grey, weight 500 
   stepsNum,
   time = "", // `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`
   link,  //path to navigate to onclick
   linkState = '', //state fo navigate
   up,   //send function to change index up
   down, //send function to change index down
   step,
   index,
   ...props
}) => {
   const navigate = useNavigate()
   const { language } = useContext(mainContext)
   const [showMoveArrow, setShowMoveArrow] = useState(false);

   const moveItem = () => {
      if (up && down) {
         setShowMoveArrow(true);
         setTimeout(() => {
            setShowMoveArrow(false)
         }, 3000);
      }
   }
   const handleOnClick = () => {
      showMoveArrow ? setShowMoveArrow(false) : link && navigate(link, { state: linkState })
   }
   const imageDetails = () => {
      switch (status) {
         case "biz":
            return { src: `/images/icons/trialgeOrenge.svg`, alt: "trialgeOrenge", className: [`${styles.triangle}`] }
         case "client":
            return { src: `/images/icons/circle.svg`, alt: "circle", className: [`${styles.circle}`] }
         case "done":
            return { src: '/images/icons/smallCheckedGrey.svg', alt: "checked", className: [`${styles.checked}`] }
         default:
            break;
      }
   }

   return (
      <SwipeLeft onSwipe={moveItem}>
         <li className={styles.ListItem} onClick={handleOnClick} style={style} {...props} >
            {
               showMoveArrow && <>
                  {index !== stepsNum - 1 && <img src={`/images/icons/listArrowDown.svg`} onClick={() => down(step)} alt="move down" style={{ "marginLeft": "4px" }} />}
                  {index !== 0 && <img src={`/images/icons/listArrowUp.svg`} onClick={() => up(step)} alt="move up" style={{ "marginLeft": "7.5px" }} />}
               </>
            }
            {/* TODO img div container with min-width and flex center  ??*/}
            {status === "biz" &&
               <img src={`/images/icons/trialgeOrenge.svg`} alt="trialgeOrenge" className={styles.triangle} />

            }
            {status === "client" &&
               <img src={`/images/icons/circle.svg`} alt="circle" className={styles.circle} />
            }
            {status === "done" &&
               <img src={'/images/icons/smallCheckedGrey.svg'} alt="checked" className={styles.checked} />}

            {secondaryTitle ?
               <div className={styles.col}>
                  <div className={styles.row}>
                     <div className={secondaryTitle === "done" ? styles.mainGrey : status === "done" ? styles.mainGreyBold : styles.current}>
                        {mainTitle}
                     </div>
                     {index === 0 && secondaryTitle !== language.COMPLET &&
                        <div className={styles.firstStep}>{language.TO_THE_WAY}</div>
                     }
                  </div>

                  {secondaryTitle === language.COMPLET ?
                     <div className={styles.done}>
                        <img src={'/images/icons/smallChecked.svg'} alt="checked" style={{ "marginLeft": "4px" }} />
                        {language.COMPLET}
                     </div>
                     :
                     <div className={styles.row}>
                        <div className={styles.secondaryTitle}>{secondaryTitle}</div>
                        {secondaryTitleWeight &&
                           <div className={styles.secondaryTitleWeight}>{secondaryTitleWeight}</div>}
                        {secondaryBoldTitle && status !== "done" && <>
                           <div className={styles.secondaryTitleTriangle}>{">"}</div>
                           <div className={styles.secondaryBold}>{secondaryBoldTitle}</div>
                        </>}
                        <div className={
                           secondaryBoldTitle && status === "biz" ? styles.timeEndOrange :
                              secondaryBoldTitle && status === "client" ? styles.timeEndGrey :
                                 status === "biz" ? styles.timeOrange :
                                    styles.timeGrey
                        }>{time}</div>
                     </div>
                  }

               </div>
               :
               <div className={styles.grey}>{mainTitle}</div>
            }
         </li>
      </SwipeLeft>
   )
}

export default ListItem