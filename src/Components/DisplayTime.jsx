import React, { useEffect, useState } from "react";
import GoHome from "./GoHome";

const DisplayTime = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const currentDateAndTime = new Date();
  const currentDate = currentDateAndTime.toDateString();
  const currentTime = currentDateAndTime.toLocaleTimeString().split(":");

  useEffect(() => {
    let timerID = setInterval(() => {
      setHours(currentTime[0]);
      setMinutes(currentTime[1]);
      setSeconds(currentTime[2].split(" ")[0]);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [hours, minutes, seconds]);

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl p-5">Current Date and Time</h1>
        <div className="m-16 text-8xl">{currentDate}</div>
        <div className="flex items-center">
          <div className="m-16 text-8xl">{hours > 12 ? hours - 12 : hours}</div>
          <span className="text-6xl">:</span>
          <div className="m-16 text-8xl">{minutes}</div>
          <span className="text-6xl">:</span>
          <div className="m-16 text-8xl">{seconds}</div>
          <div className="m-16 text-8xl">{hours > 11 ? "PM" : "AM"}</div>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default DisplayTime;
