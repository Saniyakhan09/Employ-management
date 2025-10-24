// import React, { useContext, useState } from 'react'
// import  { AuthContext } from '../context/AuthProvider'

// const Createtask = () => {
// const [userData,setUserData]= useContext(AuthContext)


// const [taskTitle, setTaskTitle] = useState('')
// const [taskDescription, setTaskDescription] = useState('')
// const [taskDate, setTaskDate] = useState('')
// const [asignTo, setAsignTo] = useState('')
// const [category, setCategory] = useState('')

// const [newTask, setNewTask] = useState({})


// const click =(e)=>{
// e.preventDefault('')

// setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

// const data = userData

// data.forEach(function(elem){
//   if(asignTo == elem.firstName){
//     elem.tasks.push(newTask)
//     // elem.taskCounts.newTask = elem.taskCounts.newTask + 1
//   }
// })
// setUserData(data)
// console.log(data)

// setTaskTitle('')
// setCategory('')
// setAsignTo('')
// setTaskDate('')
// setTaskDescription('')

// }


//   return (
//     <>
//       <div className='flex justify-center mt-20 items-center border-solid border-green-950 border[2px]'>
//         <form   
        
      
//         className='flex justify-center border p-5 bg-[#1c1c1c]  gap-10'>
//             <div>
//             <div >
//             <h1 className='pb-1'>Task Title</h1>
//             <input className='rounded-sm mb-2 text-black' type="text"
//              placeholder='Make a UI design'
//              value={taskTitle}
//             onChange={(e)=>{
//               setTaskTitle(e.target.value) 
//             }}
//             />
//             </div>
//           <div>
//             <h1>Date</h1>
//             <input className='rounded-sm mb-2  text-black' type="date"
//               value={taskDate}
//               onChange={(e)=>{
//                 setTaskDate(e.target.value) 
//               }}
//             />
//           </div>
//           <div>
//             <h1>Assign</h1>
//             <input className='rounded-sm mb-2  text-black' type="employee name" 
//                value={asignTo}
//                onChange={(e)=>{
//                 setAsignTo(e.target.value) 
//                }}
//             />
//           </div>
//           <div>
//             <h1>Category</h1>
//             <input className='rounded-sm mb-2  text-black' type="text"
//                 value={category}
//                 onChange={(e)=>{
//                   setCategory(e.target.value) 
//                 }}
//             />
//           </div>
//             </div>     
//           <div>
//         <div> 
//             <h1>
//             Description
//             </h1>
//             <input className='rounded-sm mb-2  text-black' type="text"
//                value={taskDescription}
//                onChange={(e)=>{
//                 setTaskDescription(e.target.value) 
//                }} />
            
//         <div>
// <button   onClick={(e)=>{
//           click(e)
//         }}     className='bg-green-700 mt-5 rounded-sm p-1'>Create Task</button>
//         </div>
//             </div>
//           </div>
//         </form>
//       </div>

  
//     </>
//   )
// }

// export default Createtask


import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Createtask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const [newTask, setNewTask] = useState({});

  const click = (e) => {
    e.preventDefault();

    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false });

    const data = [...userData];

    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
      }
    });

    setUserData(data);
    console.log(data);

    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <>
      <div className="flex justify-center mt-10 items-center">
        <form className="flex flex-col lg:flex-row justify-center border p-5 sm:p-10 bg-[#1c1c1c] w-full max-w-[900px] gap-4 sm:gap-10 rounded-md">
          {/* Left Section */}
          <div className="w-full">
            <div>
              <h1 className="pb-1">Task Title</h1>
              <input
                className="w-full rounded-sm mb-2 text-black p-2"
                type="text"
                placeholder="Make a UI design"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div>
              <h1>Date</h1>
              <input
                className="w-full rounded-sm mb-2 text-black p-2"
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
            </div>
            <div>
              <h1>Assign</h1>
              <input
                className="w-full rounded-sm mb-2 text-black p-2"
                type="text"
                placeholder="Employee Name"
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
              />
            </div>
            <div>
              <h1>Category</h1>
              <input
                className="w-full rounded-sm mb-2 text-black p-2"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <div>
              <h1>Description</h1>
              <textarea
                className="w-full rounded-sm mb-2 text-black p-2 h-24"
                placeholder="Task description..."
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-5">
              <button
                onClick={click}
                className="bg-green-700 hover:bg-green-800 transition text-white py-2 px-4 rounded-sm w-full sm:w-40"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Createtask;
