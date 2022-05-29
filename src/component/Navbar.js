import React from 'react'
import hustlegang from '../img/hustlegang.JPG'
import { FaShoppingCart, FaUser } from 'react-icons/fa';



function Navbar() {
    return (
        <div className="flex fixed justify-between bg-gray-700  ...">

        <div className="flex   h-14 ...">
          <img src={hustlegang}  className='   rounded-full  lg:w-16 lg:h-14' />
        </div>


        <div className="flex justify-center h-14 text-center ">
         <nav className='space-x-4 text-2xl font '>
           
            <h1>Hustle Gang StreetWear</h1>

         </nav>
        </div>


        <div className="flex mr-10  space-x-4 ...">
       
       <FaUser className='text-2xl'/>
       <FaShoppingCart className='text-2xl'/>
        </div>

      </div>
    )
}

export default Navbar;

