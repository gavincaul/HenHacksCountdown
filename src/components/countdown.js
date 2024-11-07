import React, { useState, useEffect } from 'react';
import './countdown.css'


export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft());

  function CalculateTimeLeft(td){
    let difference = Date.parse(td) - Date.now()
    let time
    if (difference > 0){
      difference /= 1000; //milliseconds to seconds

      let days = Math.floor(difference / 86400);   difference -= days * 86400; 
      let hours = Math.floor(difference / 3600);   difference -= hours * 3600; 
      let minutes = Math.floor(difference / 60);   difference -= minutes * 60; 
      let seconds = Math.floor(difference);

      time = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };

    }
    else{
      time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

    return time;
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(CalculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);


  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{timeLeft.days}</span>
        <p>Days</p>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.hours}</span>
        <p>Hours</p>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.minutes}</span>
        <p>Minutes</p>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.seconds}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
}