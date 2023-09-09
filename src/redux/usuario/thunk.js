import * as creators from './actions';

export const logIn = async (userData) => {
  const response = await fetch('http://localhost:8080/api/login', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  console.log(result);
  if (response.ok) return result;
};

export const getDatosUsuario = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8080/api/usuarios/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (response.ok) {
      const userDetails = {
        nombres: result.data.nombre,
        correo: result.data['correo_electronico'],
        rol: result.data.rol,
        id: result.data.id,
      };
      dispatch(creators.iniciarSesion(userDetails));
    }
  };
};
