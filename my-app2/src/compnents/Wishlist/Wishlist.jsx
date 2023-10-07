import React, { useContext ,useEffect,useState} from 'react'
import Style from './Wishlist.module.css'
import { CartContext } from '../../Context/CartContext'
import { RotatingLines } from 'react-loader-spinner'
import { ToastContainer, toast,  } from 'react-toastify'

export default function Wishlist(props) {
  let [wishEmpty,setWishempty]=useState(false)
  let [wishDetails,setwishDetails] =useState(null)
  let{getWishlistIitem,removeWishListItem,ChangeColor,addToCart, color,setColor,removedColor,setRemovedColor}=useContext(CartContext)
  function nottify(msg) {
    toast.success(`${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  function erorr() {
    toast.error(`Error ocurred `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
 
 
 
  async function getwishItems() {
    try {
      let response = await getWishlistIitem();
     // console.log(response?.data.data);
      setwishDetails(response?.data.data);

    } catch (error) {
      console.error("Error fetching cart data:", error);
      
    }
  
  }

  async function addProduct(productId) {
    let response = await addToCart(productId);
    if (response?.data.status === "success") {
     
      console.log("success");
      {
        nottify("successfully Added to cart")
      }
    }
    else{
      erorr()
    } 
  }
  async function remove(id) {
    let response = await removeWishListItem(id);

    const updatedColorArray = [...removedColor, id];
    setRemovedColor(updatedColorArray)
    console.log(removedColor,"from removed ");
   // setColor(response?.data)
    //console.log(color,"from wish list ")
    getwishItems()
     
  }


  useEffect(()=>{
    getwishItems()
  },[])
  return (
    <>


   
     <div className={`bg-main-light container mt-5`}>
     {wishDetails!==null?
  
        <div className=''>
          
          
         {wishDetails.map((elem)=><div>
          
          <div className='row mt-6 border-bottom px-2 py-2' >
             <div className='col-md-10'>
                 <div className=' d-flex p-2 '><img src={elem.imageCover} className={Style.imgSize}></img>
                   <div className='p-4 mt-1'>
                     <h5 className='mt-1'>{elem.title}</h5>
                     <p className='text-main'>Price : {elem.price}</p>
                   <div className={`d-flex cursor-pointer`}>  <i onClick={()=>remove(elem._id)} className={`${Style.iconn} text-main fa-regular fa-trash-can mt-2 `}></i> <p className={Style.delete}>Remove</p></div>
                   </div>
                 </div>
              
             </div>
             <div className='col-md-2 d-flex justify-content-center align-items-center '>
              <div className=''>
             
                     <button className='btn bg-main text-white' onClick={()=>addProduct(elem._id)}> Add To Cart </button>
              
              </div>
              <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
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

   </>
  )
}
