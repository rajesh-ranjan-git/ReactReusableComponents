import React from "react";
import GoHome from "../Utility/GoHome";

const Dropdown2 = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="m-5 p-5 text-5xl">Dropdown Menus</h1>
        <div className="flex flex-col justify-between p-2 w-screen h-[70vh] text-white">
          <div className="flex justify-between">
            <div>
              <button
                popovertarget="menu-1"
                className="bg-lime-800 hover:bg-white shadow-md p-2 border border-lime-800 rounded-lg font-semibold hover:text-lime-800 transition-all ease-in-out"
              >
                Dropdown Menu 1
              </button>
              <div
                id="menu-1"
                className="top-[anchor(bottom)] left-[anchor(left)] absolute bg-lime-500 my-2 p-1 rounded-lg w-max text-white menu"
                popover=""
              >
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Very Long Item Name
                </a>
              </div>
            </div>
            <div>
              <button
                popovertarget="menu-2"
                className="bg-lime-800 hover:bg-white shadow-md p-2 border border-lime-800 rounded-lg font-semibold hover:text-lime-800 transition-all ease-in-out"
              >
                Dropdown Menu 2
              </button>
              <div
                id="menu-2"
                className="top-[anchor(bottom)] left-[anchor(left)] absolute bg-lime-500 my-2 p-1 rounded-lg w-max text-white menu"
                popover=""
              >
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Very Long Item Name
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                popovertarget="menu-3"
                className="bg-lime-800 hover:bg-white shadow-md p-2 border border-lime-800 rounded-lg font-semibold hover:text-lime-800 transition-all ease-in-out"
              >
                Dropdown Menu 3
              </button>
              <div
                id="menu-3"
                className="top-[anchor(bottom)] left-[anchor(left)] absolute bg-lime-500 my-2 p-1 rounded-lg w-max text-white menu"
                popover=""
              >
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Very Long Item Name
                </a>
              </div>
            </div>
            <div>
              <button
                popovertarget="menu-4"
                className="bg-lime-800 hover:bg-white shadow-md p-2 border border-lime-800 rounded-lg font-semibold hover:text-lime-800 transition-all ease-in-out"
              >
                Dropdown Menu 4
              </button>
              <div
                id="menu-4"
                className="top-[anchor(bottom)] left-[anchor(left)] absolute bg-lime-500 my-2 p-1 rounded-lg w-max text-white menu"
                popover=""
              >
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-lime-700 p-2 rounded-lg">
                  Very Long Item Name
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default Dropdown2;
