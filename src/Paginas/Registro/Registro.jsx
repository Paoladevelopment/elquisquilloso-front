import React from "react";
import "./Registro.css";
export const Registro = () => {
  return (
    <div className="contenedorRegistro">
      <div class="registro">
        <h2 className="registro__titulo">Crear cuenta</h2>
        <form>
          <div class="registro__datos">
            <label for="nombre" className="registro__datos--label">
              Nombre
            </label>
            <input
              type="text"
              className="registro__datos--input"
              id="nombre"
              name="nombre"
              required
            />
          </div>
          <div class="registro__datos">
            <label for="email" className="registro__datos--label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="registro__datos--input"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="registro__datos">
            <label for="password" className="registro__datos--label">
              Contraseña
            </label>
            <input
              type="password"
              className="registro__datos--input"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="registro__datos">
            <label for="password" className="registro__datos--label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="registro__datos--input"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="terminos">
            <p>
              Al iniciar sesión, aceptas nuestros{" "}
              <a href="#" className="terminos__enlace">
                Términos y Condiciones
              </a>{" "}
              y{" "}
              <a href="#" className="terminos__enlace">
                Política de Uso
              </a>
              .
            </p>
          </div>
          <button type="submit" className="registro__boton">
            Registrarse
          </button>
        </form>
        <div class="iniciarSesion">
          <p>
            Si ya tienes una cuenta,{" "}
            <a href="#" className="iniciarSesion__enlace">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registro;
