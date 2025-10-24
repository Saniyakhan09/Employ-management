import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorge, setLocalstorage } from '../utils/LocalStorage'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

const[userData,setUserData] = useState(null)

useEffect(() => {
    setLocalstorage()
    const{employees} = getLocalstorge()
    setUserData(employees)
},[])


  return (
    <>
    <AuthContext.Provider value={[userData,setUserData]}>
    {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
