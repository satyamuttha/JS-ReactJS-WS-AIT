import { useEffect, useState } from "react";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ margin: "20px 0px" }}>Users Details</h2>
      <p style={{ margin: "20px 0px" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        alias ipsum ullam repellendus deleniti dicta officiis autem cumque odit
        dolorem neque accusantium, beatae velit tenetur. Possimus molestiae ad
        libero modi consectetur. Fuga est eveniet unde nostrum provident
        necessitatibus quae. Ducimus deserunt natus unde dignissimos ab illum
        beatae harum dicta. Nihil eum quaerat porro eaque ut asperiores
        laudantium illum dicta animi vitae pariatur enim voluptate eligendi
        labore ab officiis laborum amet omnis rerum magnam repellendus dolorem,
        consequatur assumenda atque! Voluptatum accusamus facilis soluta.
        Laboriosam impedit cupiditate beatae quaerat quam odio ex enim dolores,
        autem voluptates vitae assumenda, veritatis temporibus! Rerum eligendi
        expedita aliquid natus quasi, voluptatibus aut perferendis
        exercitationem inventore corrupti deserunt tenetur doloremque numquam
        corporis, quia sed neque fugit quae modi dolore, voluptas eius quibusdam
        doloribus ea! Ad vitae velit reiciendis hic! Sequi quo, vel temporibus
        illum eveniet voluptas possimus perspiciatis fugit debitis facere eaque
        eos asperiores, quaerat totam non blanditiis earum provident aut
        voluptates! Aliquam consequatur, odio dolorem adipisci sint aspernatur
        laborum harum debitis vel qui hic pariatur id fuga, quod perspiciatis
        architecto omnis. Cumque rem ipsa itaque temporibus ad accusamus esse
        quisquam repellat necessitatibus asperiores, atque consequatur veritatis
        velit, eum, et non optio. Ducimus adipisci repellendus officia
        quibusdam?
      </p>
      {users.length > 0 ? (
        <table width="100%" frame="below" rules="rows">
          <thead>
            <tr style={{ color: "green" }}>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CITY</th>
              <th>GENDER</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody align="center">
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button
                        style={{
                          padding: "7px 20px",
                          border: "3px solid green",
                        }}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        style={{ padding: "7px 20px", border: "3px solid red" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <h1 style={{ color: "red", textAlign: "center" }}>
          No Users Data To display
        </h1>
      )}
    </div>
  );
}

export default Users;
