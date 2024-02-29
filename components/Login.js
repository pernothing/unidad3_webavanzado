import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" />
        <label>Contraseña:</label>
        <input type="password" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
