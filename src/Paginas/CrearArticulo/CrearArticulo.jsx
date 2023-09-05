import './CrearArticulo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NuevoContenido } from '../../Componentes/NuevoContenido/NuevoContenido';
import { useForm } from 'react-hook-form';
import useFilePreview from '../../Hooks/useFilePreview';
export const CrearArticulo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    unregister,
  } = useForm();
  const [bloques, setBloques] = useState(['bloque-1']);
  const imgPortadaFile = watch('foto-portada');
  const imgPortadaUrl = useFilePreview(imgPortadaFile)[0];
  console.log(imgPortadaUrl);
  const handleUploadPortada = () => {
    document.querySelector('.input-Pimg').click();
  };

  const handleArticleForm = (data) => {
    console.log(data);
  };
  return (
    <div className='crear-articulo'>
      <h1 className='crear-articulo__titulo'>Crear artículo</h1>
      <form
        className='crear-articulo__form'
        onSubmit={handleSubmit(handleArticleForm)}
      >
        <label htmlFor='titulo'>Título del artículo*</label>
        <input
          type='text'
          id='titulo'
          {...register('titulo', {
            required: {
              value: true,
              message: 'Debes proporcionar el título',
            },
          })}
        />
        <label htmlFor='subtitulo'>Subtitulo (opcional)</label>
        <input {...register('subtitulo')} type='text' id='subtitulo' />
        <div className='crear-articulo__portada'>
          {imgPortadaUrl ? (
            <div
              className='crear-articulo__portadaImg '
              style={{
                backgroundImage: `url(${imgPortadaUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            />
          ) : (
            <div className='crear-articulo__portadaImg  no-upload'>
              <FontAwesomeIcon icon={faImage} size='3x' />
            </div>
          )}
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
          {...register('foto-portada', {
            required: {
              value: true,
              message: 'Sube una foto de portada',
            },
          })}
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
                idBloque={bloque}
                establecerNuevoBloque={() => {
                  setBloques((prevBloques) => [
                    ...prevBloques,
                    `bloque-${prevBloques.length + 1}`,
                  ]);
                }}
                register={register}
                watch={watch}
                unregister={unregister}
              />
            );
          })}
        </div>
        <button className='crear-articulo__submit' type='submit'>
          Crear
        </button>
      </form>
      <div className='crear-articulo__prev'></div>
      <img
        src='blob:http://localhost:5173/e371939a-8ed2-4ea7-b923-5c8680e5fc26'
        alt=''
      />
    </div>
  );
};

export default CrearArticulo;
