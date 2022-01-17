import React from "react";

export default function Result({ result }) {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "40px",
          color: "black",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {result}
      </div>
    </React.Fragment>
  );
}
