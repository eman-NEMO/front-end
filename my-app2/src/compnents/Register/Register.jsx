import React, { useState } from 'react'
import Style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Register() {
  let navigate=useNavigate();
   const [err,setError]=useState(null)
   const [isloading,setIsloading]=useState(false)
  async function  registerSubmit(vales){
    setIsloading(true)
     let{data}= await  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',vales).catch((error)=>{
        console.log(error)
        setError(error.response.data.message)
        setIsloading(false)
       }
       )
       if(data.message=='success'){
        setIsloading(false)
        setError(false)
        navigate('/login')
       }
  }
  // function validate (values){ // not using yup
  //     let errors={};

  //     if(!values.name){
  //       errors.name="name is required ";
  //     }
  //     else if(){
  //       etc ... with all variables 
  //     }
  // }
// using yup
    let  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?`~]).{8,}$/;
    let  phoneRegex = /^01[0125][0-9]{8}$/;
        let x=Yup.object({
          name:Yup.string().min(3,"min length is 3").max(10,'max length is 10').required('Name is required'),
          email:Yup.string().email('Invalid email ').required('email is required '),
          phone:Yup.string().matches(phoneRegex,'phone Not valid ').required('phone is required '),
          password:Yup.string().matches(passwordRegex,'At least 8 characters,one uppercase,one lowercase,one digit').required('password is required'),
          rePassword:Yup.string().oneOf([Yup.ref("password"),null],'password not matched ').required('rePassword id required ')
        
        })
  let formik=useFormik({
      initialValues:{
        name:'',
        phone:'',
        email:'',
        password:'',
        rePassword:'',

      },
      //  validate,// validate values that i take from input 
      validationSchema:x,
      onSubmit:registerSubmit   // function i call when submit
  })
  return (
   <>
    
    <div className='container w-75 mx-auto py-5'>
    {err?<div className='alert alert-danger'>{err}</div>:" "}
      <h3>Register Now </h3>
    <form className='' onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input  value={formik.values.name} type='text' id='name' className='form-control mb-3' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.name&&formik.touched.name)? <div className='alert alert-danger'>{formik.errors.name}</div>:null}
      <label htmlFor="email">Email</label>
      <input  value={formik.values.email} type='email' id='email' className='form-control mb-3' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.email&&formik.touched.email)? <div className='alert alert-danger'>{formik.errors.email}</div>:null}
      <label htmlFor="Password">Password</label>
      <input  value={formik.values.password} type='password' id='password' className='form-control mb-3' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.password&&formik.touched.password)? <div className='alert alert-danger'>{formik.errors.password}</div>:null}
      <label htmlFor="rePassword">rePassword</label>
      <input  value={formik.values.rePassword} type='password' id='rePassword' className='form-control mb-3' name='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.rePassword&&formik.touched.rePassword)? <div className='alert alert-danger'>{formik.errors.rePassword}</div>:null}
      <label htmlFor="phone">Phone</label>
      <input  value={formik.values.phone} type='tel' id='phone' className='form-control mb-3' name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.phone&&formik.touched.phone)? <div className='alert alert-danger'>{formik.errors.phone}</div>:null}
      {
        isloading? <button className='spinner btn bg-main text-white'><i className=" fa-solid fa-spinner fa-spin "></i></button>:   <button disabled={!(formik.dirty&&formik.isValid)} className='btn bg-main text-white' type='submit'>Register</button>
      }
    
     </form>
    </div>
   
   </>
  )
  }
