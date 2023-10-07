import React, { useContext, useEffect, useState } from "react";
import Style from "./Product.module.css";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Product() {
  let { addToCart,addToWishList } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");

  function nottify(msg) {
    toast.success(`${msg}`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
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
  async function addproduct(productId) {
   
    let response = await addToCart(productId);
    if (response.data.status === "success") {
      console.log("success");
      {
        nottify("successfully Added to cart")
      }
    }
    else{
      erorr()
    } 
  }

  async function addwish(productId) {
    let response = await addToWishList(productId);
    if (response?.data.status === "success") {
      console.log("success");
      {
        nottify("successfully Added to wish List")
      }
    }
    else{
      erorr()
    } 
  }

  function getFeaturedProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  let { data, isLoading, isError, isFetching, refetch } = useQuery(
    "featuredProducts",
    getFeaturedProducts,

    {
      cacheTime: 3000, 
      
    }
  );
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredProducts = data?.data.data.filter((product) =>
  product.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <>
    
      {isLoading ? (
       <div className={Style.overlay}>
       <div className=" m-center d-flex justify-content-center  align-items-center"><div > <RotatingLines
      strokeColor="green"
      strokeWidth="5"
       animationDuration="0.75"
      width="96"
       visible={true}
       color={'text-main'}
 /> </div></div>
      </div>
      ) : (
        <div className=" container">
         <div className="d-flex justify-content-center ">
         <input className="form-control m-5 w-75 "
          type="text"
          placeholder="Search ...."
          value={searchQuery}
          onChange={handleInputChange} // Step 2: Listen for input changes
        />
         </div>
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="product col-md-2 p-3" key={product._id}>
                <Link
                  to={`/productdetails/${product._id}`}
                  className="text-decoration-none"
                >
                  <img src={product.imageCover} className="w-100"></img>
                  <span className="text-main">{product.category.name}</span>
                  <p>{product.title.split(" ").slice(0, 2).join()}</p>
                  <div className="d-flex justify-content-between">
                    <p>{product.price} EGP</p>

                    <p>
                      {" "}
                      <i className="fa fa-star rating-color m-1"></i>
                      {product.ratingsAverage}
                    </p>
                  </div>
                </Link>
                <div className="float-end"> <p  className={`${Style.heartt}`} onClick={()=>addwish(product._id)}>  <i className=" fa fa-heart ms-5"></i></p></div>
                <button
                  className="btn bg-main text-white my-2 w-100 "
                  onClick={() => addproduct(product._id)}
                >
                  Add to cart
               
                </button>
              
              </div>
            ))}
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
      )}
    </>
  );
}
