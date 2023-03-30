import React, { useState } from 'react';
import TableContent from '../TableContent/TableContent';
import "./InputField.css"

const InputField = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  const [data, setData] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [sortOrder, setSortOrder] = useState('asc'); // default sorting order is ascending

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name === '') return;

    if (editIndex !== null) {
      // Update existing data
      setData((prevData) =>
        prevData.map((item, index) => {
          if (index === editIndex) {
            return formData;
          }
          return item;
        })
      );
      setEditIndex(null);
    } else {
      // Add new data
      setData((prevData) => [...prevData, formData]);
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(data[index]);
  };

  const handleDelete = (index) => {
    setData((prevData) =>
      prevData.filter((item, i) => {
        return i !== index;
      })
    );
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // toggle sorting order
  };

  return (
    <div className="inputWrapper">
      <h1>Input Field</h1>
      <form onSubmit={handleSubmit} >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>

      <TableContent data={data} handleEdit={handleEdit} handleDelete={handleDelete} handleSort={handleSort} sortOrder={sortOrder} />
    </div>
  );
};

export default InputField;

