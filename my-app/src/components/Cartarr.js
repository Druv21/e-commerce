import React from 'react'
import Cart from './Cart'

function Cartarr() {
    return (
        <div className="Product_array">
        {
            arr1.map((arr1) => {
                return <Cart image={arr1.image} name={arr1.name} price={arr1.price}/>
            })
        }
    </div>
    )
}

export default Cartarr
