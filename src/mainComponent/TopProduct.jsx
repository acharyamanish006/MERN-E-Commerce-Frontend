import React from "react";
import "./css/topProduct.css";
import Product from "../subComponent/Product";
import { useSelector } from "react-redux";
import { ProgressBar } from "../subComponent/progress";

export default function TopProduct({ name, priceRange }) {
  const { products, loading } = useSelector((state) => state.allProduct);

  if (loading) {
    return <ProgressBar />;
  }
  if (!products) {
    return <ProgressBar />;
  }
  const sortedProducts = products
    .slice()
    .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    .filter((product) => product.price < priceRange);

  return (
    <div className="ProductContainer">
      <div className="ProductWrapper">
        <div className="ProductHeading">
          <h3> {name}</h3>
        </div>
        <div className="ProductCollection">
          {sortedProducts
            // .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            // .filter((product) => product.price < priceRange)
            .map((data) => {
              return <Product key={data._id} data={data} />;
            })
            .slice(0, 4)}
        </div>
      </div>
    </div>
  );
}
