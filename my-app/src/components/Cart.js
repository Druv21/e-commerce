import React from 'react'
// import  from './ElectronicProd';
const Cart = (image,name,price) => {
    return (
        <>
        <h1>Welcome to the Cart</h1>
        <div>
            <div id="moved_item">
            <div className="product_container">
            <div className="boxes _align">
            {image}
            <h3>{name}</h3>
            <p className="price_style">Rs.{price}</p>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Cart
