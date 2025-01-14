import React from "react";
import { useNavigate } from "react-router-dom";

const GoHome = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="bottom-10 fixed bg-lime-600 hover:bg-white shadow-slate-950 shadow-xl p-4 border hover:border border-lime-600 rounded-full w-96 font-semibold text-2xl text-white hover:text-lime-600 transition-all ease-in-out"
          onClick={handleGoToHome}
        >
          Go Home
        </button>
      </div>
    </>
  );
};

export default GoHome;
