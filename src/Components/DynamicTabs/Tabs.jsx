import React, { useState } from "react";

const Tabs = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (currentTab) => {
    setActiveTab(currentTab);
  };

  return (
    <>
      <div className="flex">
        {tabData && tabData.length
          ? tabData.map((tab, index) => (
              <div
                className="border-2 border-white bg-lime-600 hover:bg-lime-400 px-6 p-4 border-b-0 rounded-t-lg font-semibold text-white transition-all cursor-pointer smooth"
                style={
                  activeTab === tab.id - 1
                    ? { backgroundColor: "purple" }
                    : null
                }
                key={tab.id}
                onClick={() => handleTabChange(index)}
              >
                {tab.label}
              </div>
            ))
          : null}
      </div>

      <div className="flex justify-center items-center p-2 border border-lime-600 rounded-xl w-[70vw] h-[60vh]">
        {tabData[activeTab] && tabData[activeTab].content}
      </div>
    </>
  );
};

export default Tabs;
