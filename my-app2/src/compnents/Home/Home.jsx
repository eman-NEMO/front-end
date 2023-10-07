import React from 'react'
import Style from './Home.module.css'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CategorySlider from'../CategorySlider/CategorySlider'
import MainSlider  from "../MainSlider/MainSlider"
import { ToastContainer } from 'react-toastify'
export default function Home() {
  return (
  <>

  <MainSlider/>
  <CategorySlider/>
  <FeaturedProducts/> 
  
  </>
   
   
  )
}
