import React from "react";
import "./Snowflake.css";

export function Snowflake({ snowflakeNum }) {
  const img_arr = ["/pigsnowflake.png", "/chickensnowflake.png"];
  const snowflake_arr = [];

  for (let i = 0; i < snowflakeNum; i++) {
    snowflake_arr.push(img_arr[i % img_arr.length]);
  }

  return (
    <div>
      {snowflake_arr.map((src, index) => (
        <div className="snowflake" key={index}>
          <img src={src} alt="snowflakeElement" style={{ width: "35px" }} />
        </div>
      ))}
    </div>
  );
}
