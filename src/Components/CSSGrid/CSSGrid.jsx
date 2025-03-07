import React, { useState } from "react";
import GoHome from "../Utility/GoHome";

const CSSGrid = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">CSS Grid</h1>
        <div className="grid grid-cols-3 grid-ro bg-yellow-400 border rounded-md w-full">
          <div className="bg-red-500 hover:bg-red-900 border rounded-md w-16 h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 border rounded-md w-96 h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default CSSGrid;
