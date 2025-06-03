import { useState } from "react";

function Map() {
  const [state, setState] = useState([<h1>heading-1</h1>, <h2>heading-2</h2>]); //object
  return <div>{state}</div>;
}

export default Map;
