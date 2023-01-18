import React from 'react'
import styles from "./style.module.css"
import Loading from '../Loading'
const BtnSubmitText = ({ icon, color, text, func, ...props }) => {

  return (
    <div className={styles.con}>
      <button className={`${styles[color]} ${styles.btn}`} onClick={func}>
        <img src={`./images/icon-btns/${icon}`} alt="" />
        {text}
        {/* <Loading /> TODO */}
      </button>
    </div>

  );
}
export default BtnSubmitText