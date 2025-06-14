import React, { createContext, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthContext = createContext()


export const useAuth = () => {
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {
    let navigate = useNavigate()

    const checkLogin = () => {
        const loginData = JSON.parse(localStorage.getItem("InfinexAdminLogin"))

        if(loginData){
            navigate("/dashboard")
        }else{
            navigate("/login")
        }

    }

    const logOut = () => {
      localStorage.removeItem("InfinexAdminLogin");
    }

    // useEffect(() =>{
    //     checkLogin()
    // })

  return (
    <AuthContext.Provider value={{checkLogin, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
