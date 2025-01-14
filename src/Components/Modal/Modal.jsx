import React, { useState } from "react";
import GoHome from "../Utility/GoHome";

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

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      handleCloseModal();
    }
  };

  return (
    <>
      <div
        className="flex flex-col items-center h-screen"
        id="modal-container"
        onClick={(e) => handleOutsideClick(e)}
      >
        <h1 className="p-5 text-5xl">Modal</h1>
        <button
          className="bg-lime-600 shadow-slate-950 shadow-xl m-4 p-4 rounded-full w-48 font-semibold text-2xl text-white"
          onClick={handleModal}
        >
          {!showModal ? "Open Modal" : "Close Modal"}
        </button>
        {showModal && (
          <div
            className="top-60 absolute flex flex-col justify-center items-center bg-lime-600 shadow-slate-950 shadow-xl p-10 rounded-2xl w-[70%] h-[50%] font-semibold text-8xl text-white modal-container"
            style={{ animationName: "animateModal", animationDuration: "0.5s" }}
          >
            <span
              className="top-0 right-2 absolute text-2xl cursor-pointer"
              onClick={handleCloseModal}
            >
              &#10006;
            </span>
            <div>This is Modal</div>
            <button
              className="bottom-10 absolute bg-white shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-lime-600"
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
