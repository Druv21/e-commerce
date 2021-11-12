import '../css/ElectronicProd.css';
import ElectronicProd from './ElectronicProd';
import iphone from '../assets/iphone.png';
import airpod from '../assets/airpod.png';
import ipad from '../assets/ipad.png';
import redmi from '../assets/redmi.png';
import oneplus from '../assets/oneplus.png';
import sonytv from '../assets/sonytv.png';
import realmetv from '../assets/realmetv.jpg';
import lgtv from '../assets/lgtv.png';
import tshirt from '../assets/tshirt.png';
import shirt from '../assets/shirt.png';
const Products = () => {
    const arr = [
    {
        image: <img src={iphone} alt="Iphone" height={200} width={200} />,
        name: "Apple I-Phone",
        price: 55000,
        index: 0     
    },
    {
        image: <img src={airpod} alt="Airpod" height={200} width={200} />,
        name: "AirPods",
        price: 850,
        index: 1
    },
    {
        image: <img src={ipad} alt="Ipad" height={200} width={200} />,
        name: "Ipad",
        price: 44000,
        index: 2
    },
    {
        image: <img src={redmi} alt="Redmi" height={200} width={200} />,
        name: "Redmi phone",
        price: 8000,
        index: 3
    },
    {
        image: <img src={oneplus} alt="Oneplus" height={200} width={200} />,
        name: "One Plus Phone",
        price: 25000,
        index: 4
    },
    {
        image: <img src={sonytv} alt="Sony" height={200} width={200} />,
        name: "Sony TV",
        price: 35000,
        index: 5
    },
    {
        image: <img src={realmetv} alt="Realme" height={200} width={200} />,
        name: "Realme TV",
        price: 20000,
        index: 6
    },
    {
        image: <img src={lgtv} alt="LG" height={200} width={200} />,
        name: "LG TV",
        price: 35000,
        index: 7
    },
    {
        image: <img src={tshirt} alt="Tshirt" height={200} width={200} />,
        name: "T-shirt",
        price: 500,
        index: 8
    },
    {
        image: <img src={shirt} alt="Shirt" height={200} width={200} />,
        name: "Shirt",
        price: 800,
        index: 9
    }
]
return(
    <div className="Product_array">
        {
            arr.map((arr) => {
                return <ElectronicProd image={arr.image} name={arr.name} price={arr.price} index={arr.index}/>
            })
        }
    </div>
    )
    }
export default Products;