import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const AuthContext = createContext()



export const useAuth = () => {
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);

    let navigate = useNavigate()

    // const checkLogin = () => {
    //     const loginData = JSON.parse(localStorage.getItem("InfinexAdminLogin"))

    //     if(loginData){
    //         navigate("/dashboard")
    //     }
    //     // else{
    //     //     navigate("/login")
    //     // }

    // }

    const logOut = async() => {
      const response = await axios.post(`${REACT_APP_API_URL}/admin/logout`, {}, { withCredentials: true });

      if(response.data.success){
        navigate("/login")
        alert(response.data.message)
      }
    }

  
    useEffect(() => {

      const check = async () => {
        try {
          const res = await axios.get(
            `${REACT_APP_API_URL}/admin/checklogin`,
            { withCredentials: true }
          );

          setIsLogin(res.data.success === true);
          // setIsLogin(res.data.success);
        } catch (e) {
          setIsLogin(false);
        } finally {
          setLoading(false);
        }
      };

      check();

    }, []);

    const loginSuccess = () => setIsLogin(true);
    const logoutSuccess = () => setIsLogin(false);


  return (
    <AuthContext.Provider value={{isLogin, loading, loginSuccess, logoutSuccess, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
