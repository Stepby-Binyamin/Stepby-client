import styles from "../style.module.css";

export default function RadioBtn({ arr }) {
  return (
    <div className={styles.wraper}>
      {arr.map((data) => {
        console.log(data);
        return (
          <label className={styles.container} key={`${data}lbl`}>
            <input type="radio" name="radio" />
            <span className={styles.checkmark} key={data}>
              <p>{data}</p>
            </span>
          </label>
        );
      })}
    </div>
  );
}
