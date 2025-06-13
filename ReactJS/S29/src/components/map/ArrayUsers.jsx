// import { useState } from "react";

// function ArrayUsers() {
//   const [state, setState] = useState([
//     "raj",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rohan",
//     "riya",
//     "rupa",
//     "raju",
//   ]);

//   return (
//     <div style={{ padding: "50px" }}>
//       <h1>User Names</h1>
//       <ol>
//         {state.map((ele) => {
//           return <li>{ele}</li>;
//         })}
//       </ol>
//     </div>
//   );
// }

// export default ArrayUsers;

import { useState } from "react";
import { indian_usernames } from "./userNameData";

function ArrayUsers() {
  const [state, setState] = useState(indian_usernames);

  return (
    <div style={{ padding: "50px" }}>
      <h1>User Names</h1>
      <ol>
        {state.map((ele) => {
          return <li>{ele}</li>;
        })}
      </ol>
    </div>
  );
}

export default ArrayUsers;
