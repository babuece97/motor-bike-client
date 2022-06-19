import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const UpdateItem = () => {
  const {id}=useParams();
  const [product, setProduct]=useState({});
  useEffect(()=>{
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setProduct(data));
  },[])
  return (
    <div>
      <h2>UpDATING ITEMS : ID:  {id} and NAMe: {product.name} , VENDor : {product.vendor}</h2>
    </div>
  );
};

export default UpdateItem;