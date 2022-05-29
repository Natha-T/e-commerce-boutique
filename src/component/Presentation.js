import React from 'react'
import fafasquad from '../img/fafasquad.jpg'
import fafasquad1 from '../img/fafasquad1.jpg'



function Presentation() {
    return (
        <div className='flex   '>


   <div className='w-full place-self-center'>
       <div className='  content-center'>
       <h1 className='text-3xl font-medium'> HustleGang vous presente sa marque de vetement street-wear </h1>
       <a className='text-2xl font-mono italic'>Commandez dès maintenant sur notre site ecommerce street wear livraison rapide. </a>
       <a className='text-2xl font-mono italic '> Retrouvez nous également sur youtube ainsi que toute les plateforme de streaming du nouveaux a venir </a>
       <button className=' flex bg-blue-500 rounded-full w-32 h-12 font-bold items-center justify-center '>Commandez </button>
       </div>
   </div>




            <div className="w-full  grid grid-rows-3 grid-flow-col gap-4 border-black border-2 border-double ">
  <div className="row-span-3 border-black border-2 border-double ..."> <img src={fafasquad1} className=" "/></div>

  <div className="col-span-2  place-self-center   ...">
      <h1 className='text-5xl font-bold font-serif   '>HustleGang StreetWear</h1>
      </div>

  <div className="row-span-2 col-span-2 border-black border-2 border-double..."> <img src={fafasquad} className="h-64 "/></div>
</div>




        </div>
    )
}

export default Presentation;
