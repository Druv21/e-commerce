import React from 'react'
import Products from './ElectronicProducts';
function Filter() {
    return (
        <div>
               {arr.filter(product => product.price>1000).map(filteredproduct =>(
                 <li>
                   {filteredproduct.name}
                 </li>
                ))}
        </div>
    )
}

export default Filter

