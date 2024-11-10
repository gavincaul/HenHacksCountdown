import React from "react";
import "./Home.css";
import "./Snowflake.css";
import { Countdown } from "../components/countdown.js";


export default function Home() {
  const td = "01 Mar 2025 00:00:00 EST"; // target date

  return (
    <div className="black-background">
      <div> 
        <div className="snowflake"><img src="/chickensnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/pigsnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/chickensnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/pigsnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/chickensnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/pigsnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/chickensnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/pigsnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/chickensnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
        <div className="snowflake"><img src="/pigsnowflake.png" alt="snowflakeElement" style={{width:'35px'}} /></div>
      </div>
      <div className="countdown-container">
        <img src="/timerbackground.png" alt="Countdown" className="countdown-image" />
          <a href="https://www.henhackshackathon.com/" style={{ textDecoration: 'none'}}>
          <div className="countdown-overlay" >
            <Countdown targetDate={td} />
          </div>
        </a>
      </div>
    </div>
  );
}
