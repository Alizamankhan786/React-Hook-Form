import React from 'react'
import { useForm } from "react-hook-form"

const Register = () => {

  // const { register, handleSubmit } = useForm()
  // const onSubmit = (data) => console.log(data)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can replace this with your actual registration API call.
    alert('User Registered Successfully!');
  };



  return (
    <>
    <h1 className='text-center m-3'>Register</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }}  className="form-label ">
     FirstName:
    </label>
    <input
      type="text"
      className="form-control"
      aria-describedby="emailHelp"
      placeholder='Enter Your FirstName'
      {...register("firstName", { required: true, maxLength: 20 })} /> <br />
  </div>
    <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }}  className="form-label ">
    LastName:
    </label>
    <input
      type="text"
      className="form-control"
      aria-describedby="emailHelp"
      placeholder='Enter Your LastName'
      {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br />
  </div>
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
  </div>
  <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }} className="form-label">
      Password:
    </label>
    <input type="password" className="form-control" id="password" placeholder='Enter Your Password' {...register("password", { required: true })} /> 
  </div>
  <br />
  <button style={{
    marginLeft: "10px"
  }} type="submit" className="btn btn-primary">
  Register
  </button>
    </form>
    </>
  )
}

export default Register