import React from "react";
import "./Style.css";
import produtos from "./data.js";
import { Link } from "react-router-dom";

function Pagprodutos() {
  return (
    <div className="products-component">
      {produtos.map((produtos) => (
        <div className="card-produto" Link to={"/produto/" + produtos.id}>
          <img src={produtos.imagem} className="imagem-produto" />
          <h1>{produtos.nome}</h1>
          <h2>{produtos.price}</h2>
        </div>
      ))}
    </div>
  );
}
export default Pagprodutos;
