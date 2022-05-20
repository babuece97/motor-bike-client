import React from 'react';
import './Item.css';
import { Link, useNavigate } from "react-router-dom";
//import UpdateItem from '../UpdateItem/UpdateItem';


 //DESTRUCTING
const Item = ({unit}) => {  
const {name, picture, description,id}=unit;
//const Item = ({item, setIsReload, isReload}) => {
  //  const { picture, name, description,id} = props.unit;
  const navigate = useNavigate()
const handleItemDetails =(id)=>{
    navigate(`/itemdetails/${id}`)
   }
    
 
    return (
        <div className="item">
            <img src={picture} alt=""/>
            <h4> Name {name}</h4>
            <h1>{description}</h1>
            <h5>Product ID {id}</h5>
            <Link to="/detail">
            <button onClick={()=>handleItemDetails(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 rounded">
            Details
           </button>
           {/* Update
           
           <UpdateItem setIsReload={setIsReload} isReload={isReload} id={unit.id}/> */}
        </Link>
        </div>
    );
};

export default Item;