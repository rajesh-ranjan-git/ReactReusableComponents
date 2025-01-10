import React from "react";
import { useNavigate } from "react-router-dom";

const GoHome = () => {
  const navigate = useNavigate();

  const handleErrorToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="bottom-10 fixed bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
          onClick={handleErrorToHome}
        >
          Go Home
        </button>
      </div>
    </>
  );
};

export default GoHome;
