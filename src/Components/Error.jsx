import React from "react";
import GoHome from "./GoHome";

const Error = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="mb-36 text-5xl">
          Oopssy !!! Something went wrong here...
        </h1>
      </div>
      <GoHome />
    </>
  );
};

export default Error;
