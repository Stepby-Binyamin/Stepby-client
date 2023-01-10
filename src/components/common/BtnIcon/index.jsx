import React, { useContext } from 'react'
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css";

const BtnIcon = ({ onClick, index, icon = "", style = {}, text, textColor = "#7C818D", isSoon = false, ...props }) => {
  const { language } = useContext(mainContext)
  return (
    <button onClick={() => onClick(index)} className={styles.btnCeckBoxContainer} style={style} {...props}>
      <div className={styles.innerContainer}>
        <div className={styles.right}>
          <img src={icon} alt="" />
          <div style={{ color: textColor }} className={styles.text}>
            {text}
          </div>
        </div>
        {isSoon && <div className={styles.left}>{`${language.SOON}!`}</div>}
      </div>
    </button>
  );
};
export default BtnIcon;