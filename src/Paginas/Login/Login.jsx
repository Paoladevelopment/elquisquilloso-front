
import './Login.css';

export const Login = () => {
  return (
    <div className="contenedor">
    <div class="login">
      <h2 className='login__titulo'>Iniciar sesión</h2>
      <form>
        <div class="login__datos">
          <label for="email" className='login__datos--label'>Correo Electrónico</label>
          <input type="email" className='login__datos--input' id="email" name="email" required />
        </div>
        <div class="login__datos">
          <label for="password" className='login__datos--label'>Contraseña</label>
          <input type="password" className='login__datos--input' id="password" name="password" required />
        </div>
        <div class="opciones">
          <div class="opciones__recuerdame">
            <input type="checkbox" id="remember" name="remember" className='opciones__recuerdame--input'/>
            <label for="remember" className='opciones__recuerdame--label'>Recuérdame</label>
          </div>
          <div class="opiones__restablecer">
            <a href="#" className='opciones__restablecer--enlace'>Restablece la Contraseña</a>
          </div>
        </div>
        <button type="submit" className='login__boton'>Iniciar sesión</button>
      </form>
      <div class="registrarse">
        <p>¿No tienes cuenta? <a href="#" className='registrarse__enlace'>Regístrate</a></p>
      </div>
      <div class="terminos">
        <p>Al iniciar sesión, aceptas nuestros <a href="#" className='terminos__enlace'>Términos y Condiciones</a> y <a href="#" className='terminos__enlace'>Política de Uso</a>.</p>
      </div>
    </div>
    </div>
  );
}

export default Login

