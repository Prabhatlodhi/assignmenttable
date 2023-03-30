import React, { useState } from 'react'
import TableContent from '../TableContent/TableContent'
import "./InputField.css"

const InputField = () => {
    const [data, setData] = useState("");
    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [data4, setData4] = useState("");

    const [alldata, setalldata] = useState([])

    
    function inputData(){
        console.log(data)
        if(data==="") return null;
        setalldata(
            [...alldata,
                {
                    name: data,
                    lname: data1,
                    email:data2,
                    pan:data3,
                    city:data4
                }
            ]
        )
        setData("")
        setData1("")
        setData2("")
        setData3("")
        setData4("")
        // console.log(alldata)
        // setValues([alldata, ...values])
    }

  return (
    <div className='inputWrapper'>
      <h1 className='Inputheader'>InputField</h1>
      <div className='inputContainer'>
        <input type="text" placeholder='First Name' value={data} onChange={(e)=>{setData(e.target.value)}} />
        <input type="text" placeholder='Last Name' value={data1} onChange={(e)=>{setData1(e.target.value)}}/>
        <input type="email" placeholder='Email' value={data2} onChange={(e)=>{setData2(e.target.value)}}/>
        <input type="text" placeholder='PAN Number' value={data3} onChange={(e)=>{setData3(e.target.value)}}/>
        <input type="City" placeholder='City' value={data4} onChange={(e)=>{setData4(e.target.value)}}/>
        <button onClick={inputData}>SUBMIT DATA</button>
      </div>
     
      <TableContent inputalldata={alldata}/>
    </div>
  )
}

export default InputField;
