import { useNavigate } from 'react-router-dom';
import './Login.css';
export const Login = () => {
  const history = useNavigate();
  return (
    <div className='contenedorLogin'>
      <div className='login'>
        <h2 className='login__titulo'>Iniciar sesión</h2>
        <hr />
        <form>
          <div className='login__datos'>
            <label htmlFor='email' className='login__datos--label'>
              Correo Electrónico
            </label>
            <input
              type='email'
              className='login__datos--input'
              id='email'
              name='email'
              required
            />
          </div>
          <div className='login__datos'>
            <label htmlFor='password' className='login__datos--label'>
              Contraseña
            </label>
            <input
              type='password'
              className='login__datos--input'
              id='password'
              name='password'
              required
            />
          </div>
          <div className='opciones'>
            <div className='opciones__recuerdame'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                className='opciones__recuerdame--input'
              />
              <label htmlFor='remember' className='opciones__recuerdame--label'>
                Recuérdame
              </label>
            </div>
            <a href='#' className='opciones__restablecer--enlace'>
              Restablece la Contraseña
            </a>
          </div>
          <button type='submit' className='login__boton'>
            Iniciar sesión
          </button>
        </form>

        <p className='registrarse'>
          ¿No tienes cuenta?{' '}
          <a
            onClick={() => history('/registro')}
            className='registrarse__enlace'
          >
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
