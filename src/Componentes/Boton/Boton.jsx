import './Boton.css';

export const Boton = ({type, text, onClick}) => {
  return (
    <button type={type} onClick={onClick} className="button">{text}</button>
  )
}
