import { useState, useRef } from "react";

function UseRefDemo() {
  const [state, setState] = useState(0);
  let refObject = useRef(0); //  refObject = {current:0}

  //   const [data, setData] = useState(100);

  function updateState() {
    setState(state + 1);
  }

  function updateVariable() {
    refObject.current = refObject.current + 1;

    // x = x + 1;
    // setData(data + 1);
  }

  function displayData() {
    // console.log("Variable", x);
    // console.log("data", data);
    console.log("state", state);
    console.log("ref", refObject.current);
  }

  return (
    <div style={{ padding: "100px" }}>
      <h2>useRef Hook : {state} </h2>
      <button onClick={updateVariable}>update Variable</button>&nbsp;
      <button onClick={updateState}>update State</button>&nbsp;
      <button onClick={displayData}>Display Data</button>&nbsp;
    </div>
  );
}

export default UseRefDemo;
