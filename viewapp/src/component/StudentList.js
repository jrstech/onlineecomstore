import React, { useEffect, useState } from 'react'


const StudentList = () => {
 const [student, setStudent] = useState([])

const getStudent = async() => {
  let result = await fetch('http://localhost:5000/studentlist')
  result = await result.json();
  setStudent(result);
  console.log(result);
}

useEffect(() => {
    getStudent();
},[])

  return (
    <div >
      <h2 className='m-4'>Student List</h2>
      <div className='m-5 studentlist'>
      <tr>
        <th className='p-2'>Sr.No </th>
        <th className='p-2'>Student Name </th>
        <th className='p-2'>Father Name </th>
        <th className='p-2'>Mother Name </th>
        <th className='p-2'>Mobile Number </th>
        <th className='p-2'>Gender</th> 
        <th className='p-2'>State</th> 
        <th className='p-2'>District</th> 
        <th className='p-2'>Block/</th> 
        <th className='p-2'>Town/Village</th> 
        <th className='p-2'>Pin</th> 
      </tr>

      {
      student.length>0?student.map((item, index)=> 
        <tr key={item._id}>
          <th>{index+1}</th>
          <th>{item.fullname}</th>
          <th>{item.fathername}</th>
          <th>{item.mothername}</th>
          <th>{item.mobilenumber}</th>
          <th>{item.gender}</th>
          <th>{item.state}</th>
          <th>{item.district}</th>
          <th>{item.block}</th>
          <th>{item.town}</th>
          <th>{item.pin}</th>

        </tr>
      )
:
    <h4 className='m-4'>No result Found</h4>
    }
      </div>
    </div>
  )
}

export default StudentList
