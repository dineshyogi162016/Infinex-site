import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate()
    
    const [mail, setmail] = useState({
        email : ""
    })
    const [Error, setError] = useState({})
   
    const emailregex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const handleChange = (e) =>{
        setmail({...mail, [e.target.name]: (e.target.value) })
    } 


    const handleSubmit = () => {       

        if(varify()){

        }
    }


     const varify = () => {
        let localError = {}
        let valid = true;
  
        if(mail.email.length === 0){
           localError.email = "Email is required !"
           valid = false
        }else if(!emailregex.test(mail.email)){
           localError.email = "Email must be [A-Z],[a-z],[0-9],[@, .]"
           valid = false
        }
  
        setError(localError)
        return valid;
     }

    //  useEffect(() => {
    //     checkLogin()
    //  },[])
  return (
    <>
        <div className="Login-page">
            <div className="Login-form admin-radius shadow contaier col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11 mx-auto row p-0">
                <div className="login-header">
                    <img className='login-header-image' src="/assets/img/team/forgot-password.avif" alt="" />
                    <h4 className='mt-3 font-weight-bold'>Forgot Passsword</h4>
                </div>
                <div className="py-2 px-0">
                <label htmlFor="" className='w-100 mt-4'>
                    <input type="text" className="form-control" placeholder='Email address' name='email' onChange={handleChange}  value={mail.email}/>
                    {Error.email && <p className='form-text-error text-danger' >{Error.email}</p> }
                </label>

                <label htmlFor="" className='w-100 mt-4'>
                    <button  className="light-btn btn font-weight-bold w-100 mt-1" onClick={handleSubmit}>Send OTP</button>
                </label>
                <label htmlFor="" className='w-100 mt-4 text-center'>
                    Back to <Link to={"/login"}>Login</Link>    
                 </label>
                </div>   
            </div>
        </div>
    </>
  )
}

export default ForgotPassword
