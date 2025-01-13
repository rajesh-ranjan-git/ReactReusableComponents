import React, { useEffect, useState } from "react";
import GoHome from "../GoHome";
import Tabs from "./Tabs";
import RandomComponent from "./RandomComponent";

const DynamicTabs = () => {
  const tabData = [
    {
      id: "1",
      label: "Tab 1",
      content: <p>Data for Tab 1</p>,
    },
    {
      id: "2",
      label: "Tab 2",
      content: <p>Data for Tab 2</p>,
    },
    {
      id: "3",
      label: "Tab 3",
      content: <p>Data for Tab 3</p>,
    },
    {
      id: "4",
      label: "Tab 4",
      content: <RandomComponent />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Dynamic Tabs</h1>
        <Tabs tabData={tabData} />
      </div>
      <GoHome />
    </>
  );
};

export default DynamicTabs;
