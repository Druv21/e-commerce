import React from 'react';
//import Cart from './Cart';
import { useState } from 'react';
const Home = ({image,name,price}) => {
    let arr1=[];
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
                alert("Item added to cart successfully");
                // let cart_item = document.getElementById("moved_item");
                // //document.write({image},{name},{price});
                arr1.push(image={image}, name={name}, price={price});
            }} type="button">Add to Cart</button>
            <div>{like}
            <button className="btn" onClick={store}>Like</button>
            </div>
            </div>
        </div>
    )
}
export default Home
