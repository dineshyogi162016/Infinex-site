import React, { createContext, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

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
        }
        // else{
        //     navigate("/login")
        // }

    }

    const logOut = async() => {
      const response = await axios.post(`${REACT_APP_API_URL}/admin/logout`, {}, { withCredentials: true });

      if(response.data.success){
        alert(response.data.message)
      }
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
