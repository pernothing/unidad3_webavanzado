import React from 'react';

function Registro() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" />
        <label>Apellido:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Contraseña:</label>
        <input type="password" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
