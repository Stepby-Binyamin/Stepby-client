import styles from "../style.module.css";

export default function RadioBtnWithIcon({ obj , changeFunc}) {

  return (
    <div className={styles.wraper}>
      {obj.map((data) => {
        return (
          <label className={styles.container} key={`${data.icon}lbl`}>
            <input type="radio" name="radio" value={data.name} onChange={changeFunc} />
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
