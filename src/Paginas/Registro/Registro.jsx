import { useNavigate } from 'react-router-dom';
import './Registro.css';
export const Registro = () => {
  const history = useNavigate();
  return (
    <div className='contenedorRegistro'>
      <div className='registro'>
        <h2 className='registro__titulo'>Crear cuenta</h2>
        <hr />
        <form className='registro__formulario'>
          <div className='registro__datos'>
            <label htmlFor='nombre' className='registro__datos--label'>
              Nombre
            </label>
            <input
              type='text'
              className='registro__datos--input'
              id='nombre'
              name='nombre'
              required
            />
          </div>
          <div className='registro__datos'>
            <label htmlFor='email' className='registro__datos--label'>
              Correo Electrónico
            </label>
            <input
              type='email'
              className='registro__datos--input'
              id='email'
              name='email'
              required
            />
          </div>
          <div className='registro__datos'>
            <label htmlFor='password' className='registro__datos--label'>
              Contraseña
            </label>
            <input
              type='password'
              className='registro__datos--input'
              id='password'
              name='password'
              required
            />
          </div>
          <div className='registro__datos'>
            <label
              htmlFor='confirm-password'
              className='registro__datos--label'
            >
              Confirmar Contraseña
            </label>
            <input
              type='password'
              className='registro__datos--input'
              id='confirm-password'
              name='password'
              required
            />
          </div>
          <div className='terminos'>
            <p>
              Al iniciar sesión, aceptas nuestros{'    '}
              <a href='#' className='terminos__enlace'>
                Términos y condiciones
              </a>
              y{' '}
              <a href='#' className='terminos__enlace'>
                Política de uso.
              </a>
            </p>
          </div>
          <button type='submit' className='registro__boton'>
            Registrarse
          </button>
        </form>
        <p className='iniciarSesion'>
          Si ya tienes una cuenta,{' '}
          <a
            onClick={() => history('/inicioSesion')}
            className='iniciarSesion__enlace'
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registro;
