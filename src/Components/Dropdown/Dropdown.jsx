import React, { useState } from "react";
import GoHome from "../Utility/GoHome";

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
        <h1 className="m-5 p-5 text-5xl">Dropdown</h1>
        <div>
          {/* 1st DropDown */}
          <select
            className="border-4 bg-white m-2 p-3 border-lime-600 rounded-md w-96 text-2xl text-center outline-none"
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
            className="border-4 bg-white p-3 border-lime-600 rounded-md w-96 text-2xl text-center outline-none"
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
