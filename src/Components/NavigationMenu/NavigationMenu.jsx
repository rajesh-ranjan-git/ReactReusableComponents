import React from "react";
import NavigationList from "./NavigationList";
import GoHome from "../GoHome";
import menu from "./data/navigationData";

const NavigationMenu = () => {
  return (
    <>
      <div className="flex justify-between bg-lime-600 shadow-slate-950 shadow-xl p-2 pr-4 rounded-r-xl w-64 h-screen font-semibold text-white text-xl">
        <NavigationList menu={menu} />
      </div>
      <GoHome />
    </>
  );
};

export default NavigationMenu;
