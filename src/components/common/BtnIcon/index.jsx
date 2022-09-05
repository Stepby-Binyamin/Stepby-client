import React from "react";
import styles from "./style.module.css";

const BtnIcon = ({ onClick, icon = "", style = {}, text, textColor = "#7C818D", isSoon = false, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btnCeckBoxContainer}
      style={style}
      {...props}
    >
      <div className={styles.innerContainer}>
        <div className={styles.right}>
          <img src={icon} alt="" />
          <div style={{ color: textColor }} className={styles.text}>
            {text}
          </div>
        </div>
        {isSoon && <div className={styles.left}>{isSoon ? "בקרוב!" : ""}</div>}
      </div>
    </button>
  );
};

export default BtnIcon;
