import React from "react";
import ProductsPage from "./ProductsPage";
import { AlafIssenProducts } from "../data/AlafIssenData";
export default function Alfissen() {
  return (
    <div>
      <ProductsPage products={AlafIssenProducts} type={"alafissen"}/>
    </div>
  );
}
