import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../Home/Home';
import ManageItems from '../ManageItems/ManageItems';

const ItemDetail = () => {
    const [item, setitem] = useState({})
    const {itemid} = useParams()
   
    useEffect(()=>{
        // fetch(`https://limitless-caverns-64590.herokuapp.com/item/${itemid}`)
        fetch ('/items.json')
        .then(response =>response.json())
        .then(data=> setitem(data))
    },[])

    console.log(item)
    return (
        <div className='w-96 mx-auto mt-16'>
            <div class="p-16 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
           <img src={item.picture} alt=""/>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
      </div>
       
       <div>
           {/* FOR UPDATE THE RESTOCK */}
       <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
      > <p class="text-2xl"> Update the restock</p></label
    >
    <input
      type="number"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleNumber0"
      placeholder="Number of Qs to update the restock"
    />
  </div>
</div>
           <button className='focus:outline-none mt-2 text-white bg-pink-400 hover:bg-yellow-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900' >Re-stock</button>
         </div>
       <div> <button className='focus:outline-none mt-2 text-white bg-red-400 hover:bg-yellow-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900' >Delivered</button></div>
       <Link to='/manageitems' elemement={<ManageItems />}>
       <div> <button className='focus:outline-none mt-2 text-white bg-blue-400 hover:bg-yellow-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900' >Manage Inventories</button></div></Link>
       <Link to='/' elemement={<Home />}>
       <button className='focus:outline-none mt-2 text-white bg-green-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900' >Back to home page</button>
       </Link>
        </div>
        
    );
};

export default ItemDetail;