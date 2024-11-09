import React, { useState, useEffect } from 'react';
import './countdown.css';

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft(targetDate));

  function CalculateTimeLeft(td) {
    const difference = new Date(td) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(CalculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  var timeUnits = {
    days: 365,
    hours: 24,
    minutes: 60,
    seconds: 60
  }
  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([unit, value]) => {
        const element = document.querySelector(`.${unit} .number`);
        const degree = 360 / timeUnits[unit] * (timeUnits[unit] - timeLeft[unit]);
        if (element) {
          element.style.setProperty("--degree", `${degree}deg`)
        }
  
        return (
          <div key={unit} className={`part ${unit}`}>
            <div className="number">{value}</div>
            <div className="text">{unit}</div>
          </div>
        );
      })}
    </div>
  );
  
}
