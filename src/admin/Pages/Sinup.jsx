import React, {useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Sinup = () => {
    const navigate = useNavigate()
    
    const [SinupData, setSinupData] = useState({
        name : "",
        email : "",
        password: ""
    })
    const [Error, setError] = useState({})
    const [passwordshow, setpasswordshow] = useState("password")
   
    const emailregex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
   

    const handleChange = (e) =>{
        setSinupData({...SinupData, [e.target.name]: (e.target.value) })
    } 

    const handlepasswordshowornot = ()=>{
        if(passwordshow=== "password"){
           setpasswordshow("text");
        }else{
           setpasswordshow("password")
        }
     }

    const handleSubmit = () => {
        if(varify()){
            localStorage.setItem("InfinexAdminSignup", JSON.stringify(SinupData))

            setSinupData({
                name : "",
                email : "",
                password: ""
            })
            navigate("/login")
        }
    }


     const varify = () => {
        let localError = {}
        let valid = true;
        
        if(SinupData.name.length === 0){
            localError.name = "Name is required !"
            valid = false
         }else if(SinupData.name.length < 4 ){
            localError.name = "Name must be minimum 4 characters !"
            valid = false
         }

        if(SinupData.email.length === 0){
           localError.email = "Username is required !"
           valid = false
        }else if(!emailregex.test(SinupData.email)){
           localError.email = "Username must be [A-Z],[a-z],[0-9],[@, .]"
           valid = false
        }
  
        if(SinupData.password.length === 0){
           localError.password = "Password required"          
           valid = false
        }else if(SinupData.password.length < 8 ){
           localError.password = "Password must be 8 characters"
           valid = false
        }else if (!passwordregex.test(SinupData.password)){
           localError.password = "Use strong password"
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
                    <img className='login-header-image' src="/assets/img/team/Login-profile 2 .png" alt="" />
                    <h4 className='mt-3 font-weight-bold'>Register here</h4>
                </div>
                <div className="py-2 px-0">

                    <label htmlFor="" className='w-100 mt-4'>
                        <input type="text" className="form-control" placeholder='Name' name='name' onChange={handleChange}  value={SinupData.name}/>
                        {Error.name && <p className='form-text-error text-danger' >{Error.name}</p> }
                    </label>

                    <label htmlFor="" className='w-100 mt-4'>
                        <input type="text" className="form-control" placeholder='Username' name='email' onChange={handleChange}  value={SinupData.email}/>
                        {Error.email && <p className='form-text-error text-danger' >{Error.email}</p> }
                    </label>

                    <label className='w-100 mt-4 ' style={{position:"relative"}}>
                        <input type={passwordshow} placeholder='Password' className='form-control w-100' name='password' onChange={handleChange} value={SinupData.password} />
                        <span style={{position:"absolute", right:"10px", top:"5px", cursor:"pointer"}} onClick={handlepasswordshowornot} >{(passwordshow==="password"? <FaRegEyeSlash /> : <FaRegEye /> )}</span>
                        {Error.password && <p className='form-text-error text-danger' >{Error.password}</p> }
                    </label>
                    <label htmlFor="" className='w-100 mt-4'>
                        <button  className="light-btn btn font-weight-bold w-100 mt-1" onClick={handleSubmit}>Register</button>
                    </label>
                    <label htmlFor="" className='w-100 mt-4 text-center'>
                        Already have an account ? <Link to={"/login"}>Login</Link>    
                    </label>
                </div>   
            </div>
        </div>
    </>
  )
}

export default Sinup
