import React from "react";

export default function ListUser() {
  const users = [
    {
      id: 1,
      userName: " Nguyen Van A",
      gender: "Nam",
      address: "HN",
    },
    {
      id: 2,
      userName: " Nguyen Van B",
      gender: "Nu",
      address: "HP",
    },
    {
      id: 3,
      userName: " Nguyen Van C",
      gender: "Khac",
      address: "QN",
    },
  ];
  return (
    <>
      <h3>List Users</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <React.Fragment key={user.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.gender}</td>
                  <td>{user.address}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
