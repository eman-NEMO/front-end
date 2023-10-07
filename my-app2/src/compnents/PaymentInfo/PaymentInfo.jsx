import React, { useContext, useState } from 'react'
import Style from  "./PaymentInfo.module.css"
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
export default function PaymentInfo() {
  let {id}=useParams();
   localStorage.setItem('userId',id);
 
  console.log(id)
  let {onlinePayment}=useContext(CartContext)
 async  function  loginSubmit(vales){
           let response =await onlinePayment(id,vales)
             window.location.href=response?.data.session.url;
  }
  let  phoneRegex = /^01[0125][0-9]{8}$/;
        let x=Yup.object({
          details:Yup.string().required('details is required '),
          phone:Yup.string().matches(phoneRegex,' In Valid ').required('phone is required'),
          city:Yup.string().required('city is required'),
       
        })
  let formik=useFormik({
      initialValues:{
        details:'',
        phone:'',
        city:''
      },
      //  validate,// validate values that i take from input 
      validationSchema:x,
      onSubmit:loginSubmit   // function i call when submit
  })
  return (
   <>

    <div className='container w-75 mx-auto py-5'>
    <form className='' onSubmit={formik.handleSubmit}>
      <label htmlFor="details">Details</label>
      <input  value={formik.values.details} type='text' id='details' className='form-control mb-3' name='details' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.details&&formik.touched.details)? <div className='alert alert-danger'>{formik.errors.details}</div>:null}
      
      <label htmlFor="phone">Phone</label>
      <input  value={formik.values.phone} type='tle' id='phone' className='form-control mb-3' name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.phone&&formik.touched.phone)? <div className='alert alert-danger'>{formik.errors.phone}</div>:null}
     
      <label htmlFor="city">City</label>
      <input  value={formik.values.city} type='text' id='city' className='form-control mb-3' name='city' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {(formik.errors.city&&formik.touched.city)? <div className='alert alert-danger'>{formik.errors.city}</div>:null}
      {
         <div><button  className='btn bg-main text-white w-100 mt-3' type='submit'>Pay Now</button> </div>
      }
    
     </form>
    </div>
   
   </>
  )
  }
