import React from "react";
import GoHome from "./GoHome";

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
        <h1 className="text-5xl p-5">Debouncing</h1>
        <input
          className="p-3 w-96 text-center text-2xl outline-none bg-white border-4 border-lime-600 rounded-full"
          placeholder="Search Here..."
          onChange={debounce(handleSearch, 1000)}
        />
      </div>
      <GoHome />
    </>
  );
};

export default Debouncing;
