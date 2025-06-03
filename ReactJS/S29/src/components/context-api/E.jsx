import { useContext } from "react";
import myContext from "./context";

var estyles = {
  textAlign: "center",
  width: "300px",
  padding: "20px",
  boxShadow: "0 0 10px coral",
  margin: "30px auto",
};

function E() {
  const data = useContext(myContext);
  return (
    <div style={estyles}>
      <h2>
        E Component :<span style={{ color: "green" }}>{data}</span>
      </h2>
    </div>
  );
}

export default E;
