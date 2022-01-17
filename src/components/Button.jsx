import React, { useState } from "react";

export default function Button({ text = "submit", clicked = (f) => f }) {
  return (
    <React.Fragment>
      <button style={{width: "100%", backgroundColor: "white", padding: "1.5em", border: "none", borderRadius: "0.3em", cursor: "grab"}} onClick={clicked}>{text}</button>
    </React.Fragment>
  );
}
