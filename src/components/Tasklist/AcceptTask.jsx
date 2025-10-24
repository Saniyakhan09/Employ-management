import React, { useContext } from 'react'

const AcceptTask = ({data}) => {
 
  return (
    <>

       <div className='bg-violet-600  h-80 w-80 p-5 rounded '>
            <div className='flex mb-10 gap-4 justify-between'>
            <h3 className='bg-red-400 px-3 py-1'>{data.category}</h3>
            <h3>20 feb 2024</h3>
            </div>
            <h2 className='mb-2 font-semibold text-lg'>{data.title}</h2>
            <p>{data.description}</p>
            <div className='flex justify-between mt-2'>
            <button className='bg-red-500 py-2 px-4'>Make a Task</button>
            <button className='bg-blue-700 py-2 px-4'>Complete Task</button>
            </div>
           
        </div>
        
    </>
  )
}

export default AcceptTask
