import { useContext } from "react";
import D from "./D";
import myContext from "./context";
var cstyles = {
  textAlign: "center",
  width: "500px",
  padding: "20px",
  boxShadow: "0 0 10px blue",
  margin: "30px auto",
};

function C() {
  const data = useContext(myContext);
  return (
    <div style={cstyles}>
      <h2>C Component :{data}</h2>
      <D />
    </div>
  );
}

export default C;
