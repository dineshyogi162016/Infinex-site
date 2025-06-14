import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginRoute = (props) => {
  const {Component} = props;
  let navigate = useNavigate()

  
  useEffect(() => {
      const loginData = JSON.parse(localStorage.getItem("InfinexAdminLogin"))
  
      if(loginData){
          navigate("/dashboard")
      }

  },[])
  return (
    <>  
      <Component />
    </>
  )
}

export default LoginRoute
