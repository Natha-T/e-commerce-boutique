/*
import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, doc, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore';



    const [product, setProduct] = useState([]);
    
    
    useEffect(
   () =>
   onSnapshot(collection(db, "leproduit"),(snapshot) =>
   setProduct(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}))),
 
 
   ), 
   []
 
 );
 

 const productes = product





export default Fetchi;







/*
<div className=' sm:flex  '>


   <div className='mt-8 sm:w-full place-self-center '>
       <div className='  content-center'>
       <h1 className='text-3xl font-medium'> HustleGang vous presente sa marque de vetement street-wear </h1>
       <a className='text-2xl font-mono italic'>Commandez dès maintenant sur notre site ecommerce street wear livraison rapide. </a>
       <a className='text-2xl font-mono italic '> Retrouvez nous également sur youtube ainsi que toute les plateforme de streaming du nouveaux a venir </a>
       <button className=' mt-4 flex sm:flex bg-blue-500 rounded-full w-32 h-12 font-bold items-center justify-center '>Commandez </button>
       </div>
   </div>


 <div className='visible sm:invisible '>
         <div>
             <h1> Retrouver nous sur les reseaux Twitter,TikTok,Instagram,Facebook</h1>
         </div>
     </div>

            <div className="invisible sm:mt-12 bg-white   sm:visible w-full  grid grid-rows-3 grid-flow-col gap-4 border-black border-2 border-double ">
  <div className="row-span-3 border-black border-2 border-double ..."> <img src={fafasquad1} className=" "/></div>

  <div className="col-span-2  place-self-center   ...">
      <h1 className='text-5xl font-bold font-serif   '>HustleGang StreetWear</h1>
      </div>

  <div className="min-w sm:row-span-2 col-span-2 border-black border-2 border-double..."> <img src={fafasquad} className="h-64 "/></div>
</div>


    

        </div>











*/