import React from 'react';
import  { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
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
         const handleModuleDelete =_id=>{
             const action =window.confirm('SURE , Wanna delete??');
             if(action){
                 console.log('DELETING MODULE bY iD', _id);
                 const url = `http://localhost:5000/product/${_id}`;
                 fetch(url,{
                     method:'DELETE'
                 })
                 .then(res=>res.json())
                 .then(data=>{
                     if(data.deletedCount>0){
                         console.log('SUCCESSFULLY MOCHE GELO');
                         const remaining = products.filter(product=>product._id!==_id);
                         setProducts(remaining);    
                     }
                 })

             }

         }
    
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
                    products.map(module => <li key={module._id}>{module.name}:::{module.vendor}
                    
                    <button  onClick={()=>handleModuleDelete(module._id)}type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                    <Link to ={`/updateItem/${module._id}`}> <button >Edit</button></Link>  
                     </li>)
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
