import { createSlice } from "@reduxjs/toolkit";
import React, { useState, useEffect } from 'react';

import { db } from '../Firebase';
import { collection, doc, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore';





const initialState = {
    produits : [],
    itemCount : 0,
    totalp : 0,
    loading :  null,
}


const FetchBlogs=async()=>{
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




    }
 











 
  


const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
       


    },
    extraReducers :
   
           
    
    {
        [FetchBlogs.pending] : (state, action) => {
           state.loading = true;
        },

        [FetchBlogs.fulfilled] : (state, action )=> {
            state.loading = false;
            state.product.produits = action.payload;
        },
    
    
        [FetchBlogs.rejected] : (state, action )=> {
            state.loading = "rejected"
           
        },


        
    },

});

export default productSlice.reducer;
export  const {addCart} = productSlice.actions;