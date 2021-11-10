import React from 'react'

function Nav() {
    return (
        <div className="navbar">
           <img className="nav_image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
           
           <div className="search">
               <input className="search_input" placeholder="Search" type="text"/>
           </div>

           <div className="links">
               <div className="link">
                   <a href="Orders.js">Your Orders</a>
               </div>

               <div className="link">
                   <a href="Cart.js">Your Cart</a>
               </div>
           </div>
        </div>
    )
}

export default Nav
