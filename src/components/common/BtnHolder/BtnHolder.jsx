import styles from './style.module.css'


// color option--> gray,lite,orenge,green
// icon  option--> + , 1to2 , 2to1 , 3points , wahtsapp, V , triangle ,pencil
//create by bezalel 0542188938
const BtnHolder = ({ color, func, icon }) => {


  return (
    <button className={`${styles[color]} ${styles.submit}`} onClick={() => func}>
      <img src={"/images/icon-btns/" + icon + ".svg"} alt={icon} />
    </button>
  );
}

export default BtnHolder;
