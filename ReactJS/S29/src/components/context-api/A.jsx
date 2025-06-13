import { useState } from "react";
import B from "./B";
import myContext from "./context";

var astyles = {
  textAlign: "center",
  width: "800px",
  padding: "20px",
  boxShadow: "0 0 10px black",
  margin: "30px auto",
};

function A() {
  const [state, setSate] = useState("hello I from A Component");
  return (
    <div style={astyles}>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setSate("hi Context");
        }}
      >
        Update Data
      </button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
