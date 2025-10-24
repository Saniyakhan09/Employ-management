import React , { useState }from 'react'

const Login = ({handling}) => {
    const[Email,setEmail] = useState('')
    const[Password,setPassword]=useState('')
    const click = (e)=>{
    e.preventDefault();
    handling(Email,Password)
setEmail("")
setPassword("")

}


  return (
    <>
    <div className='flex  items-center justify-center h-screen w-screen  '>
        <div className='border border-red-500'>
        <form className='flex flex-col items-center justify-center p-14'>
    <input required className='bg-black mb-4 rounded border-red-600 p-2' type="Email" value={Email} placeholder='Enter your Email' 
    onChange={(e)=>{
    setEmail(e.target.value)}}
    />
      <input required className='bg-black mb-4 rounded border-red-600 p-2' type="password" 
      value={Password}
      onChange={(e)=>{
      setPassword(e.target.value)}}
      placeholder='Enter your Passwordd'
       />

      <button className='bg-green-950 mt-3 rounded  h-10 w-28'
      onClick={click}>Submit</button>

    </form>
        </div>
  
    </div>
 
    </>
  )
}

export default Login

