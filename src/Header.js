import React from "react";
import "./Style.css";

function Header() {
  return (
    <header className="header">
      <h1 className="name-company">Americanos</h1>
      <div className="links-header">
        <h5>Entrar</h5>
        <h5>Criar Conta</h5>
        <h5>Carrinho</h5>
      </div>
    </header>
  );
}

export default Header;
