import styles from './style.module.css'

//the componneta get object array with 3 parametr 1)color 2)icon 3)function or url(for wahtsapp)
// color option--> gray,lite,orenge,green
// icon  option--> + , 1to2 , 2to1 , 3points , wahtsapp, V , triangle ,pencil
//create by bezalel 0542188938
const BtnHolder = ({ buttons = {} }) => {

  return (
    <>
    <div className={styles.container}>
    {buttons.map((v, i) =>{ return (
      <button  key={`${v.icon}`} className={`${styles[v.color]} ${styles.submit} `}>
        {v.link? <a href={`https://wa.me/${v.link || "+972535277354"}`}><img src={`/images/icon-btns/${v.icon}.svg`} alt={v.icon} /> </a>:
         <div onClick={v.func}><img src={`/images/icon-btns/${v.icon}.svg`} alt={v.icon} /> </div> }
        
      </button>)}
      
      )}
      </div>
    </>
    )
}

export default BtnHolder;
