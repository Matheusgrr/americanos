import React from "react";
import "./Style.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Produtos} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
