import React from "react";
import style from "../styles/components/principalinput.module.css";

export default function OtherInput({ label = "None", changed = (f) => f }) {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "0.3em",
          paddingTop: "0.5em",
          paddingBottom: "0.5em",
        }}
      >
        <label htmlFor="principalInput">{label}</label>
        <input type="number" id={style.principalInput} onChange={changed}/>
      </div>
    </React.Fragment>
  );
}
