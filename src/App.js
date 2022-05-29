import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './page/Home';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import Footer from './component/Footer';




function App() {



 const [product, setProduct] = useState([]);


useEffect(() => {
  const colRef = collection(db, 'leproduit')
  
  getDocs(colRef)
  .then((snapshot) => {
    let book= []
    snapshot.docs.forEach((doc) => {
     book.push({... doc.data(), id: doc.id})
    })
   setProduct(book)
  
  
  })
  
  }, []);
   
  





    





  return (

<div className='bg-gray-200'>
   
    <Home product={product}/> 





    </div>

  );

}

export default App;

