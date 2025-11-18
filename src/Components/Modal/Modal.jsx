import { useRef, useState } from "react";
import GoHome from "../Utility/GoHome";
import useOutsideClick from "./useOutsideClick";

const Modal = () => {
  const modalRef = useRef();
  useOutsideClick(modalRef, () => setShowModal(false));
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
      <div className="flex flex-col items-center h-screen" id="modal-container">
        <h1 className="p-5 text-5xl">Modal</h1>
        {!showModal ? (
          <button
            className="bg-lime-600 shadow-slate-950 shadow-xl m-4 p-4 rounded-full w-48 font-semibold text-white text-2xl"
            onClick={handleModal}
          >
            Open Modal
          </button>
        ) : null}
        {showModal && (
          <div
            className="top-24 absolute flex flex-col justify-center items-center bg-lime-600 shadow-slate-950 shadow-xl p-10 rounded-2xl w-[70%] h-[70%] font-semibold text-white text-8xl"
            ref={modalRef}
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
              className="bottom-10 absolute bg-white shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-lime-600 text-2xl"
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
