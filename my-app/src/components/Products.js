import '../css/Prod.css'
import Prod from './Prod';
import iphone from '../assets/iphone.png';
import airpod from '../assets/airpod.png';
import ipad from '../assets/ipad.png';
import redmi from '../assets/redmi.png';
const Products = () => {
    const arr = [
    {
        image: <img src={iphone} alt="Iphone" height={200} width={200} />,
        name: "Apple I-Phone",
        price: "Rs.55,000"
    },
    {
        image: <img src={airpod} alt="Airpod" height={200} width={200} />,
        name: "AirPods",
        price: "Rs.450"
    },
    {
        image: <img src={ipad} alt="Ipad" height={200} width={200} />,
        name: "Ipad",
        price: "Rs.44000"
    },
    {
        image: <img src={redmi} alt="Redmi" height={200} width={200} />,
        name: "redmi phone",
        price: "Rs.8000"
    }
    ]
return(
    <div className="Product_array">
        {
            arr.map((arr) => {
                return <Prod image={arr.image} name={arr.name} price={arr.price} />
            })
        }
    </div>
    )
}

export default Products;