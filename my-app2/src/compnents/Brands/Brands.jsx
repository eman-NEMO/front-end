import React from 'react'
import Style from './Brands.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { RotatingLines } from 'react-loader-spinner'
export default function Brands() {


 async function getAllBrands(){
   let response= await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
   return response
  }
  let {isLoading,isError,data}=useQuery('getBrands',getAllBrands,  {
    cacheTime: 3000, //    بتحكم في وقت الكاش
    // refetchOnMount:false     بقلل الريكويستات اللي رايحه علي السيرفر
   // staleTime:3000             // عايز الداتا القديمه تفضل معروضه اد ايه
    //refetchInterval:3000            كل اد ايه يعمل ري فيتش
    // enabled:false    ممكن نستخدمها مع refetch لما ادوس علي زرار اجيب الداتا
  })
    console.log(data?.data.data)
  return (
   <>
  
     <div className='container'>
     {data?.data.data?<div className={`row text-center`}>
           {data?.data.data.map((elm)=>
           <div className={`  col-md-3   text-center `} >
            <div  className={`${Style.box} ${Style.roww}   m-3`}>
            <img src={elm.image} alt="" className='w-100 ' />
            <p className=' mt-2'>{elm.name}</p>
            </div>
               
                
             </div>
           )}
            
        </div>:<div className={Style.overlay}>
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
   
   </>
  )
}
