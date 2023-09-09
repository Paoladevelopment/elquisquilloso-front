import { useEffect, useRef, useState } from 'react';
import { Boton } from '../Boton/Boton';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { BarraBusqueda } from '../BarraBusqueda/BarraBusqueda';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/usuario/selectors';
export const Header = () => {
  const location = useLocation();
  const history = useNavigate();
  const isAuth = useSelector(getAuth);
  const [showMenu, setShowMenu] = useState(false);
  const menu = useRef();
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (!menu.current) return;
    if (!menu.current.contains(e.target)) setShowMenu(false);
  };
  const isLoginPage = location.pathname === '/inicioSesion';
  const isRegisterPage = location.pathname === '/registro';
  if (isLoginPage || isRegisterPage) return null;
  return (
    <header className='main-header'>
      <div className='main-header__menu-container'>
        <button
          className={`main-header__opciones ${showMenu ? 'isActive' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        <nav
          ref={menu}
          className={`main-header__menu ${showMenu ? 'isActive' : ''}`}
        >
          <BarraBusqueda />
          <ul>
            <li>
              <a href='#'>Cultura y Entretenimiento</a>
            </li>
            <li>
              <a href='#'>Deportes</a>
            </li>
            <li>
              <a href='#'>Opinión</a>
            </li>
            <li>
              <a href='#'>Anuncios clasificados</a>
            </li>
            <li>
              <a href='#'>Salud y Bienestar</a>
            </li>
            <li>
              <a href='#'>Educación</a>
            </li>
            <li>
              <a href='#'>Negocios locales</a>
            </li>
            <li>
              <a href='#'>Política</a>
            </li>
          </ul>
        </nav>
      </div>
      <img
        src='../../../src/assets/QUISQUILLOSO.png'
        alt=''
        className='main-header__icon'
        onClick={() => history('/')}
      />
      <div className='main-header__sesion--icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='currentColor'
          className='bi bi-person-circle'
          viewBox='0 0 16 16'
        >
          <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
          <path
            fillRule='evenodd'
            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
          />
        </svg>
      </div>
      {!isAuth ? (
        <div className='main-header__sesion'>
          <Boton
            text='Iniciar Sesión'
            onClick={() => history('/inicioSesion')}
          />
          <Boton text='Registro' onClick={() => history('/registro')} />
        </div>
      ) : (
        <div className='main-header_sesion'></div>
      )}
    </header>
  );
};
