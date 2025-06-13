import React from "react";

function ArrayData() {
  var data = [<h2>hi</h2>, <h3>hello</h3>];
  return (
    <div style={{ padding: "50px" }}>
      <h1>Array Data</h1>
      <p>{data}</p>
    </div>
  );
}

export default ArrayData;
