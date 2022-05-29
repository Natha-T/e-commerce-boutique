import React from 'react'
import Navbar from '../component/Navbar';
import Presentation from '../component/Presentation';
import Producte from '../component/Producte';

function Home(product) {
    const data = product.product

    return (
        <div className=''>
            
           
            <Navbar/>
            <Presentation/>
             <Producte  dataa={data}/>
        </div>
    )
}

export default Home;
