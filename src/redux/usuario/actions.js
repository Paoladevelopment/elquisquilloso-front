import * as types from './actionTypes';

export const iniciarSesion = (usuario) => {
  return {
    type: types.SET_USER,
    payload: usuario,
  };
};

export const cerrarSesion = () => {
  return {
    type: types.LOGOUT,
  };
};
