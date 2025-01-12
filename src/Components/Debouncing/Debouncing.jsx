import React from "react";
import GoHome from "../GoHome";

const Debouncing = () => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  const debounce = (callback, delay) => {
    let timerID;
    return (...args) => {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Debouncing</h1>
        <input
          className="border-4 bg-white p-3 border-lime-600 rounded-full w-96 text-2xl text-center outline-none"
          placeholder="Search Here..."
          onChange={debounce(handleSearch, 1000)}
        />
      </div>
      <GoHome />
    </>
  );
};

export default Debouncing;
