import { useRef } from "react";

function RefDOM() {
  let h2Ref = useRef(null);
  let btnRef = useRef(null);
  let inputRef = useRef(null);

  const update = () => {
    var textBoxData = inputRef.current.value;

    var h2Dom = h2Ref.current;

    h2Dom.style.color = "red";
    h2Dom.innerText = textBoxData;

    btnRef.current.style.border = "2px solid red";
    btnRef.current.style.padding = "10px 20px";
  };

  return (
    <div style={{ padding: "100px" }}>
      <input ref={inputRef} type="text" placeholder="username" />
      <br />
      <br />
      <h2 ref={h2Ref}>DOM Manipulation using useRef</h2>
      <br />

      <button ref={btnRef} onClick={update}>
        Manipulate
      </button>
    </div>
  );
}

export default RefDOM;
