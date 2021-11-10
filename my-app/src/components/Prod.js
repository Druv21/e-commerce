import React from 'react'
const Home = ({image,name,price}) => {
    return (
        <div className="product_container">
            <div className="abc">
            <p>{image}</p>
            <div className="abcd">
            <p>{name}</p>
            <p>{price}</p>
            <button type="button">Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default Home
