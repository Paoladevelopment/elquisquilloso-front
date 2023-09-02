import './BarraBusqueda.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export const BarraBusqueda = () => {
  return (
    <div className='barra-busqueda'>
      <input type='text' placeholder='Buscar' />
      <div className='barra-busqueda__btn'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};
