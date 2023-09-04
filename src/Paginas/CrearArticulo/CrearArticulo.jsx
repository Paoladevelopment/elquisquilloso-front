import './CrearArticulo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NuevoContenido } from '../../Componentes/NuevoContenido/NuevoContenido';
export const CrearArticulo = () => {
  const [bloques, setBloques] = useState(['bloque-1']);
  const handleUploadPortada = () => {
    document.querySelector('.input-Pimg').click();
  };
  return (
    <div className='crear-articulo'>
      <h1 className='crear-articulo__titulo'>Crear artículo</h1>
      <form className='crear-articulo__form'>
        <label htmlFor='titulo'>Título del artículo*</label>
        <input type='text' id='titulo'></input>
        <label htmlFor='subtitulo'>Subtitulo (opcional)</label>
        <input type='text' id='subtitulo'></input>
        <div className='crear-articulo__portada'>
          <div className='crear-articulo__portadaImg no-upload'>
            <FontAwesomeIcon icon={faImage} size='3x' />
          </div>
          <button
            type='button'
            className='portadaImg__btn'
            onClick={handleUploadPortada}
          >
            Subir foto portada
          </button>
        </div>
        <span className='sr-only'>Selecciona una imagen de portada</span>
        <input
          type='file'
          id='portada-img'
          accept='image/png, image/jpeg'
          className='input-Pimg hidden'
        />
        <div className='crear-articulo__contenido'>
          {bloques.map((bloque) => {
            return (
              <NuevoContenido
                key={bloque}
                establecerNuevoBloque={() => {
                  setBloques((prevBloques) => [
                    ...prevBloques,
                    `bloque-${prevBloques.length + 1}`,
                  ]);
                }}
              />
            );
          })}
        </div>
      </form>
      <div className='crear-articulo__prev'></div>
    </div>
  );
};

export default CrearArticulo;
