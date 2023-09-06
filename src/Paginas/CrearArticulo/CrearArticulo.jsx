import './CrearArticulo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
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
  const titulo = watch('titulo');
  const subtitulo = watch('subtitulo');
  const [infoArticulo, setInfoArticulo] = useState({});
  const handleUploadPortada = () => {
    document.querySelector('.input-Pimg').click();
  };
  const addInfoArticulo = (info) => {
    setInfoArticulo((prevArticulo) => ({ ...prevArticulo, ...info }));
  };

  const eliminarInfoArticulo = (id) => {
    setInfoArticulo((prevArticulo) => {
      delete { ...prevArticulo }[id];
      return { ...prevArticulo };
    });
  };
  const handleArticleForm = (data) => {
    console.log(data);
  };
  return (
    <div className='crear-articulo'>
      <form
        className='crear-articulo__form'
        onSubmit={handleSubmit(handleArticleForm)}
      >
        <h1 className='crear-articulo__titulo'>Crear artículo</h1>
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
                addInfoArticulo={addInfoArticulo}
                eliminarInfoArticulo={eliminarInfoArticulo}
                register={register}
                watch={watch}
                unregister={unregister}
              />
            );
          })}
        </div>
        <div
          className='nuevo-contenido__opcion'
          onClick={() => {
            setBloques((prevBloques) => [
              ...prevBloques,
              `bloque-${prevBloques.length + 1}`,
            ]);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <button className='crear-articulo__submit' type='submit'>
          Crear
        </button>
      </form>
      <div className='crear-articulo__prev'>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <div
          style={{
            height: '500px',
            backgroundImage: `url(${imgPortadaUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        ></div>
        {bloques.map((bloque) => {
          return typeof watch(bloque) === 'object' ? (
            <div key={bloque} className='img-prev'>
              <img src={infoArticulo[bloque]} alt='' />
            </div>
          ) : (
            <p key={bloque} className='parrafo-prev'>
              {watch(bloque)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CrearArticulo;
