import React from "react";

const ModuleButton = ({ label, handler }) => {
  return (
    <button
      className="bg-lime-600 hover:bg-white shadow-slate-950 shadow-xl p-4 border hover:border border-lime-600 rounded-full w-96 font-semibold text-2xl text-white hover:text-lime-600 transition-all ease-in-out"
      onClick={handler}
    >
      {label}
    </button>
  );
};

export default ModuleButton;
