// import React from 'react'

// function Header(props) {
//   const logOut =  ()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')

//     // window.location.reload()
//   }
//   return (
//     <>

//       <div className='flex items-center justify-between m-10'>
//         <h1 className='font-semibold text-xl'>Hello <br /> <span className='font-bold text-2xl'>User 🫡</span></h1>
//         <button onClick={logOut} className='bg-green-500 font-medium px-2 py-1 rounded-sm text-lg'>Log Out</button>
//       </div>
//     </>
//   )
// }

// export default Header

import React from "react";

function Header(props) {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload()
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-10 bg-gray-100 rounded-md shadow-md">
      <h1 className="font-semibold text-xl text-black text-center md:text-left">
        Hello <br />
        <span className="font-bold text-black text-2xl">
          {props.userName || "User"} 🫡
        </span>
      </h1>
      <button
        onClick={logOut}
        className="bg-green-500 font-medium px-4 py-2 rounded-sm text-lg hover:bg-green-600 transition-all"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
