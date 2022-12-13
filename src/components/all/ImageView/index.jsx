import React from 'react'
import styles from "./style.module.css"


const ImageView = ({ imgPath = "", imgDescription, style = {}, ...props }) => {

   return (
      <div style={style} {...props} >
         <img className={styles.img} src={imgPath} alt="" />
         <div className={styles.text}>{imgDescription}</div>
      </div>
   )
}
export default ImageView