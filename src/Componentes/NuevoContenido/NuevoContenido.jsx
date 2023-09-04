import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './NuevoContenido.css';
import { useState } from 'react';

export const NuevoContenido = ({ establecerNuevoBloque }) => {
  const [infoBloque, setInfoBloque] = useState({
    seleccionado: false,
    seleccion: null,
  });

  const devolverOpciones = () => {
    setInfoBloque((prevInfo) => ({
      ...prevInfo,
      seleccion: null,
    }));
  };
  const handleClick = (e) => {
    if (e.target.textContent === 'Texto') {
      setInfoBloque((prevInfo) => ({
        ...prevInfo,
        seleccion: 'txt',
      }));
    } else if (e.target.textContent === 'Imagén') {
      setInfoBloque((prevInfo) => ({
        ...prevInfo,
        seleccion: 'img',
      }));
      document.querySelector('.input-Aimg').click();
    }

    if (!infoBloque.seleccionado) {
      setInfoBloque((prevInfo) => ({
        ...prevInfo,
        seleccionado: true,
        seleccion: e.target.textContent === 'Texto' ? 'txt' : 'img',
      }));
      establecerNuevoBloque();
    }
  };
  if (infoBloque.seleccion == null) {
    return (
      <div className='nuevo-contenido'>
        <p>Nuevo...</p>
        <div className='contenedor-opciones'>
          <button type='button' onClick={handleClick}>
            Imagén
            <FontAwesomeIcon icon={faImage} size='1x' />
          </button>
          <span className='sr-only'>Selecciona una imagen de portada</span>
          <input
            type='file'
            id='portada-img'
            accept='image/png, image/jpeg'
            className='input-Aimg hidden'
          />
          <button type='button' onClick={handleClick}>
            Texto
            <FontAwesomeIcon icon={faTextWidth} size='1x' />
          </button>
        </div>
      </div>
    );
  }
  if (infoBloque.seleccion === 'txt') {
    return (
      <div className='nuevo-contenido'>
        <div className='icon-cancel' onClick={devolverOpciones}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <textarea placeholder='Escribe tus parrafos acá...'></textarea>
      </div>
    );
  }
};

NuevoContenido.propTypes = {
  establecerNuevoBloque: PropTypes.func,
};
