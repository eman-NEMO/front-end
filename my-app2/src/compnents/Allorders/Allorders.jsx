import React, { useContext, useEffect,useState } from 'react'
import Style from './Allorders.module.css'
import { CartContext } from '../../Context/CartContext'
import axios from 'axios';
import { useQueries, useQuery } from 'react-query';
export default function Allorders(props) {
 

   let id=localStorage.getItem('userId');

   function getOrders(id){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
   }

   let {data,isError,isLoading}=useQuery('getorders',getOrders)
   console.log(data)
   console.log(id)
  return (
   <>
 
      <div className='d-flex justify-content-center align-items-center'>
        <div className={`text-main ${Style.delvery}`}>
          <p>Successful  payment method  Order will delivered soon</p>
        </div>
      </div>
   
   </>
  )

}