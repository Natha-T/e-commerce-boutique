import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch} from "react-redux";

import {addCart} from "../redux/productSlice";


function Producte(dataa) {
    
    const data = dataa.dataa
  


    console.log(data);


    return (
  
        <div className=' mt-36 flex flex-wrap mx-auto justify-center '>
         
 {data.map ((user) => {
  return( 
   <div  class="   shadow-md rounded-3xl p-2 mx-1 my-3   transform duration-500 hover:-translate-y-1 cursor-pointer">
    <div class="overflow-x-hidden rounded-2xl relative">
      <img class="h-40 rounded-2xl w-full object-cover" src={user.url}/>
      <button  class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
      <FaShoppingCart className='text-2xl h-6 w-6 group-hover:opacity-100 opacity-70'/>
      </button>
    </div>
    <div class="mt-4 pl-2 mb-2 flex justify-between ">
      <div>
        <p class="text-lg font-semibold  ">{user.name}</p>
        <p class="text-md text-gray-800 mt-0">{user.price} $</p>
      </div>
      <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    </div>
  </div>
)
 })}
        </div>
    )
}

export default Producte;
