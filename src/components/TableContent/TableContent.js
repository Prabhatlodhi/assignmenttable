import React, { useState } from "react";
import "./TableContent.css";

const TableContent = ({ inputalldata }) => {
  const [allpropsData, setallpropsData] = useState(inputalldata);
  const [searchData, setsearchData] = useState("");
  const [edit, setEdit] = useState({});

  function filterName(value) {
    console.log(allpropsData[0].name);
    if (
      allpropsData.map((ele, ind) => {
        ele.name = searchData;
        console.log("tr");
      })
    )
      setsearchData("");
  }

   

  function handleEdit(ind) {
    setEdit({
      name: allpropsData[ind].name,
      lname: allpropsData[ind].lname,
      email: allpropsData[ind].email,
      pan: allpropsData[ind].pan,
      city: allpropsData[ind].city,
    });
  }

   

  return (
    <div className="tablewrapper">
      <div>
        <input
          type="text"
          placeholder="Search By Name"
          value={searchData}
          onChange={(e) => {
            setsearchData(e.target.value);
          }}
        />
        <button onClick={filterName}>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              First Name 
            </th>
            <th>Last Name</th>
            <th>Email</th>
            <th>PAN Number</th>
            <th>City Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {inputalldata.map((items, ind) => {
            console.log(inputalldata);
            return (
              <tr key={ind}>
                <td>{items.name}</td>
                <td>{items.lname}</td>
                <td>{items.email}</td>
                <td>{items.pan}</td>
                <td>{items.city}</td>
                <td>
                  <button onClick={handleEdit}>Edit</button> 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
