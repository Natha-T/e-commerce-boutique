import React from 'react'
import Feature from '../component/Feature';
import Footer from '../component/Footer';
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
             <Feature/>
             <Footer/>
        </div>
    )
}

export default Home;
