import React, { useState } from "react";
import "./index.css"

function Tables() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      lastName,
      email,
      panNumber,
      mobile
    };
    if (selectedUser !== null) {
      const updatedUsers = [...users];
      updatedUsers[selectedUser] = newUser;
      setUsers(updatedUsers);
      setSelectedUser(null);
    } else {
      setUsers([...users, newUser]);
    }
    setName("");
    setLastName("");
    setEmail("");
    setPanNumber("");
    setMobile("");
  };

  const handleEditUser = (index) => {
    const user = users[index];
    setName(user.name);
    setLastName(user.lastName);
    setEmail(user.email);
    setPanNumber(user.panNumber);
    setMobile(user.mobile);
    setSelectedUser(index);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleSortByName = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };
  
  return (
    <div className="App">
      <h1>User Details</h1>
      <form onSubmit={handleAddUser}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          PAN Number:
          <input type="text" value={panNumber} onChange={(e) => setPanNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Mobile:
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </label>
        <br />
        <button type="submit">{selectedUser !== null ? "Update User" : "Add User"}</button>
      </form>
      <button onClick={handleSortByName}>Sort by Name</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>PAN Number</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.panNumber}</td>
              <td>{user.mobile}</td>
              <td>
                <button onClick={() => handleEditUser(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 


</div>
);
}

export default Tables;