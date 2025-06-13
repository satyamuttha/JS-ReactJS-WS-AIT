import React from "react";
import C from "./C";
var bstyles = {
  textAlign: "center",
  width: "600px",
  padding: "20px",
  boxShadow: "0 0 10px green",
  margin: "30px auto",
};

function B() {
  return (
    <div style={bstyles}>
      <h2>B Component</h2>
      <C />
    </div>
  );
}

export default B;
