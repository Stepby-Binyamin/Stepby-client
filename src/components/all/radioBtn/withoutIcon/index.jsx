import styles from "../style.module.css";

export default function RadioBtn({ arr, changeFunc }) {
  return (
    <div className={styles.wraper}>
      {arr.map((data) => {
        return (
          <label className={styles.container} key={`${data}lbl`}>
            <input type="radio" name="radio" value={data} onChange={changeFunc} />
            <span className={styles.checkmark} key={data}>
              <p>{data}</p>
            </span>
          </label>
        );
      })}
    </div>
  );
}
