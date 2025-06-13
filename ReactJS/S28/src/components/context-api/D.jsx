import React from "react";
import E from "./E";
var dstyles = {
  textAlign: "center",
  width: "400px",
  padding: "20px",
  boxShadow: "0 0 10px green",
  margin: "30px auto",
};

function D() {
  return (
    <div style={dstyles}>
      <h2>D Component</h2>
      <E />
    </div>
  );
}

export default D;
