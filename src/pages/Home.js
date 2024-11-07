import React from "react";
import "./Home.css";
import { Countdown } from "../components/countdown.js";


export default function Home() {
  const td = "01 Mar 2025 00:00:00 EST"; // Set your target date here

  return (
    <div className="black-background">
      <div className="countdown-container">
        <img src="/sources/timerbackground.png" alt="Countdown" className="countdown-image" />
        <div className="countdown-overlay">
          <Countdown targetDate={td} />
        </div>
      </div>
    </div>
  );
}
