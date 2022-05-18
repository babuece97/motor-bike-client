import React from 'react';
import  { useEffect, useState } from 'react';
import Item from '../Item/Item';
//import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([])
    // current state and  update the state = initial value inside[]
    
    useEffect(() => { // This is HOOK ,inside the HOOK put two things calback fn or fn ,dependency list.IF dependency changes the 1st parameter or fn will be called 
        fetch('items.json')
            .then(res => res.json())
            .then(data => setProducts(data))
           // console.log( 'Im here', items);
    }, [])
    return ( 
        <div>    
            {
                products.map(unit => <Item 
                key={unit.id}
                unit={unit} 
                >
                </Item>)
                // after fetching data from fakedata.json, keep those at ARRAY named "products"
                //. Executing the MAP operation on this array , getting a new elements named "unit"  and all "unit" should goes into "Item " component.
            }  
        </div>
    );
};


export default Items;
