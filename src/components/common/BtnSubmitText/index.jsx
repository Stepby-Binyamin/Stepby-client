import React from 'react'
import styles from "./style.module.css"
import Loading from '../Loading'

const BtnSubmitText = ({ icon, color, text, func, isLoading = false, ...props }) => {
  console.log("🚀 ~ file: index.jsx:6 ~ BtnSubmitText ~ BtnSubmitText")

  return (
    <div className={styles.con}>
      <button className={`${styles[color]} ${styles.btn}`} onClick={func}>
        {
          isLoading ?
            <Loading />
            :
            <>
              <img src={`./images/icon-btns/${icon}`} alt="" />
              {text}
            </>
        }
      </button>
    </div>

  );
}
export default BtnSubmitText