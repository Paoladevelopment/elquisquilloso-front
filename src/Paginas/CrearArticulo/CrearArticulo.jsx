import React from 'react'
import './CrearArticulo.css'

export const CrearArticulo = () => {
  return (
<div className='contenedorCrearArticulo'>
            <div className="contenidoArticulo">
                <div className="contenidoArticulo__titulo">
                    <h2 className='contenidoArticulo__titulo--h2'>Redacta el contenido de tu Articulo</h2>
                </div>
                <textarea className='contenidoArticulo__textarea' placeholder='Escribe aqui...'></textarea>
                <div className="contenidoArticulo__Cantidad">
                    <h4 className='contenidoArticulo__cantidad--h4'>Cantidad de palabras: 0</h4>
                </div>
            </div>
            <div className="titulosArticulo">
                <div className="titulosArticulo__titulo">
                    <h2 className='titulosArticulo__titulo'>Escriba el titulo de su articulo</h2>
                </div>
                <textarea className='titulosArticulos__textarea' placeholder='Escriba su titulo'></textarea>
                <label for="puntos">Requisito para su publicacion</label>
                <input
                    type="range"
                    name="puntos"
                    id="puntos"
                    min="70"
                    max="100"
                    step="100"
                    value="70" />
                <output class="puntos-output" for="puntos"></output>
            </div>
            <div className="imagenArticulo">
            <div className="imagenArticulo__titulo">
                    <h2 className='imagenArticulo__titulo--h2'>Imagenes</h2>
                </div>
                <div className="imagenArticulo__portada">
                    <input type="text" className='imagenArticulo__portada--input' />
                    <button type='submit' className='imagenArticulo__portada--button'>Agregar Imagen</button>
                </div>
                <div className="imagenArticulo__evidencias">
                    <input type="text" className='imagenArticulo__evidencias--input' />
                    <button type='submit' className='imagenArticulo__evidencias--button'>Agregar Imagen</button>
                </div>
            </div>
            <div className="palabrasClave">
                <div className="palabrasClave__titulo">
                    <h2 className='palabrasClave__titulo--h2'>Palabras Clave</h2>
                </div>
                <textarea className='palabrasClave__textarea' placeholder='Escriba su titulo'></textarea>
            </div>
            <div className="acciones">
                <h2 className='acciones__h2'>Publicar</h2>
                <div className="acciones__guardarBorrador">
                    <button type='submit' className='acciones__guardarBorrador--button'>Guardar Borrador</button>
                </div>
                <div className="acciones__vistaPrevia">
                    <button type='submit' className='acciones__vistaPrevia--button'>Vista Previa</button>
                </div>
                <div className="acciones__borradoor">
                    <p>Estado:Borrador <a href="#">Editar</a></p>
                </div>
                <div className="acciones__estado">
                    <p>Visibilidad:Publica <a href="#">Editar</a></p>
                </div>
                <div className="acciones__fechaPublicacion">
                    <p>Publicar inmediatamente <a href="#">Editar</a></p>
                </div>
                <div className="acciones__publicar">
                    <button type='submit' className='acciones__publicar--button'>Publicar</button>
                </div>
            </div>
        </div>
  )
}

export default CrearArticulo
