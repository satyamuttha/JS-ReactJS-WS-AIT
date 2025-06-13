import { useState } from "react";

function Task3() {
  var [count, setCount] = useState(0);
  //   var countValue = 0;

  function increaseCount() {
    // count++;
    // console.log(count);

    setCount(count + 1);

    // console.log(countValue); //0
    // countValue++; //1
    // console.log(countValue); // 1
  }

  return (
    <div style={{ padding: "100px" }}>
      <h2>setter concept : {count}</h2>
      <button onClick={increaseCount}>Inc Count</button>
    </div>
  );
}

export default Task3;
