import React, { useEffect } from 'react'
import Style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Query, useQuery } from 'react-query';
import Slider from "react-slick";
import {Helmet} from "react-helmet";
export default function ProductDetails() {

  let prams=useParams();
  //console.log(id)
   function getProductDetails(id){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      
  }
     
  let {isLoading , isError ,data}=useQuery('productDetails',()=>getProductDetails(prams.id))
  console.log(data?.data.data)

    
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll:1,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 1200,
 
    
  };
 
  return (
   <>
   {
     <Helmet>
     <meta charSet="utf-8" />
     <title>{data?.data.data.title}</title>
    
 </Helmet>
   }
   {data?.data.data?<div className='container'>
    <div className='row align-items-center'>
      <div className='col-md-4 mt-5'>
   
      <Slider {...settings}>
        {data?.data.data.images.map((elem)=>   <img src={elem} className='w-100' alt="" />
        )}
        </Slider>
      </div>
      <div className='col-md-8 p-3'>
      <h2>{data?.data.data.title} </h2>
      <p className='mt-4'>{data?.data.data.description} </p>
      <h5 className='mt-4'>{data?.data.data.category.name} </h5>
      <div className='d-flex justify-content-between mt-3'>   <h5> price : {data?.data.data.price} EGP</h5>
      <p> <i className='fa fa-star m-2 rating-color'></i>{data?.data.data.ratingsAverage} </p>
      </div>
      <button className='btn bg-main text-white w-100'> Add to Cart </button>
      </div>
    </div>
   </div> :''}
   
   </>
  )
}
