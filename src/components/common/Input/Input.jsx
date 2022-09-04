import styles from './style.module.css'

const Input = ({ name, placeholder, onChange, type }) => {

  return (
    <input className={styles.input} type={type} onChange={onChange} name={name} placeholder={placeholder} />
  );
}

export default Input;
