import React from "react";
import D from "./D";
var cstyles = {
  textAlign: "center",
  width: "500px",
  padding: "20px",
  boxShadow: "0 0 10px blue",
  margin: "30px auto",
};

function C() {
  return (
    <div style={cstyles}>
      <h2>C Component</h2>
      <D />
    </div>
  );
}

export default C;
