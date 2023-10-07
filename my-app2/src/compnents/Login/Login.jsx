import React, { useContext, useState } from 'react'
import Style from  "./Login.module.css"
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { Link } from 'react-router-dom'
export default function Login() {
  let {setUserToken}=useContext(UserContext)
  let navigate=useNavigate();
   const [err,setError]=useState(null)
   const [isloading,setIsloading]=useState(false)
  async function  loginSubmit(vales){
    setIsloading(true)
     let{data}= await  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',vales).catch((error)=>{
        console.log(error)
        setError(error.response.data.message)
        setIsloading(false)
       }
       )
       if(data.message=='success'){
        setIsloading(false)
        localStorage.setItem('userToken',data.token);
        setUserToken(data.token)
        setError(false)
        navigate('/')
       }
  }
    let  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?`~]).{8,}$/;
   
        let x=Yup.object({
          email:Yup.string().email('Invalid email ').required('email is required '),
          password:Yup.string().matches(passwordRegex,'At least 8 characters,one uppercase,one lowercase,one digit').required('password is required'),
       
        })
  let formik=useFormik({
      initialValues:{
        email:'',
        password:''
      },
      //  validate,// validate values that i take from input 
      validationSchema:x,
      onSubmit:loginSubmit   // function i call when submit
  })
  return (
   <>

    <div className='container w-75 mx-auto py-5'>
    {err?<div className='alert alert-danger'>{err}</div>:" "}
      <h3>Login Now </h3>
    <form className='' onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input  value={formik.values.email} type='email' id='email' className='form-control mb-3' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.email&&formik.touched.email)? <div className='alert alert-danger'>{formik.errors.email}</div>:null}
      <label htmlFor="Password">Password</label>
      <input  value={formik.values.password} type='password' id='password' className='form-control mb-3' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.password&&formik.touched.password)? <div className='alert alert-danger'>{formik.errors.password}</div>:null}
      {
        isloading? <button className='spinner btn bg-main text-white'><i className=" fa-solid fa-spinner fa-spin "></i></button>:   <div><button disabled={!(formik.dirty&&formik.isValid)} className='btn bg-main text-white' type='submit'>Login</button> <Link className='text-decoration-none text-black' to="/register">Register</Link></div>
      }
    
     </form>
    </div>
   
   </>
  )
  }
