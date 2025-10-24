import React from 'react'

const NewTask = ({data}) => {
  return (
    <>
       <div className='bg-blue-600 flex-shrink-0  h-80 w-80 p-5 rounded '>
            <div className='flex mb-10 gap-4 justify-between'>
            <h3 className='bg-red-500 px-3 py-1'>New Task</h3>
            <h3>20 feb 2024</h3>
            </div>
            <h2 className='mb-2 font-semibold text-lg'>{data.category}</h2>
            <p>{data.description}</p>
            <div className='mt-4'>
            <button className='bg-slate-500 py-2 px-4'>Complete</button>
        </div>
        </div>
       
    </>
  )
}

export default NewTask
