import React from "react";
import NavigationList from "./NavigationList";
import GoHome from "../GoHome";
import menu from "./data/navigationData";

const NavigationMenu = () => {
  return (
    <>
      <h1 className="p-5 text-5xl text-center">Navigation Menu</h1>
      <div className="top-0 absolute flex justify-between bg-lime-600 shadow-slate-950 shadow-xl p-2 pr-4 rounded-r-xl w-64 h-screen font-semibold text-white text-xl">
        <NavigationList menu={menu} />
      </div>
      <GoHome />
    </>
  );
};

export default NavigationMenu;
