import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css'

const Sliderone = ({ data }) => {
    const { img, id, prev, next } = data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='slide-img w-full'>
                <img src={img} alt="" className=" h-96 w-full" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-ghost font-bold text-xl bg-white text-primary">❮</a>
                <a href={`#slide${next}`} className="btn btn-ghost font-bold text-xl bg-white text-primary">❯</a>
            </div>
            <div className='absolute transform -translate-y-1/2 left-1/4 top-1/2 w-1/2'>
                <h1 className='text-5xl text-white text-center font-bold'>Welcome to Comfort Zone</h1>
                
            </div>
        </div>
    );
};

export default Sliderone;