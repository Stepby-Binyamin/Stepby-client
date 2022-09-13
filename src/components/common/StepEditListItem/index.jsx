import React from 'react'
import styles from "./style.module.css"

const StepEditListItem = ({key, title, content, type, onClickItem, style = {}, ...props }) => {
   
 // exsisting icon svg images in arr belowe
   const iconsArr = ["answer", "file", "list", "gradin", "payment", "img", "pdf", "video"]
   const icon = type === "file" ? "Upload" : type === "img" ? "image" : type === "pdf" ? "filePDF" :type

   return (
      <li className={styles.StepEditListItem} style={style} {...props} onClick={()=>onClickItem(key, type)} >

         <div className={styles.iconContainer} >
            <img className={styles.widgetIcon} src={`/images/icon-btns/${icon}.svg`} />  {/* by type */}
         </div>

         <div className={styles.columContainer} >
            <div className={styles.title} >{title}</div>
            <div className={styles.content} >{content}</div>
         </div>

      </li>
   )
}

export default StepEditListItem