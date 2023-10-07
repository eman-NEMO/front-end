import React from 'react'
import Style from './Footer.module.css'
import img from "../../Assets/images/download.png"
import img2 from "../../Assets/images/appstore.png"

export default function Footer() {
  return (
   <>
   
   <footer className='py-5 bg-main-light mt-4'>
        <div className='container'>
          <h1>Get freshCart App </h1>
          <p>We will send you a link open it on your phone to download the app</p>
           <div className='row'>
            <div className="col-md-9">
              <input type="text" className='form-control' placeholder='Email ' />
            </div>
            <div className="col-md-3">
              <button className='btn bg-main text-white'>Share App Link </button>
            </div>

              <div className='row mt-4'>
              <div className='col-md-6'>
          <div className='w-75 d-flex'>    <h6 className='m-1'>Payment pattern</h6>
              <img src={img} alt=""  className='w-25'/></div>
            </div>

            <div className='col-md-6 d-flex'>
             <div className='w-75 d-flex'> <h6 className='m-2'>Get delivers with fresh Cart </h6>
              <img src={img2} alt=""  className='w-25'/></div>
              
            </div>
           </div>
              </div>
       
        </div>
     </footer>
   </>
  )
}
