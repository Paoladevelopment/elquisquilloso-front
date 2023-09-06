import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faTextWidth,
  faXmark,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import './NuevoContenido.css';
import { useEffect, useState } from 'react';
import useFilePreview from '../../Hooks/useFilePreview';

export const NuevoContenido = ({
  addInfoArticulo,
  eliminarInfoArticulo,
  watch,
  register,
  unregister,
  idBloque,
}) => {
  const [infoBloque, setInfoBloque] = useState({
    seleccion: null,
  });
  const file = typeof watch(idBloque) !== 'string' ? watch(idBloque) : null;
  const [imgPreview, setImgPreview] = useFilePreview(file);
  const devolverOpciones = () => {
    setInfoBloque({
      seleccion: null,
    });
    setImgPreview(null);
    unregister(idBloque);
    eliminarInfoArticulo(idBloque);
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
    }
  };

  useEffect(() => {
    if (imgPreview !== null) {
      addInfoArticulo({
        [idBloque]: imgPreview,
      });
    }
  }, [imgPreview]);

  if (infoBloque.seleccion == null) {
    return (
      <div className='nuevo-contenido'>
        <p>Nuevo...</p>
        <div className='contenedor-opciones'>
          <button type='button' onClick={handleClick}>
            Imagén
            <FontAwesomeIcon icon={faImage} size='1x' />
          </button>
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
        <textarea
          placeholder='Escribe tus parrafos acá...'
          {...register(idBloque, {
            required: true,
          })}
        ></textarea>
      </div>
    );
  }

  if (infoBloque.seleccion === 'img') {
    return (
      <>
        {imgPreview ? (
          <div
            className='nuevo-contenido contenedor-img'
            style={{
              backgroundImage: `url(${imgPreview})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          >
            <div className='icon-cancel--img' onClick={devolverOpciones}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        ) : (
          <div className='nuevo-contenido contenedor-img'>
            <div className='icon-cancel--img' onClick={devolverOpciones}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <span>Añadir una imagén</span>
            <FontAwesomeIcon
              icon={faPlus}
              className='nueva-imagen'
              onClick={() => {
                document.querySelector('.input-Aimg').click();
              }}
            />
            <span className='sr-only'>Selecciona una imagen</span>
            <input
              type='file'
              id='portada-img'
              accept='image/png, image/jpeg'
              className='input-Aimg hidden'
              {...register(idBloque, {
                required: true,
              })}
            />
          </div>
        )}
      </>
    );
  }
};

NuevoContenido.propTypes = {
  addInfoArticulo: PropTypes.func,
  eliminarInfoArticulo: PropTypes.func,
  watch: PropTypes.func,
  register: PropTypes.func,
  unregister: PropTypes.func,
  idBloque: PropTypes.string,
};
