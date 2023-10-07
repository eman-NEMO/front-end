import React from 'react'
import Style from './Categories.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { RotatingLines } from 'react-loader-spinner'
export default function Categories() {


 async function getAllCategories(){
   let response= await axios.get('https://ecommerce.routemisr.com/api/v1/categories   ')
   return response
  }
  let {isLoading,isError,data}=useQuery('getCategories',getAllCategories,  {
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
           <div className={`  col-md-2 col-lg-4 col-sm-1  text-center `}>
            <div  className={`${Style.box} ${Style.roww}  m-2`}>
            <img src={elm.image} alt="" width={350} height={250} />
            <p className={ ` ${Style.text} text-main mt-2`}>{elm.name}</p>
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



