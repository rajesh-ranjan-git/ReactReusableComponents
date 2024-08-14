import React from "react";
import GoHome from "./GoHome";

const Error = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl mb-36">
          Oopssy !!! Something went wrong here...
        </h1>
      </div>
      <GoHome />
    </>
  );
};

export default Error;
