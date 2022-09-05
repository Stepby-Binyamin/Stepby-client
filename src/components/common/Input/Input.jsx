import styles from './style.module.css'

const Input = ({ name, placeholder, onChange, type, ...props }) => {

  return (
    <input {...props} className={styles.input} type={type} onChange={onChange} name={name} placeholder={placeholder} />
  );
}

export default Input;
