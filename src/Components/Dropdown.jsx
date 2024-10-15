import React, { useState } from "react";
import GoHome from "./GoHome";

const countries = [
  { name: "India", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", cities: ["Lahore", "Islamabad"] },
  { name: "Bangladesh", cities: ["Dhaka", "Khulna"] },
  { name: "Sri Lanka", cities: ["Colombo", "Galle"] },
];

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const handleDropdown = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl m-5 p-5">Dropdown</h1>
        <div>
          {/* 1st DropDown */}
          <select
            className="p-3 m-2 w-96 text-center text-2xl outline-none bg-white border-4 border-lime-600 rounded-md"
            onChange={(e) => handleDropdown(e)}
          >
            {countries.map((country, index) => {
              return (
                <option value={index} key={index}>
                  {country.name}
                </option>
              );
            })}
          </select>

          {/* 2nd DropDown */}
          <select
            className="p-3 w-96 text-center text-2xl outline-none bg-white border-4 border-lime-600 rounded-md"
            placeholder="Search Here..."
          >
            {countries[selectedCountry].cities.map((city, index) => {
              return (
                <option value={city} key={index}>
                  {city}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default Dropdown;
