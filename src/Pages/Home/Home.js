import React from 'react';
import Categories from './Categories';
import HomeSlider from './HomeSlider';
import WhatWeOffer from './WhatWeOffer';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Categories></Categories>
            <WhatWeOffer></WhatWeOffer>
        </div>
    );
};

export default Home;