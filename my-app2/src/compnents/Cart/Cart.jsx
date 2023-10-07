import React, { useContext, useEffect, useState } from 'react'
import Style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import { useQuery } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import PaymentInfo from '../PaymentInfo/PaymentInfo'
import Allorders from '../Allorders/Allorders'
import { RotatingLines } from 'react-loader-spinner'
export default function Cart() {
  let [cartEmpty,setCartempty]=useState(false)

   let {removeCartItem,UpdateProductCount,getLogedusercart,userId,setId}=useContext(CartContext)
   let [cartDetails,setCartDetails] =useState(null)
  
   let [cartDetail,setCartDetail] =useState(null)
   let [logedUserId,setLogedUserId] =useState(null)
 
     
  
  async function getCart() {
    try {
      let response = await getLogedusercart();
      console.log(response?.data);
  
      // Continue with your logic if the request was successful
       setLogedUserId(response?.data.data._id);
       setId(response?.data.data._id)

      console.log(userId);
  
      setCartDetails(response?.data.data.products);
      setCartDetail(response?.data.data);
    } catch (error) {
      // Handle the error here
      setCartempty(true)
      console.error("Error fetching cart data:", error);
      // You can also set an error state or show an error message to the user
    }
  
  }
  async function remove(id) {
    let response = await removeCartItem(id);
    // console.log(response?.data.data)
      setCartDetails(response?.data.data.products)
      setCartDetail(response?.data.data)
     
  }
  async function update(id,count) {
    let response = await UpdateProductCount(id,count);
    // console.log(response?.data.data.products)
      setCartDetails(response?.data.data.products)
      setCartDetail(response?.data.data)
  
  }
 
  // async function getLogedCart() {
  //   let response = await getLogedUserCart();
  //   //console.log(response?.data.data._id)
  //   setLogedUserId(response?.data.data._id)
  // }
 
  useEffect(()=>{
    getCart()
    
   // getLogedCart()
  },[])
  
  return (
    
   <>
 
 
    {cartEmpty?<h1>cart empty </h1>:
     <div className={`bg-main-light container mt-5`}>
     {cartDetails!==null?
  
        <div className=''>
           <div className='d-flex justify-content-between'> <h2 className='mt-5 mb-2' >Shop Cart:</h2>
           <Link to={`/PaymentInfo/${logedUserId}`}   className="text-decoration-none"> 
           <button className=' btn btn-success m-3 text-white p-3'> Online payment </button>

           
           </Link>
          
           </div>
            <h4 className='text-main mb-5'>Total Cart Price : {cartDetail.totalCartPrice}</h4>
         {cartDetails.map((elem)=><div key={elem.product.id}>
         
          <div className='row mt-6 border-bottom px-2 py-2' >
             <div className='col-md-10'>
                 <div className=' d-flex p-2 '>   <img src={elem.product.imageCover} className={Style.imgSize}></img>
                   <div className='p-4 mt-1'>
                     <h5 className='mt-1'>{elem.product.title.split(' ').slice(0,3).join()}</h5>
                     <p className='text-main'>Price : {elem.price}</p>
                   <div className={`d-flex cursor-pointer`}>  <i onClick={()=>remove(elem.product._id)} className={`${Style.iconn} text-main fa-regular fa-trash-can mt-2 `}></i> <p className={Style.delete}>Remove</p></div>
                   </div>
                 </div>
              
             </div>
             <div className='col-md-2 d-flex justify-content-center align-items-center '>
              <div className=''>
             
              <button onClick={()=>update(elem.product._id,elem.count+1)} className="border-Cart p-1 rounded-2">+</button>
               <span className='mx-2' >{elem.count}</span>
               {elem.count-1>0? <button onClick={()=>update(elem.product._id,elem.count-1)} className= "border-Cart p-1 rounded-2">-</button>:
               
               <button disabled={true} className= "border-Cart p-1 rounded-2">-</button>
               }
              
              </div>
 
             </div>
          </div>
         </div>)}
        </div>
      
      
      :<div className={Style.overlay}>
      <div className=" m-center d-flex justify-content-center  align-items-center"><div > <RotatingLines
     strokeColor="green"
     strokeWidth="5"
      animationDuration="0.75"
     width="96"
      visible={true}
      color={'text-main'}
/> </div></div>
     </div>}
     </div>
    }
   </>
  )
}
