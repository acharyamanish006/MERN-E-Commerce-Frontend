import React, { useState } from "react";
import { useEffect } from "react";
import WishlistProduct from "../subComponent/wishlistProduct";
import { ProgressBar } from "../subComponent/progress";
export const WishList = () => {
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(process.env.React_App_Api + "/get/product/wishlist", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data.myWishList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  let totalPrice = 0;

  wishlist.filter((data) => {
    return (totalPrice += data.price);
  });
  if (loading) {
    return <ProgressBar />;
  }
  return (
    <div className="rounded-md m-2 w-11/12 bg-white   ">
      {wishlist.map((data) => {
        return <WishlistProduct key={data._id} data={data} icon={true} />;
      })}
      <div className=" flex justify-end m-4">
        <p className="font-bold font-mono">TotalPrice = </p>
        <p className="pl-2 text-red-500 font-semibold">
          {" "}
          RS: {totalPrice.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
};
