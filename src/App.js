import React from "react";

import { Routes, Route } from "react-router-dom";

import "./zero.css";

import Header from "./components/header/header";
import CatalogProduct from "./components/products/CatalogProduct";
import Card from "./components/cards/Card";
import SingleProduct from "./components/products/SingleProduct";
import WrapperSingleProduct from "./components/products/WrapperSingleProduct";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/catalog" element={<CatalogProduct />} />
        <Route path="/card" element={<Card />} />
        <Route
          path={"/product/:product_id"}
          element={
            <WrapperSingleProduct>
              <SingleProduct />
            </WrapperSingleProduct>
          }
        />
      </Routes>
    </div>
  );
}
