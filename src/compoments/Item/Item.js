import React from 'react';
import './Item.css';
import { Link, useNavigate } from "react-router-dom";
//import UpdateItem from '../UpdateItem/UpdateItem';


 //DESTRUCTING
const Item = ({unit}) => {  
const {name,quantity,price, picture,supplier, description,id}=unit;
//const Item = ({item, setIsReload, isReload}) => {
  //  const { picture, name, description,id} = props.unit;
  const navigate = useNavigate()// Explain
const handleItemDetail =(id)=>{
    navigate(`/itemDetail/${id}`)
   }
    
 
    return (
        <div className="item">
            <img src={picture} alt=""/>
            <p class="text-2xl">Name {name}</p>
            <p class="text-2xl">Product ID {id}</p>
            <p class="text-2xl">Brand {supplier}</p>
            <p class="text-2xl">In stock {quantity}</p>
            <p class="text-2xl">Price {price} $</p>
            <p>{description}</p>
            
            <Link to="/itemDetail">
            <button onClick={()=>handleItemDetail(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 rounded">
            Details
           </button>
           {/* Update
           
           <UpdateItem setIsReload={setIsReload} isReload={isReload} id={unit.id}/> */}
        </Link>
        </div>
    );
};

export default Item;
{/* <Link to="/itemDetail"></Link> = press the button will hit "itemdetail" at browser later on this part goes to App.js routing part and looking for the path maching with "itemDetail" */}