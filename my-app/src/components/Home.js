import React from 'react'
import sale from '../assets/sale.png'
import '../css/ElectronicProducts.css';
import ElectronicProducts from './ElectronicProducts';
import Nav from './Nav'

function Home() {
    return (
        <>
        <Nav/>
        <div>
           <img className="sale_image" src={sale} alt="sale" />
        </div>
        <div className="full_home">
              <ElectronicProducts/>

        </div>
        </>
    )
}

export default Home
