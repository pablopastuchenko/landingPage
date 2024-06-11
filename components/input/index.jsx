import Styles from "./input.module.scss"

const Input = ({type, placeholder, pattern, required}) => {
   return <input 
   type={type}
   placeholder={placeholder}  
   pattern={pattern}
   title="Número de telefone precisa ser no formato (99) 9999-9999" required={required}
   className={Styles.input}
   />
}

export default Input