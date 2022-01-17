import React from "react";
import style from "../styles/components/principalinput.module.css";
export default function PrincipalInput({ changed = (f) => f }) {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "0.3em",
        }}
      >
        <label htmlFor="principalInput">Principal</label>
        <input type="number" id={style.principalInput} onChange={changed}/>
      </div>
    </React.Fragment>
  );
}
