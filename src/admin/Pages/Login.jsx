import React, { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../Utilities/ContextAPI/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const {checkLogin} = useAuth()
    const navigate = useNavigate()
    
    const [LoginData, setLoginData] = useState({
        email : "",
        password: ""
    })
    const [Error, setError] = useState({})
    const [passwordshow, setpasswordshow] = useState("password")
   
    const emailregex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
   

    const handleChange = (e) =>{
        setLoginData({...LoginData, [e.target.name]: (e.target.value) })
    } 

    const handlepasswordshowornot = ()=>{
        if(passwordshow=== "password"){
           setpasswordshow("text");
        }else{
           setpasswordshow("password")
        }
     }

    const handleSubmit = () => {
        const signupData = JSON.parse(localStorage.getItem("InfinexAdminSignup"))
        

        if(varify()){

            if(signupData.email !== LoginData.email){
                alert("User not found")
                
            }else if(signupData.password !== LoginData.password){
                alert("Wrong password !")
            }else{
                localStorage.setItem("InfinexAdminLogin", JSON.stringify(LoginData))
        
                setLoginData({
                    email : "",
                    password: ""
                })
                alert("Login Success")
                navigate("/dashboard")
            }
        }
    }


     const varify = () => {
        let localError = {}
        let valid = true;
  
        if(LoginData.email.length === 0){
           localError.email = "Username is required !"
           valid = false
        }else if(!emailregex.test(LoginData.email)){
           localError.email = "Username must be [A-Z],[a-z],[0-9],[@, .]"
           valid = false
        }
  
        if(LoginData.password.length === 0){
           localError.password = "Password required"          
           valid = false
        }else if(LoginData.password.length < 8 ){
           localError.password = "Password must be 8 characters"
           valid = false
        }else if (!passwordregex.test(LoginData.password)){
           localError.password = "Not valid password"
           valid = false
        }
  
        setError(localError)
        return valid;
     }

    useEffect(() => {
        checkLogin();
    }, [checkLogin]);
      
  return (
    <>
        <div className="Login-page">
            <div className="Login-form admin-radius shadow contaier col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11 mx-auto row p-0">
                <div className="login-header">
                    <img className='login-header-image' src="/assets/img/team/Login-profile 3 .png" alt="" />
                    <h4 className='mt-3 font-weight-bold'>Login here</h4>
                </div>
                <div className="py-2 px-0">
                <label htmlFor="" className='w-100 mt-4'>
                    <input type="text" className="form-control" placeholder='Username' name='email' onChange={handleChange}  value={LoginData.email}/>
                    {Error.email && <p className='form-text-error text-danger' >{Error.email}</p> }
                </label>

                <label className='w-100 mt-4 ' style={{position:"relative"}}>
                    <input type={passwordshow} placeholder='Password' className='form-control w-100' name='password' onChange={handleChange} value={LoginData.password} />
                    <span style={{position:"absolute", right:"10px", top:"5px", cursor:"pointer"}} onClick={handlepasswordshowornot} >{(passwordshow==="password"? <FaRegEyeSlash /> : <FaRegEye /> )}</span>
                    {Error.password && <p className='form-text-error text-danger' >{Error.password}</p> }
                </label>
                <label htmlFor="" className='w-100 mt-4'>
                    <button  className="light-btn btn font-weight-bold w-100 mt-1" onClick={handleSubmit}>Login</button>
                </label>
                <label htmlFor="" className='w-100 mt-4 text-center'>
                    Don't have an account ? <Link to={"/signup"}>Register</Link>    
                 </label>
                <label htmlFor="" className='w-100 mt-2 text-center'>
                    <Link to={"/forgotpassword"}>Forgot Password</Link>    
                 </label>
                </div>   
            </div>
        </div>
    </>
  )
}

export default Login
