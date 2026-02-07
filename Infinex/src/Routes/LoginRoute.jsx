import React, { useEffect, useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from '../Utilities/ContextAPI/AuthProvider';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const LoginRoute = (props) => {
  const {Component} = props;
  const {isLogin, loading} = useAuth()
  let navigate = useNavigate()

  if (loading) return null;

  if (isLogin) {
    return <Navigate to="/dashboard" replace />;
  }


  // useEffect(() => {
  //     // const loginData = JSON.parse(localStorage.getItem("InfinexAdminLogin"))
  
  //     // if(loginData){
  //     //     navigate("/dashboard")
  //     // }


  //     const checkAuth = async () => {
  //       try {
  //           const response = await axios.get(`${REACT_APP_API_URL}/admin/checklogin`, { withCredentials: true });
  //           if (response.data.success) {
  //               navigate("/dashboard");
  //           }
  //       } catch (error) {
  //           navigate("/dashboard");
  //       }
  //     };

  //     checkAuth();

  // },[navigate])

  return (
    <>  
      <Component />
    </>
  )
}

export default LoginRoute
