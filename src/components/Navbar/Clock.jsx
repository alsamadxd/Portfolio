import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    ampm: "AM",
  });

  const updateClock = () => {
    const newDate = new Date();
    let h = newDate.getHours();
    let m = newDate.getMinutes();
    let s = newDate.getSeconds();
    let ampm = "AM";

    if (h >= 12) {
      ampm = "PM";
      if (h > 12) h -= 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    setTime({ hours: h, minutes: m, seconds: s, ampm });
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="hidden sm:flex gap-1 text-[#ff004f] ">
      <div className="hours">{time.hours}</div>
      <div className="">:</div>
      <div className="minutes">{time.minutes}</div>
      <div className="">:</div>
      <div className="seconds">{time.seconds}</div>
      <div className="ampm">{time.ampm}</div>
    </div>
  );
};

export default Clock;

