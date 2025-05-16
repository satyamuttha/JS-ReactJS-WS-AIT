import { useState } from "react";
import B from "./B";

var astyles = {
  textAlign: "center",
  width: "800px",
  padding: "20px",
  boxShadow: "0 0 10px black",
  margin: "30px auto",
};

function A() {
  const [state, setSate] = useState("hello");
  return (
    <div style={astyles}>
      <h2>A Component</h2>
      <B />
    </div>
  );
}

export default A;
