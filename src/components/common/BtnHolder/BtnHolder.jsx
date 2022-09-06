import styles from './style.module.css'


// color option--> gray,lite,orenge,green
// icon  option--> +.svg , 1to2.svg , 2to1.svg , 3points.svg , wahtsapp.svg , V.svg , triangle.svg ,pencil

const BtnHolder = ({ color, func, icon }) => {
 

  return (
    <button className={`${styles[color]} ${styles.submit}`} onClick={() => func}>
      <img src={"/images/icon-btns/" + icon+".svg"} alt={icon} />
    </button>
  );
}

export default BtnHolder;
