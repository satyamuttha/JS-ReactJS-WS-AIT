import { useReducer } from "react";
import "./Counter.css";
import { countReducer } from "./reducer";

// const countReducer = (state, action) => {
//   var newdata = "Kabir";
//   //logic to update your state and then return the data

//   return newdata;
// };

function Counter() {
  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="counter">
      <h1>Count Value is : {state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "inc", payload: 1 });
        }}
      >
        incCount
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec", payload: 1 });
        }}
      >
        decCount
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        resetCount
      </button>

      <button
        onClick={() => {
          dispatch({ type: "inc", payload: 5 });
        }}
      >
        incCount by 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "dec", payload: 3 });
        }}
      >
        decCount By 3
      </button>
    </div>
  );
}

export default Counter;
