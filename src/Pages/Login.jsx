import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../config/firebase/firebasemethods'

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate();

      const loginUserFromFirebase = async (data) =>{
        console.log(data);
        try {
            const userLogin = await loginUser({
                email: data.email,
                password: data.password,
            })
            console.log(userLogin);
            navigate(``);

        } catch (error) {
            console.error(error);
            
        } 
        
      }

  return (
    <>
    <h1 className='text-center m-3'>Login</h1>
    <form onSubmit={handleSubmit(loginUserFromFirebase)}>
    <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }}  className="form-label ">
      Email address:
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      aria-describedby="emailHelp"
      placeholder='Enter Your Email'
      {...register("email", { required: true })} /> <br />
      {errors.email && <span>This field is required</span>}
  </div>
  <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }} className="form-label">
      Password:
    </label>
    <input type="password" className="form-control" id="password" placeholder='Enter Your Password' {...register("password", { required: true })} /> 
    {errors.email && <span>This field is required</span>}
  </div>
  <br />
  <button style={{
    marginLeft: "10px"
  }} type="submit" className="btn btn-primary">
    Login
  </button>
    </form>
    </>
  )
}

export default Login