import React from 'react';
import { useState } from 'react';
const Home = ({image,name,price}) => {
    const [like,setLike] = useState(0);
    const store= () =>{
        setLike(like+1);
    }
    return (
        <div className="product_container">
            <div className="boxes _align">
            {image}
            <h3>{name}</h3>
            <p className="price_style">Rs.{price}</p>
            <button className="btn add_to_cart" onClick={()=>{
                alert("Item added to cart successfully")
            }} type="button">Add to Cart</button>
            <div>{like}
            <button className="btn" onClick={store}>Like</button>
            </div>
            </div>
        </div>
    )
}
export default Home
