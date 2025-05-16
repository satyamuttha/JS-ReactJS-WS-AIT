import React from "react";

var estyles = {
  textAlign: "center",
  width: "300px",
  padding: "20px",
  boxShadow: "0 0 10px coral",
  margin: "30px auto",
};

function E() {
  return (
    <div style={estyles}>
      <h2>
        E Component :<span style={{ color: "green" }}>{}</span>
      </h2>
    </div>
  );
}

export default E;
