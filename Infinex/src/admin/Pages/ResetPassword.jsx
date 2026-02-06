import React, {useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate()
    
    const [ResetPassword, setResetPassword] = useState({
        password: "",
        confirmpassword: ""
    })
    const [Error, setError] = useState({})
    const [passwordshow, setpasswordshow] = useState("password")
    const [confirmpassword, setconfirmpassword] = useState("password")
   
    const passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
   

    const handleChange = (e) =>{
        setResetPassword({...ResetPassword, [e.target.name]: (e.target.value) })
    } 

    const handleSubmit = () => {        

        if(varify()){

        }
    }


     const varify = () => {
        let localError = {}
        let valid = true;
  
  
        if(ResetPassword.password.length === 0){
           localError.password = "Password required"          
           valid = false
        }else if(ResetPassword.password.length < 8 ){
           localError.password = "Password must be 8 characters"
           valid = false
        }else if (!passwordregex.test(ResetPassword.password)){
           localError.password = "Not valid password"
           valid = false
        }
  
        if(ResetPassword.confirmpassword.length === 0){
           localError.confirmpassword = "confirmpassword is required !"
           valid = false
        }else if(ResetPassword.confirmpassword.length < 8 ){
            localError.confirmpassword = "confirmpassword must be 8 characters"
            valid = false
         }else if (!passwordregex.test(ResetPassword.confirmpassword)){
            localError.confirmpassword = "Not valid confirmpassword"
            valid = false
         }


        setError(localError)
        return valid;
     }

    //  useEffect(() => {
        
    //  },[])
  return (
    <>
        <div className="Login-page">
            <div className="Login-form admin-radius shadow contaier col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11 mx-auto row p-0">
                <div className="login-header">
                    <img className='login-header-image' src="/assets/img/team/reset-password.avif" alt="" />
                    <h4 className='mt-3 font-weight-bold'>Reset Password</h4>
                </div>
                <div className="py-2 px-0">

                    <label className='w-100 mt-4 ' style={{position:"relative"}}>
                        <input type={passwordshow} placeholder='Password' className='form-control w-100' name='password' onChange={handleChange} value={ResetPassword.password} />
                        <span style={{position:"absolute", right:"10px", top:"5px", cursor:"pointer"}} onClick={() => (passwordshow=== "password") ? setpasswordshow("text"): setpasswordshow("password")} >{(passwordshow==="password"? <FaRegEyeSlash /> : <FaRegEye /> )}</span>
                        {Error.password && <p className='form-text-error text-danger' >{Error.password}</p> }
                    </label>
                    <label className='w-100 mt-4 ' style={{position:"relative"}}>
                        <input type={confirmpassword} placeholder='Confirm Password' className='form-control w-100' name='confirmpassword' onChange={handleChange} value={ResetPassword.confirmpassword} />
                        <span style={{position:"absolute", right:"10px", top:"5px", cursor:"pointer"}} onClick={()=> (confirmpassword=== "password") ? setconfirmpassword("text"): setpasswordshow("password")} >{(confirmpassword==="password"? <FaRegEyeSlash /> : <FaRegEye /> )}</span>
                        {Error.confirmpassword && <p className='form-text-error text-danger' >{Error.confirmpassword}</p> }
                    </label>
                    

                <label htmlFor="" className='w-100 mt-4'>
                    <button  className="light-btn btn font-weight-bold w-100 mt-1" onClick={handleSubmit}>Reset Password</button>
                </label>
                <label htmlFor="" className='w-100 mt-2 text-center'>
                    <Link to={"/confirmOtp"} >Go Back</Link>    
                 </label>
                </div>   
            </div>
        </div>
    </>
  )
}

export default ResetPassword
