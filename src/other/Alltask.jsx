// import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthProvider'

// const Alltask = () => {
// const [userData,setUserData] = useContext(AuthContext)
//   return (
//     <>


// <div className='flex px-48 gap-5 justify-between p-2 rounded-sm text-2xl bg-red-400  mt-32'>
//      <h1 className='w-1/2'>Employee Name</h1>
//      <h1  className='w-1/2'>New Task</h1>
//      <h1  className='w-1/2'>Ative Task</h1>
//      <h1  className='w-1/2 '>Completed</h1>
//      <h1  className='w-1/2 ' >Failed</h1>
// </div>

// <div className='mt-2 h-40 overflow-auto'>
// {userData.map((elem,idx)=>{

// return  <div  key={idx} className='flex gap-16 px-48 justify-between p-2 rounded-sm text-xl border-2  border-green-700 overflow- mb-2'>
// <h1 className='w-1/2  '>{elem.firstName}</h1>
// <h5 className='w-1/2  text-blue-600' >{elem.taskNumber.newTask}</h5>
// <h5 className='w-1/2 text-purple-500'>{elem.taskNumber.active}</h5>
// <h5 className='w-1/2 text-orange-700'>{elem.taskNumber.complete}</h5>
// <h5 className='w-1/2 text-pink-800'>{elem.taskNumber.failed}</h5>


// </div>  
// })}
//  </div>  
   
  
//     </>
//   )
// }

// export default Alltask





import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="px-4">
      {/* Header Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-lg bg-red-400 p-2 mt-10 rounded-sm text-center">
        <h1>Employee Name</h1>
        <h1>New Task</h1>
        <h1>Active Task</h1>
        <h1>Completed</h1>
        <h1>Failed</h1>
      </div>

      {/* Data Rows */}
      <div className="mt-2 h-40 overflow-auto">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-center text-xl border-2 border-green-700 p-2 rounded-sm mb-2"
          >
            <h1 className="text-black">{elem.firstName}</h1>
            <h5 className="text-blue-600">{elem.taskNumber.newTask}</h5>
            <h5 className="text-purple-500">{elem.taskNumber.active}</h5>
            <h5 className="text-orange-700">{elem.taskNumber.complete}</h5>
            <h5 className="text-pink-800">{elem.taskNumber.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
