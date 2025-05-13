import "./Task1.css";
import { useState } from "react";

function Task1() {
  var [state, setState] = useState("Welcome to React JS");

  //info = [state,setterFn]
  //       info[0]  info[1]()

  function changeContent() {
    // info[1]("Hello, Geeks of React");
    setState("Hello, Geekssss");

    // var h1DomElement = document.querySelector("h1");
    //h1DomElement.innerText = "Hello, React Geeks";
    // var collection = document.getElementsByTagName("h1");
    // collection[0].innerText = "Hi, React Geeks";
  }

  return (
    <div className="task1">
      {/* <h1> {info[0]} </h1> */}
      <h1> {state} </h1>
      <button onClick={changeContent}>Action</button>
    </div>
  );
}

export default Task1;
