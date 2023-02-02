import React from "react";
import { ProductInfo } from "./product_info";
import { ProductReview } from "./product_review";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_product } from "../Redux-toolkit/Features/FetchSingleData";
import { useParams } from "react-router-dom";
import { ProgressBar } from "./progress";
export const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product, loading } = useSelector((state) => state.productInfo);
  useEffect(() => {
    dispatch(fetch_product(id));
  }, [dispatch, id]);
  if (loading) {
    return <ProgressBar />;
  }
  if (!product) {
    return <ProgressBar />;
  }
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productHeading">
          <h3> Product Detail's </h3>
        </div>
        <ProductInfo data={product} id={id} />
        <ProductReview data={product} id={id} />
      </div>
    </div>
  );
};
