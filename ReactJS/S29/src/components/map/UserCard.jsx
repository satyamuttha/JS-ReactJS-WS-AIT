import { useState } from "react";
import { users } from "./usercardinfo";
import "./UserCard.css";
function UserCard() {
  const [state, setState] = useState(users);
  return (
    <div style={{ padding: "50px" }}>
      <div>
        <h1>Users Information</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus nam officiis quia? Odit, quasi! Vero aspernatur qui
          eos. Laboriosam molestiae facilis adipisci commodi maxime, iusto ipsa
          aliquid obcaecati consectetur ab ratione sequi odio, distinctio alias
          necessitatibus eaque dolor exercitationem? Minima, explicabo qui
          exercitationem maiores provident quae commodi facere praesentium
          architecto debitis earum excepturi beatae cupiditate! Ipsa voluptas
          eum inventore, earum laborum corporis eaque dignissimos, est quam
          incidunt illo consequatur voluptatem voluptate provident maiores non
          quos! Cumque odit enim magnam natus exercitationem? Corporis
          praesentium placeat beatae accusantium, molestiae, consequatur est
          laboriosam explicabo quod earum vero? Impedit fugiat ex perferendis
          nisi doloremque?
        </p>
      </div>

      <div id="cardContainer">
        {state.map((user) => {
          return (
            <div id="card" key={user.email}>
              <img src={user.image_url} width={"100%"} height={270} />
              <h4>{user.username}</h4>
              <h5>{user.email}</h5>
              <h5>{user.gender}</h5>
              <h5>{user.city}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserCard;
