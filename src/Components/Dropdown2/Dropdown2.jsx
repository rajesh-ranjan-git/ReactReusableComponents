import React from "react";
import GoHome from "../Utility/GoHome";

const Dropdown2 = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="m-5 p-5 text-5xl">Dropdown</h1>
        <div className="flex flex-col justify-between bg-purple w-screen h-80 text-white">
          <div className="flex justify-between">
            <div>
              <button
                popovertarget="menu-1"
                className="bg-purple-800 p-2 rounded-lg"
              >
                Dropdown Menu 1
              </button>
              <div
                id="menu-1"
                className="flex flex-col bg-purple-500 p-1 rounded-lg"
                popover
              >
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Very Long Item Name
                </a>
              </div>
            </div>
            <div>
              <button
                popovertarget="menu-2"
                className="bg-purple-800 p-2 rounded-lg"
              >
                Dropdown Menu 2
              </button>
              <div
                id="menu-2"
                className="flex flex-col bg-purple-500 p-1 rounded-lg"
                popover
              >
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Very Long Item Name
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                popovertarget="menu-3"
                className="bg-purple-800 p-2 rounded-lg"
              >
                Dropdown Menu 3
              </button>
              <div
                id="menu-3"
                className="flex flex-col bg-purple-500 p-1 rounded-lg"
                popover
              >
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Very Long Item Name
                </a>
              </div>
            </div>
            <div>
              <button
                popovertarget="menu-4"
                className="bg-purple-800 p-2 rounded-lg"
              >
                Dropdown Menu 4
              </button>
              <div
                id="menu-4"
                className="flex flex-col bg-purple-500 p-1 rounded-lg"
                popover
              >
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
                  Longer Item
                </a>
                <a href="" className="hover:bg-purple-700 p-2 rounded-lg">
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
