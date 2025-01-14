import React, { useState } from "react";
import GoHome from "../Utility/GoHome";

const RandomColorGenerator = () => {
  const [newColor, setNewColor] = useState("");

  const generateHexColor = (color) => {
    const colorStr = color.reduce((acc, curr) => {
      if (curr < 10) {
        return acc + curr;
      } else {
        switch (curr) {
          case 10:
            return acc + "A";
          case 11:
            return acc + "B";
          case 12:
            return acc + "C";
          case 13:
            return acc + "D";
          case 14:
            return acc + "E";
          case 15:
            return acc + "F";
          default:
            null;
        }
      }
    }, "");
    setNewColor(() => "#" + colorStr);
  };

  const generateRGBColor = (color) => {
    setNewColor(() => "rgb(" + color.toString(color) + ")");
  };

  const generateRGBColorWithOpacity = (color) => {
    setNewColor(
      () =>
        "rgb(" +
        color.toString(color) +
        "," +
        Number(Math.random().toFixed(1)) +
        ")"
    );
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Random Color Generator</h1>
        <div className="flex">
          <button
            className="bg-lime-600 shadow-slate-950 shadow-xl m-4 p-4 rounded-full font-semibold text-2xl text-white"
            onClick={() =>
              generateHexColor([
                Number((Math.random() * 15).toFixed(0)),
                Number((Math.random() * 15).toFixed(0)),
                Number((Math.random() * 15).toFixed(0)),
                Number((Math.random() * 15).toFixed(0)),
                Number((Math.random() * 15).toFixed(0)),
                Number((Math.random() * 15).toFixed(0)),
              ])
            }
          >
            Generate Hex Color
          </button>
          <button
            className="bg-lime-600 shadow-slate-950 shadow-xl m-4 p-4 rounded-full font-semibold text-2xl text-white"
            onClick={() =>
              generateRGBColor([
                Number((Math.random() * 255).toFixed(0)),
                Number((Math.random() * 255).toFixed(0)),
                Number((Math.random() * 255).toFixed(0)),
              ])
            }
          >
            Generate RGB Color
          </button>
          <button
            className="bg-lime-600 shadow-slate-950 shadow-xl m-4 p-4 rounded-full font-semibold text-2xl text-white"
            onClick={() =>
              generateRGBColorWithOpacity([
                Number((Math.random() * 255).toFixed(0)),
                Number((Math.random() * 255).toFixed(0)),
                Number((Math.random() * 255).toFixed(0)),
              ])
            }
          >
            Generate RGB Color With Opacity
          </button>
        </div>
        {newColor && (
          <div
            className="top-60 absolute flex flex-col justify-center items-center shadow-slate-950 shadow-xl p-10 rounded-2xl w-[70%] h-[50%] font-semibold text-8xl text-white b"
            style={{ backgroundColor: newColor }}
          >
            <div>{newColor}</div>
          </div>
        )}
      </div>
      <GoHome />
    </>
  );
};

export default RandomColorGenerator;
