import React from 'react';
import { UilBabyCarriage,UilClub,UilSwatchbook } from '@iconscout/react-unicons'


const WhatWeOffer = () => {
    return (
        <div className='my-16'>
            <div>
                <h1 className='text-center text-primary text-2xl font-bold'>What We Offer</h1>
            </div>
            <div className='mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='shadow-xl rounded-xl p-6 '>
                    <div className=' text-orange-400 h-20'>
                        <UilSwatchbook className='text-center w-full h-full'></UilSwatchbook>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-center my-3'>Sell with us and earn money </h1>
                        <p className='text-center'>You can sell your used furniture. Which one not important to your home.</p>
                    </div>
                </div>
                <div className='shadow-xl rounded-xl p-6 '>
                    <div className=' text-green-400 h-20'>
                        <UilClub className='text-center w-full h-full'></UilClub>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-center my-3'>Promotion </h1>
                        <p className='text-center'>Sell product and promotion for your business. </p>
                    </div>
                </div>
                <div className='shadow-xl rounded-xl p-6 '>
                    <div className=' text-blue-400 h-20'>
                        <UilBabyCarriage className='text-center w-full h-full'></UilBabyCarriage>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-center my-3'>Trusted Delivery</h1>
                        <p className='text-center'>Order and inform your location you will get your product in just time</p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default WhatWeOffer;