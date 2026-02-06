import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const LoginRoute = (props) => {
  const {Component} = props;
  let navigate = useNavigate()


  const LoginOrNot = async() =>{
      const response = await axios.get(`${REACT_APP_API_URL}/admin/checklogin`, {withCredentials: true})
      if(response.data.success){
          navigate("/dashboard")
      }
  }
  
  useEffect(() => {
      // const loginData = JSON.parse(localStorage.getItem("InfinexAdminLogin"))
  
      // if(loginData){
      //     navigate("/dashboard")
      // }

      LoginOrNot()

  },[])
  return (
    <>  
      <Component />
    </>
  )
}

export default LoginRoute
