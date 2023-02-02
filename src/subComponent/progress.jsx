import { CircularProgress } from "@mui/material";
import React from "react";

export const ProgressBar = () => {
  return (
    <div className="productContainer ">
      <div className="productWrapper">
        <div className="w-11/12 mb-10 rounded-md bg-white shadow-md  my-2">
          <div className="flex justify-center align-middle pt-20 pb-20">
            <CircularProgress />
          </div>
        </div>
      </div>
    </div>
  );
};
