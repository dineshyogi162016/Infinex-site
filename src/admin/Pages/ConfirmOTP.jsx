import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ConfirmOTP = () => {
    const navigate = useNavigate()
    
    const [otp, setotp] = useState({
        myotp : ""
    })
    const [Error, setError] = useState({})
   

    const handleChange = (e) =>{
        setotp({...otp, [e.target.name]: (e.target.value) })
    } 


    const handleSubmit = () => {       

        if(varify()){

        }
    }


     const varify = () => {
        let localError = {}
        let valid = true;
  
        if(otp.myotp.length === 0){
           localError.myotp = "otp is required !"
           valid = false
        }
  
        setError(localError)
        return valid;
     }

    //  useEffect(() => {
    //     
    //  },[])
  return (
    <>
        <div className="Login-page">
            <div className="Login-form admin-radius shadow contaier col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11 mx-auto row p-0">
                <div className="login-header">
                    <img className='login-header-image' src="/assets/img/team/otp.avif" alt="" />
                    <h4 className='mt-3 font-weight-bold'>OTP Confirmation</h4>
                </div>
                <div className="py-2 px-0">
                <label htmlFor="" className='w-100 mt-4'>
                    <input type="text" className="form-control" placeholder='Enter OTP' name='myotp' onChange={handleChange}  value={otp.myotp}/>
                    {Error.myotp && <p className='form-text-error text-danger' >{Error.myotp}</p> }
                </label>

                <label htmlFor="" className='w-100 mt-4'>
                    <button  className="light-btn btn font-weight-bold w-100 mt-1" onClick={handleSubmit}>Send OTP</button>
                </label>
                <label htmlFor="" className='w-100 mt-4 text-center'>
                    if OTP not recieve <Link to={"/forgotpassword"}>Resend</Link>    
                 </label>
                <label htmlFor="" className='w-100 mt-2 text-center'>
                    <Link to={"/forgotpassword"}>Go Back </Link>    
                 </label>
                </div>   
            </div>
        </div>
    </>
  )
}

export default ConfirmOTP
