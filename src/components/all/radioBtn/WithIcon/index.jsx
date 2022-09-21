import { useEffect } from "react";
import styles from "../style.module.css";

export default function RadioBtnWithIcon({ obj, changeFunc, data }) {


  // TODO -  checked by the state in the father -
  // we don't talk to the dom like that EVER! 

  useEffect(() => {
    if (document.getElementById('first')) {
      document.getElementById('first').checked = true
    }
  }, [document.getElementById('first')])

  return (
    <div className={styles.wraper}>
      {obj.map((data) => {
        return (
          <label className={styles.container} key={`${data.icon}lbl`}>
            {obj[0].name === data.name ?
              <input type="radio" id="first" name="radio" value={data.name}
                onClick={changeFunc} />
              : <input type="radio" name="radio" value={data.name}
                onClick={changeFunc} />}
            <span className={styles.checkmark} key={data.name}>
              <img src={`/images/icons/${data.icon}Orange.svg`} alt='' />
              <p>{data.name}</p>
            </span>
          </label>
        );
      })}
    </div>
  );
}
