import React from 'react';

const Item = ({unit}) => {
    const {name, picture, description}=unit;
    return (
        //Destructing
        <div>
            <img src={picture} alt=""/>
            <h5>{name}</h5>
            <h2>{description}</h2>
            

        </div>
    );
};

export default Item;