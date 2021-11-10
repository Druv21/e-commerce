import './App.css';
import './css/Nav.css';
import './css/Home.css';
import './css/Products.css';
import Products from './components/Products'
import  Nav from './components/Nav'
import  Home from './components/Home'


function App() {
  return (
     <div className="App">
       <Nav/>
       <Home/>
       <Products /> 
     </div>
  )
}


export default App;