import styles from './style.module.css'

const Input = ({ name, placeholder, onChange, type, missingData = false, ...props }) => {

  return (
    <input
      className={`${styles.input} ${missingData && styles.missing_data}`}
      type={type}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      {...props} />
  );
}
export default Input;