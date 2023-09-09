import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getDatosUsuario, logIn } from '../../redux/usuario/thunk';
import { useEffect, useState } from 'react';
export const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [errorLoging, setErrorLoging] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const contra = watch('password');
  const handleLogin = async (data) => {
    const resultLog = await logIn(data);
    console.log(resultLog);
    if (resultLog.status === 'success') {
      history('/');
      dispatch(getDatosUsuario(resultLog.id));
    } else {
      setErrorLoging(resultLog.error);
    }
  };

  useEffect(() => {
    if (!contra) setErrorLoging('');
  }, [contra]);
  return (
    <div className='contenedorLogin'>
      <div className='login'>
        <h2 className='login__titulo'>Iniciar sesión</h2>
        <hr />
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='login__datos'>
            <label htmlFor='email' className='login__datos--label'>
              Correo Electrónico
            </label>
            <input
              type='email'
              className='login__datos--input'
              id='email'
              name='email'
              {...register('correo_electronico', {
                required: {
                  value: true,
                  message: 'Correo electronico requerido.',
                },
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Correo electronico  no válido.',
                },
              })}
            />
            <p className='errors'>{errors['correo_electronico']?.message}</p>
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
              {...register('password', {
                required: {
                  value: true,
                  message: 'Contraseña requerida.',
                },
              })}
            />
            <p className='errors'>{errors.password?.message}</p>
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
          <p className='errors'>{errorLoging}</p>
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
