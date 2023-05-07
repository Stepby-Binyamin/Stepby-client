import React from 'react'
import Loading from '../../common/Loading'
import styles from "./style.module.css"


const ImageView = ({ imgPath = "", imgDescription, style = {}, ...props }) => {

   return (
      <div style={style} {...props} >
         {imgPath ? <img className={styles.img} src={imgPath} alt="" />
            : <Loading />}
         <div className={styles.text}>{imgDescription}</div>
      </div>
   )
}
export default ImageView