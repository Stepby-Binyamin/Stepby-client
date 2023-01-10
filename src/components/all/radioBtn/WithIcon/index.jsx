import { useState } from "react";
import { useEffect } from "react";
import styles from "../style.module.css";

const RadioBtnWithIcon = ({ obj, changeFunc, data }) => {
  const [choose, setChoose] = useState(obj[0].name)

  const func = (name) => {
    setChoose(name)
    changeFunc({ target: { name: "radio", value: name } }) //TODO -target
  }

  return (
    <div className={styles.wrapper}>
      {obj.map((btn, i) =>
        <div
          key={i}
          onClick={() => func(btn.name)}
          className={btn.name === choose ? `${styles.button} ${styles.checkmark}` : `${styles.button}`} >
          {btn.icon && <img src={`/images/icons/${btn.icon}Orange.svg`} alt='' />}
          <p className={styles.name_btn}>{btn.name}</p>
        </div>)}
    </div>
  );
}
export default RadioBtnWithIcon
