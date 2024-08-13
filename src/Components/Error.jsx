import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleErrorToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl mb-36">
        Oopssy !!! Something went wrong here...
      </h1>
      <button
        className="p-4 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleErrorToHome}
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;
