import React from 'react';
import Culture from '../Culture/Culture';
import SocialMedia from '../SocialMedia/SocialMedia';
import Carusal from '../Banner/Banner';
import Items from '../Items /Items';

const Home = () => {
    return (
        <div>
            <Carusal></Carusal>
            <Items></Items>
            <Culture></Culture>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Home;