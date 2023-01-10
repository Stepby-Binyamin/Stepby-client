import { useEffect } from "react";
import styles from "../style.module.css";

const RadioBtn = ({ arr = [], changeFunc }) => {

  useEffect(() => {
    if (document.getElementById('first')) {
      document.getElementById('first').checked = true
    }
  }, [document.getElementById('first')])

  return (
    <div className={styles.wrapper}>
      {arr.map((data) => {
        return (
          <label className={styles.container} key={`${data}lbl`}>
            {arr[0] === data ?
              <input type="radio" id="first" name="radio" value={data}
                onClick={changeFunc} />
              : <input type="radio" name="radio" value={data}
                onClick={changeFunc} />}
            <span className={styles.checkmark} key={data}>
              <p>{data}</p>
            </span>
          </label>
        );
      })}
    </div>
  );
}
export default RadioBtn