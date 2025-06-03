import { useRef } from "react";
import userActionCreator from "../action-creators/userActionCreator";
import mystore from "../store/store";
function User() {
  const inputRef = useRef(null);

  const getActionObject = () => {
    const userAction = userActionCreator(inputRef.current.value);
    mystore.dispatch(userAction);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Users Component</h2>
      <br />
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={getActionObject}>Submit</button>
    </div>
  );
}

export default User;
