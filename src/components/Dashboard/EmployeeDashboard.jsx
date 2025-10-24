import React from 'react'
import Header from '../../other/Header'
import Tasklist from '../../other/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <>
    <div className='bg-[#1c1c1c] h-screen w-screen'>

    <Header changeUser={props.changeUser} data = {props.data}/>
    <Tasklist data = {props.data}/>
    </div>
    </>
  )
}

export default EmployeeDashboard
