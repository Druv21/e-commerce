import React from 'react';
import './App.css';
import './css/Nav.css';
import './css/Home.css';
import './css/Cart.css';
import './css/Form.css';
import  Home from './components/Home';
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Form from "./components/Form";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
     <div className="App">
       <BrowserRouter>
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/cart' exact component={Cart} />
         <Route path='/orders' exact component={Orders} />
         <Route path='/form' exact component={Form} />
       </Switch>
       </BrowserRouter>
     </div>
  )
}


export default App;