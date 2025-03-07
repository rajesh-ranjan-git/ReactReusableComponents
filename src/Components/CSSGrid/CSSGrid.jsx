import React, { useState } from "react";
import GoHome from "../Utility/GoHome";

const CSSGrid = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        {/* <h1 className="p-5 text-5xl">CSS Grid</h1> */}
        {/* <div className="gap-2 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 bg-yellow-400 shadow-md p-2 border rounded-md w-full">
          <div className="bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
        </div> */}
        {/* <div className="gap-2 grid sm:grid-cols-3 bg-yellow-400 shadow-md p-2 border rounded-md w-full">
          <div className="hidden sm:block bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 shadow-md border rounded-md w-full h-40 transition-all ease-in-out cursor-pointer"></div>
        </div> */}
        {/* <div className="grid sm:grid-cols-12 bg-yellow-400 border w-full">
          <div className="hidden sm:block bg-neutral-700 hover:bg-neutral-800 w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="col-span-4 bg-red-500 hover:bg-red-900 w-full h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="hidden sm:block col-span-7 bg-green-500 hover:bg-green-900 w-full h-40 transition-all ease-in-out cursor-pointer"></div>
        </div> */}
        {/* <div className="grid sm:grid-cols-3 bg-yellow-400 border w-full">
          <div className="hidden sm:block bg-neutral-700 hover:bg-neutral-800 w-16 h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="bg-red-500 hover:bg-red-900 w-40 h-40 transition-all ease-in-out cursor-pointer"></div>
          <div className="hidden sm:block bg-green-500 hover:bg-green-900 w-full h-40 transition-all ease-in-out cursor-pointer"></div>
        </div> */}

        {/* <div className="grid sm:grid-cols-[3rem_20rem_1fr] bg-neutral-700 w-full h-screen">
          <div className="hidden sm:block bg-neutral-700 w-12 h-screen"></div>
          <div className="grid sm:grid-rows-[4rem_1fr] bg-neutral-500 border-neutral-800 border-r w-full h-screen">
            <div className="bg-neutral-600 w-full h-16"></div>
            <div className="flex-1 bg-neutral-500 w-full"></div>
          </div>
          <div className="hidden sm:flex flex-col bg-neutral-500 w-full h-screen">
            <div className="bg-neutral-600 w-full h-16"></div>
            <div className="flex-1 bg-neutral-500 w-full"></div>
            <div className="bg-neutral-600 w-full h-12"></div>
          </div>
        </div> */}
        <div className="grid sm:grid-cols-[3rem_20rem_1fr] w-full h-screen">
          <div className="hidden sm:block bg-neutral-700 w-12 h-screen"></div>
          <div className="flex flex-col bg-neutral-500 border-neutral-800 border-r w-full h-screen">
            <div className="bg-neutral-600 w-full h-16"></div>
            <div className="flex-1 bg-neutral-500 w-full"></div>
            <div className="sm:hidden bg-neutral-600 w-full h-12"></div>
          </div>
          <div className="hidden sm:flex flex-col bg-neutral-500 w-full h-screen">
            <div className="bg-neutral-600 w-full h-16"></div>
            <div className="flex-1 w-full g-neutral-500"></div>
            <div className="bg-neutral-600 w-full h-12"></div>
          </div>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default CSSGrid;
