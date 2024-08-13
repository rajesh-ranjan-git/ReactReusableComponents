import React from "react";
import { useNavigate } from "react-router-dom";

const Debouncing = () => {
  const navigate = useNavigate();

  const handleErrorToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl mb-36">Debouncing</h1>
        <input placeholder="Enter some search" />
      </div>
      <div>
        <button
          className="sticky bottom-0 p-4 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
          onClick={handleErrorToHome}
        >
          Go Home
        </button>
      </div>
    </>
  );
};

export default Debouncing;
