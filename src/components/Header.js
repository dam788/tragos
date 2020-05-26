import React from 'react';
// importar imagen
import Logo from'../logo.svg'

const Header = () => {

  return (
    <header className="bg-alert">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">

          <img
          className="img-fluida logoCSS "
          src={Logo}
          alt="Logo forma de coctel"
          />
          <h1>Busca Recetas de Bebidas</h1>

          </div>
        </div>
      </div>
    </header>
   );
}

export default Header;