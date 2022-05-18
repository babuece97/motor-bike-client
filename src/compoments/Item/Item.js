import React from 'react';
 //DESTRUCTING
//const Item = ({unit}) => {  
//const {name, picture, description}=unit;
const Item = (props) => {
 const { picture, name, description} = props.unit;
    return (
        <div>
            <img src={picture} alt=""/>
            <h1>{name}</h1>
            <h3>{description}</h3>
        </div>
    );
};

export default Item;