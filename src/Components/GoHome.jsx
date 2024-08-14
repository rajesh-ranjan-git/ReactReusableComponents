import React from "react";
import { useNavigate } from "react-router-dom";

const GoHome = () => {
  const navigate = useNavigate();

  const handleErrorToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="absolute bottom-10 p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
          onClick={handleErrorToHome}
        >
          Go Home
        </button>
      </div>
    </>
  );
};

export default GoHome;
