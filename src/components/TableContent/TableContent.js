import React from 'react';
import './TableContent.css';

const TableContent = ({ data, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name <button>Sort a to z</button></th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
