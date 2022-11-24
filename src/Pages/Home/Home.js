import React from 'react';
import Addvertise from './Addvertise';
import Categories from './Categories';
import HomeSlider from './HomeSlider';
import WhatWeOffer from './WhatWeOffer';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Categories></Categories>
            <Addvertise></Addvertise>
            <WhatWeOffer></WhatWeOffer>
        </div>
    );
};

export default Home;