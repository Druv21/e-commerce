import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="navbar">
           <img className="nav_image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
           
           <div className="search">
               <input className="search_input" placeholder="Search" type="text"/>
           </div>

           <div className="links">
               <div className="link">
                   <Link to='/orders'>
                   <a href="Orders.js">Your Orders</a>
                   </Link>
               </div>
               <div className="link">
                   <Link to='/form'>
                   <a href="Form.js">Sign in</a>
                   </Link>
               </div>

               <div className="link">
                   <Link to='/cart'>
                   {/* <a href="Cart.js">Your Cart</a> */}
                   <i className="fa fa-shopping-cart"></i>
                   </Link>
               </div>
           </div>
        </div>
    )
}

export default Nav

// import {Link} from 'react-router-dom';

// function Nav() {
//     return (
//         <div className="navbar">
//             <Link to="/">
//            <img className="nav_image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
//            </Link>