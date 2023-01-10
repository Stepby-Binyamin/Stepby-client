import React, { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import styles from "./style.module.css"

const StepEditListItem = ({ title, type, onClickItem, data, style = {}, ...props }) => {
   const { language } = useContext(mainContext)

   // exsisting icon svg images in arr belowe
   const iconsArr = ["answer", "file", "list", "gradin", "payment", "img", "pdf", "video"]
   let icon
   let content
   switch (type) {
      case "file":
         icon = "Upload"
         content = `${language.COLLECTING} | ${language.UPLOAD}`
         break;
      case "img":
         icon = "image"
         content = `${language.SHOW} | ${language.IMG}`
         break;
      case "pdf":
         icon = "filePDF"
         content = `${language.SHOW} | ${language.FILE_PDF}`
         break;
      case "answer":
         icon = "answer"
         content = `${language.COLLECTING} | ${language.SIMPLE_ANS}`
         break;

      default:
         break;
   }

   return (
      <li className={styles.StepEditListItem} style={style} {...props} onClick={() => {/*onClickItem(type, data)*/ }} >
         <div className={styles.iconContainer} >
            <img className={styles.widgetIcon} src={`/images/icon-btns/${icon}.svg`} alt="" />  {/* by type */}
         </div>
         <div className={styles.columContainer} >
            <div className={styles.title} >{title}</div>
            <div className={styles.content} >{content}</div>
         </div>
      </li>
   )
}
export default StepEditListItem