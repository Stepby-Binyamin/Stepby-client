import React from 'react'
import styles from "./style.module.css"

const HomeTemplate = ({ style = {}, ...props }) => {

   return (
      <div className={styles.HomeTemplate} style={style} {...props} >

      </div>
   )
}

export default HomeTemplate