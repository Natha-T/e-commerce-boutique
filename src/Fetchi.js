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


*/