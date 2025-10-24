import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const[user,setUser] = useState(null)
  const[loggedInUser,setloggedInuser] = useState(null)
  const [userData,setUserData]= useContext(AuthContext)

useEffect(()=>{
  const logged = localStorage.getItem('loggedInUser')

  if(logged){
    const userData = JSON.parse(logged)
    setUser(userData.role)
    setloggedInuser(userData.data)
  }

},[])

const handling = (Email,password)=>{
  if(Email === "admin@example.com"&& password==="123" ){
   setUser('Admin')
   localStorage.setItem('loggedInUser',JSON.stringify({role:"Admin"}));
  }
else if(userData){
 const employees =  userData.find((e)=>
    Email === e.email && password === e.password)
  if(employees){
    setUser('Employee')
    setloggedInuser(employees);
    localStorage.setItem('loggedInUser',JSON.stringify({role:"Employee",data:employees}))
  }
}
  else{
    alert("Invalid Credential")

  }
}
  return (
    <>
    {!user ?<Login handling={handling}/> :'' }
    {user =='Admin'? <AdminDashboard changeUser={setUser}/> : (user =="Employee"?<EmployeeDashboard changeUser={setUser} data={loggedInUser}/>: null)}
    </>
  )
}

export default App
