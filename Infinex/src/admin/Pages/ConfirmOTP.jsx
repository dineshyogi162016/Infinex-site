import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const ConfirmOTP = () => {
    const navigate = useNavigate()
    
    const [otp_code, setotp_code] = useState({
        myotp_code : ""
    })
    const [Error, setError] = useState({})
   

    const handleChange = (e) =>{
        setotp_code({...otp_code, [e.target.name]: (e.target.value) })
    } 


    const handleSubmit = async() => {       

        if(varify()){
            try {
                const response = await axios.post(`${REACT_APP_API_URL}/admin/login`, otp_code , { withCredentials: true });
                if(response.data.success){
                    alert(response.data.message)
                    navigate("/dashboard")
                    // localStorage.setItem("LoginUserData", JSON.stringify(otp_code.LoginData))

                }else{
                    alert(response.data.message)
                    
                }

            } catch (error) {
                console.log("Error in Login API")
            }
        }
    }


     const varify = () => {
        let localError = {}
        let valid = true;
  
        if(otp_code.myotp_code.length === 0){
           localError.myotp_code = "otp_code is required !"
           valid = false
        }
  
        setError(localError)
        return valid;
     }

     console.log("otp_code : Dta : ", otp_code)
     
     const getUserData = () => {
        const userData = JSON.parse(localStorage.getItem('LoginUserData'))
        setotp_code({...otp_code, userData })
     }

     useEffect(() => {
       getUserData()
     },[])
  return (
    <>
        <div className="Login-page">
            <div className="Login-form admin-radius shadow contaier col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11 mx-auto row p-0">
                <div className="login-header">
                    <img className='login-header-image' src="/assets/img/team/otp_code.avif" alt="" />
                    <h4 className='mt-3 font-weight-bold'>OTP Authentication</h4>
                </div>
                <div className="py-2 px-0">
                <label htmlFor="" className='w-100 mt-4'>
                    <input type="text" className="form-control" placeholder='Enter OTP' name='myotp_code' onChange={handleChange}  value={otp_code.myotp_code}/>
                    {Error.myotp_code && <p className='form-text-error text-danger' >{Error.myotp_code}</p> }
                </label>

                <label htmlFor="" className='w-100 mt-4'>
                    <button  className="light-btn btn font-weight-bold w-100 mt-1" onClick={handleSubmit}>Login</button>
                </label>
                {/* <label htmlFor="" className='w-100 mt-4 text-center'>
                    if otp_code not recieve <Link to={"/forgotp_codeassword"}>Resend</Link>    
                 </label> */}
                <label htmlFor="" className='w-100 mt-2 text-center'>
                    <Link to={"/login"}>Go Back </Link>    
                 </label>
                </div>   
            </div>
        </div>
    </>
  )
}

export default ConfirmOTP
