import React from 'react';
import  { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import Item from '../Item/Item';
//import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([]);
    // current state and  update the state = initial value inside[]
    useEffect(() => { // This is HOOK ,inside the HOOK put two things calback fn or fn ,dependency list.IF dependency changes the 1st parameter or fn will be called 
           fetch('http://localhost:5000/product')
                 .then(res => res.json())
                 .then(data => setProducts(data))
                // console.log( 'Im here', products);
         }, [])
    
    // FROM PREVIOUS PROJECT
    // useEffect(() => { // This is HOOK ,inside the HOOK put two things calback fn or fn ,dependency list.IF dependency changes the 1st parameter or fn will be called 
    //     fetch('items.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    //        // console.log( 'Im here', items);
    // }, [])
    return ( 
        <div>
            Total products:{products.length}
            <ul>
                {
                    products.map(product => <li>{product.name}:::{product.vendor} </li>)
                }
            </ul>
        </div>
        // --------FROM PREVIOUS PROJECT-----
//         <div className='container px-8 mx-auto'>
//         <h2 className='text-5xl text-center my-8 font-bold text-orange-600'>New Summer Offer In Our Showroom</h2>
//          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">  
//             {
//                 products.slice(0,6).map(unit => <Item 
//                 key={unit.id}
//                 unit={unit} 
//                 >
//                 </Item>)
//                 // after fetching data from fakedata.json, keep those at ARRAY named "products"
//                 //. Executing the MAP operation on this array , getting  new elements named "unit"  and all "unit" should goes into "Item " component.
//             }  
//             </div>
//         </div>
     );

};


export default Items;
