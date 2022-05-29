import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './page/Home';
import { db } from './Firebase';
import { collection, doc, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore';
import Footer from './component/Footer';
import productSlice from './redux/productSlice';

import productReducer from './redux/productSlice';
import { useSelector, useDispatch } from 'react-redux'




function App() {


  const dispatch = useDispatch()

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




    <Footer/>

    </div>

  );

}

export default App;

