import React from 'react'

const FailedTask = ({data}) => {
  return (
    <>
        <div className='bg-orange-700 flex-shrink-0 h-80 w-80 p-5 rounded '>
            <div className='flex mb-10 gap-4 justify-between'>
            <h3 className='bg-green-400 px-3 py-1'>Failed Task</h3>
            <h3>20 feb 2024</h3>
            </div>
            <h2 className='mb-2 font-semibold text-lg'>{data.category}</h2>
            <p>{data.description}</p>
            <div className='mt-4'>
            <button className='bg-blue-700 px-6 py-2'>Failed</button>

            </div>
        </div>
    </>
  )
}

export default FailedTask
