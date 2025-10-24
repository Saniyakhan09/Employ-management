import React from 'react'
import Createtask from '../../other/Createtask'
import Header from '../../other/Header'
import Alltask from '../../other/Alltask'

const AdminDashboard = (props) => {
  return (
    <>
      <Header changeUser={props.changeUser}/>
      <Createtask data={props.data}/>
      <Alltask data={props.data}/>
    </>
  )
}

export default AdminDashboard
