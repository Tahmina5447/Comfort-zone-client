import React from 'react';
import bed from '../../images/bed1.jpg'
import sofa from '../../images/sofa1.jpg'
import table from '../../images/table1.jpg'
import Sliderone from './Sliderone';


const HomeSlider = () => {
    const sliderData = [
        {
            img: bed,
            prev: 3,
            id: 1,
            next: 2

        },
        {
            img: sofa,
            prev: 1,
            id: 2,
            next: 3

        },
        {
            img: table,
            prev: 2,
            id: 3,
            next: 1

        }
    ]
    return (
        <div className=''>
            <div className="carousel w-full h-96 rounded-xl">
                {
                    sliderData.map(data => <Sliderone key={data.id} data={data}></Sliderone>)
                }
            </div>
        </div>
    );
};

export default HomeSlider;