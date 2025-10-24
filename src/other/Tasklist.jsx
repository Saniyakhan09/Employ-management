// import React from 'react'
// import AcceptTask from '../components/Tasklist/AcceptTask'
// import CompleteTask from '../components/Tasklist/CompleteTask'
// import FailedTask from '../components/Tasklist/FailedTask'
// import NewTask from '../components/Tasklist/NewTask'

// const Tasklist = ({data}) => {
//   return (
//     <>
//       <div  className='flex gap-6 justify-center items-center mb-32 '>
//         <div className='bg-yellow-400  p-2 rounded-md h-28 w-64'>
//             <h1 className='font-bold text-2xl'>{data.taskNumber.newTask}</h1>
//             <br />
//             <h3 className='text-2xl'>New Task</h3>
//             </div>
//             <div className='bg-green-600 p-2 rounded-md h-28 w-64'>
//             <h1 className='font-bold text-2xl'>{data.taskNumber.complete}</h1>
//             <br />
//             <h3 className='text-2xl'> completed Task</h3>
//             </div>
//             <div className='bg-red-600 p-2 rounded-md h-28 w-64'>
//             <h1 className='font-bold text-2xl'>{data.taskNumber.active}</h1>
//             <br />
//             <h3 className='text-2xl'>active Task</h3>
//             </div>
//             <div className='bg-gray-800 p-2 rounded-md h-28 w-64'>
//             <h1 className='font-bold text-2xl'>{data.taskNumber.failed}</h1>
//             <br />
//             <h3 className='text-2xl'>failed Task</h3>
//             </div>
//       </div>
// {/* ------------------------------------------------------------------------------------------------------ */}



//       <div id='Tasklist' className='flex justify-center gap-20  overflow-x-scroll flex-nowrap '>
//       {data.tasks.map((value,ixd)=>{
//   if(value.active){
//   return  <AcceptTask key={ixd} data={value}/>
//   }
//   if(value.newTask){
//     return <NewTask key={ixd} data={value}/>
//   }
//   if(value.complete){
//     return <CompleteTask key={ixd} data={value}/>
//   }
//   if(value.failed){
//     return <FailedTask key={ixd} data={value}/>
//   }
//       })
//      }
//       </div>

    
//     </>
//   )
// }

// export default Tasklist



import React from 'react';
import AcceptTask from '../components/Tasklist/AcceptTask';
import CompleteTask from '../components/Tasklist/CompleteTask';
import FailedTask from '../components/Tasklist/FailedTask';
import NewTask from '../components/Tasklist/NewTask';

const Tasklist = ({ data }) => {
  return (
    <>
      {/* Task Summary Section */}
      <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
        <div className="bg-yellow-400 p-4 rounded-md h-28 w-64 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">{data.taskNumber.newTask}</h1>
          <h3 className="text-lg sm:text-2xl">New Task</h3>
        </div>
        <div className="bg-green-600 p-4 rounded-md h-28 w-64 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">{data.taskNumber.complete}</h1>
          <h3 className="text-lg sm:text-2xl">Completed Task</h3>
        </div>
        <div className="bg-red-600 p-4 rounded-md h-28 w-64 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">{data.taskNumber.active}</h1>
          <h3 className="text-lg sm:text-2xl">Active Task</h3>
        </div>
        <div className="bg-gray-800 p-4 rounded-md h-28 w-64 flex flex-col justify-center items-center text-white">
          <h1 className="font-bold text-2xl">{data.taskNumber.failed}</h1>
          <h3 className="text-lg sm:text-2xl">Failed Task</h3>
        </div>
      </div>

      {/* Task List Section */}
      <div
        id="Tasklist"
        className="flex flex-wrap gap-4 justify-center px-4 md:px-8 overflow-x-auto"
      >
        {data.tasks.map((value, ixd) => {
          if (value.active) {
            return <AcceptTask key={ixd} data={value} />;
          }
          if (value.newTask) {
            return <NewTask key={ixd} data={value} />;
          }
          if (value.complete) {
            return <CompleteTask key={ixd} data={value} />;
          }
          if (value.failed) {
            return <FailedTask key={ixd} data={value} />;
          }
        })}
      </div>
    </>
  );
};

export default Tasklist;


