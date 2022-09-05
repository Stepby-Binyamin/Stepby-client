import styles from './style.module.css'


const Icon24 = ({ name,onChange,src }) => {

  return (
    <image className={styles.input} onChange={onChange} name={name} src={src}/>
  );
}

export default Icon24;
