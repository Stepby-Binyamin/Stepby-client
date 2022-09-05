import styles from "../style.module.css";

export default function RadioBtnWithIcon({ obj }) {

  return (
    <div className={styles.wraper}>
      {obj.map((data) => {
        console.log(data);
        return (
          <label className={styles.container} key={`${data}lbl`}>
            <input type="radio" name="radio" />
            <span className={styles.checkmark} key={data.name}>
              <img src={`/images/icons/${data.icon}.svg`} alt='' />
              <p>{data.name}</p>
            </span>
          </label>
        );
      })}
    </div>
  );
}
