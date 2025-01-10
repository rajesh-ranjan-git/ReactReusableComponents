import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();

  const handleErrorToHome = () => {
    navigate("/");
  };

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={
        theme === "light"
          ? "flex flex-col items-center gap-20 w-full h-screen transition-all ease-in-out"
          : "flex flex-col items-center gap-20 w-full h-screen bg-slate-600 transition-all ease-in-out"
      }
    >
      <h1
        className={
          theme === "light"
            ? "p-5 text-5xl transition-all ease-in-out"
            : "p-5 text-5xl text-white transition-all ease-in-out"
        }
      >
        Infinite Scrolling
      </h1>

      <button
        className={
          theme === "light"
            ? "bg-slate-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white transition-all ease-in-out"
            : "bg-white shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-black transition-all ease-in-out"
        }
        onClick={handleThemeChange}
      >
        Switch to Dark Mode
      </button>
      <button
        className={
          theme === "light"
            ? "bg-slate-600 transition-all ease-in-out shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white bottom-10 fixed"
            : "bg-white transition-all ease-in-out shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-black bottom-10 fixed"
        }
        onClick={handleErrorToHome}
      >
        Go Home
      </button>
    </div>
  );
};

export default ThemeChanger;
