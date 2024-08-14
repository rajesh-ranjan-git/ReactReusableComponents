import React, { useEffect, useState } from "react";
import GoHome from "./GoHome";

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [timerID, setTimerID] = useState(0);
  const [buttonValue, setButtonValue] = useState("Start");
  const [stop, setStop] = useState(null);

  const handleStartTimer = (e) => {
    if (e.target.innerText === "Start") {
      setIsTimerStarted(true);
      setButtonValue("Pause");
      setStop(true);
    } else if (e.target.innerText === "Pause") {
      setIsTimerStarted(false);
      setButtonValue("Resume");
    } else if (e.target.innerText === "Resume") {
      setIsTimerStarted(true);
      setButtonValue("Pause");
    }
  };

  const handleStopTimer = () => {
    setStop(false);
    setButtonValue("Start");
    setIsTimerStarted(false);
    clearInterval(timerID);
    setTimerID(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const startTimer = (hours, minutes, seconds) => {
    if (seconds < 59) {
      setSeconds((s) => s + 1);
    } else if (minutes < 59) {
      setSeconds(0);
      setMinutes((m) => m + 1);
    } else {
      setMinutes(0);
      setHours((h) => h + 1);
    }
  };

  useEffect(() => {
    let tID;
    tID = setInterval(() => {
      if (isTimerStarted === true) {
        startTimer(hours, minutes, seconds);
      }
    }, 100);

    setTimerID(tID);

    return clearInterval(timerID);
  }, [isTimerStarted, hours, minutes, seconds]);

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl p-5">Countdown Timer</h1>
        <div className="flex items-center">
          <div className="m-16 text-8xl">
            {hours < 10 ? `0${hours}` : hours}
          </div>
          <span className="text-6xl">:</span>
          <div className="m-16 text-8xl">
            {minutes < 10 ? `0${minutes}` : minutes}
          </div>
          <span className="text-6xl">:</span>
          <div className="m-16 text-8xl">
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
        <div>
          <button
            className="m-4 p-4 w-48 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
            onClick={handleStartTimer}
          >
            {buttonValue}
          </button>
          {stop && (
            <button
              className="m-4 p-4 w-48 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
              onClick={handleStopTimer}
            >
              Stop
            </button>
          )}
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default CountdownTimer;
