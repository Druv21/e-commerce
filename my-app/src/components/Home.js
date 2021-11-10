import React from 'react'
import sale from '../assets/sale.png'
import '../css/Products.css';
import Products from './Products'

function Home() {
    return (
        <>
        <div>
           <img className="sale_image" src={sale} alt="sale" />
        </div>
        <div>
            <Products/>
        </div>
        </>
    )
}

export default Home
