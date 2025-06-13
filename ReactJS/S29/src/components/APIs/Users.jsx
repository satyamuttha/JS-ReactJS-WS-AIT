import { useEffect, useState } from "react";
import axios from "axios";
function Users({ update, updateUserData, users, getUsers }) {
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/users/${id}`);

      getUsers();
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
  };

  return (
    <div
      style={{ padding: "50px", boxShadow: "0 0 10px black", margin: "20px" }}
    >
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
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button
                        onClick={() => {
                          update(false);
                          updateUserData({ ...user });
                        }}
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
                        onClick={() => {
                          deleteUser(user.id);
                        }}
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
