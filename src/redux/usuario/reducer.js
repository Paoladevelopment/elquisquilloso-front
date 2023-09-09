import * as types from './actionTypes';

const usuarioEstadoInicial = {
  isAuth: false,
  nombres: '',
  rol: '',
  correo: '',
};

export const usuarioReducer = (state = usuarioEstadoInicial, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        isAuth: true,
        nombres: action.payload.nombres,
        rol: action.payload.rol,
        correo: action.payload.correo,
      };

    case types.LOGOUT:
      return usuarioEstadoInicial;

    default:
      return state;
  }
};
