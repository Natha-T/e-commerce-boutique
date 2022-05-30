import React from 'react'
import fafasquad from '../img/fafasquad.jpg'
import fafasquad1 from '../img/fafasquad1.jpg'



function Presentation() {
    return (
        



<section className="text-gray-600 body-font">

  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> HustleGang vous presente sa marque de vetement street-wear 
        
      </h1>
      <p className="mb-8 leading-relaxed">Commandez dès maintenant sur notre site ecommerce street wear livraison rapide.Retrouvez nous également sur youtube ainsi que toute les plateforme de streaming du nouveaux a venir</p>


      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={fafasquad1}/>
    </div>
  </div>
</section>




    )
}

export default Presentation;
