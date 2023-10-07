import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();



  let headers = {
    token: localStorage.getItem("userToken"),
  };
 
  function addToCart(x) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: x,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function addToWishList(x) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          productId: x,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }


  function getWishlistIitem(x) {
    return axios
      .get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
       
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  // function getLogedusercart() {
  
  //  return axios.get("https://ecommerce.routemisr.com/api/v1/cart",
  //  {
  //     headers: headers,
  //   }).then((response) => response)
  //   .catch((error) => error);
  // }

  function getLogedusercart() {
  
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: headers,
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error("Request failed with status: " + response.status);
      }
    
      return response;
    });
  }
  function removeCartItem(id) {
  
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
       headers: headers,
     }).then((response) => response)
     .catch((error) => error);
   }
   function removeWishListItem(id) {
  
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
       headers: headers,
     }).then((response) => response)
     .catch((error) => error);
   }
   function UpdateProductCount(id,count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, 
       {
         count:count
       },
      {
        headers: headers,
      }).then((response) => response)
      .catch((error) => error);
   }
 
  
   function onlinePayment(cartId,values){
   
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, 
       {
        shippingAddress:values
       },
       {
        headers: headers,
      }).then((response) => response)
      .catch((error) => error);
   }
   function getOrders(ID){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${ID}`, 
      ).then((response) => response)
      .catch((error) => error);
   }

 export  function ChangeColor(flag){
       let [color,setcolor]=useState(false)
       setcolor(flag)
     console.log(color,"fghjkl;'")
   }
export default function CartContextProvider(props) {
  let [userId,setId]=useState(0)
  let [color,setColor]=useState([])
  let [removedColor,setRemovedColor]=useState([])
  

//   let [CartId,setCartId]=useState('651c9b7121ce01d11a6e8439')
//  async  function getCartId(){
//   try{
//        let response=await getLogedusercart()
      
//        console.log(response?.data.data._id);
//        setCartId(response?.data.data._id);
//    }
//    catch(error){
//     console.error("Error fetching cart data:", error);
//       }
//    }
//   useEffect(()=>{
//     getCartId()
//   },[])


  return (
    <CartContext.Provider value={{removedColor,setRemovedColor,color,setColor,userId,setId,ChangeColor,addToWishList,removeWishListItem,getWishlistIitem, addToCart ,getLogedusercart,removeCartItem,UpdateProductCount,onlinePayment,getOrders}}>
      {props.children}
    </CartContext.Provider>
  );
}
