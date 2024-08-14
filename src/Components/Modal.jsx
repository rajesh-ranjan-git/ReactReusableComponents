import React, { useEffect, useState } from "react";
import GoHome from "./GoHome";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl p-5">Modal</h1>
        <button
          className="m-4 p-4 w-48 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
          onClick={handleModal}
        >
          {!showModal ? "Open Modal" : "Close Modal"}
        </button>
        {showModal && (
          <div className="absolute top-60 p-10 flex flex-col justify-center items-center w-[70%] h-[50%] bg-lime-600 text-8xl font-semibold text-white rounded-2xl  shadow-xl shadow-slate-950">
            <div>This is Modal</div>
            <button
              className="absolute bottom-10 p-4 w-96 text-lime-600 text-2xl bg-white font-semibold rounded-full shadow-xl shadow-slate-950"
              onClick={handleCloseModal}
            >
              Close Modal
            </button>
          </div>
        )}
      </div>
      <GoHome />
    </>
  );
};

export default Modal;
