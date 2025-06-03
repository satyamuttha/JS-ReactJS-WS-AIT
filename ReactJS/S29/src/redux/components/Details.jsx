import React from "react";
import { useSelector } from "react-redux";

function Details() {
  const data = useSelector((storeData) => {
    return storeData.name;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2>Details Component</h2>
      <br />
      <p style={{ color: "green", fontSize: "21px", fontWeight: "bold" }}>
        {data}
      </p>
    </div>
  );
}

export default Details;
