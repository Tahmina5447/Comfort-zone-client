import React from 'react';

const SingleProducts = ({product,setSingleProduct}) => {
    const {productName,todaysDate,usesYears,resellPrice,description,productImage,location,originalPrice,sellerName,phone}=product
    return (
        <div>
            <div className="card bg-base-100  shadow-xl border-2">
                <figure>< img className='h-48 w-full' src={productImage} alt="bed" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl">{productName} <span className='text-sm'>({usesYears} years used)</span></h2>
                    <p>Main Price: {originalPrice} </p>
                    <p className='font-bold text-teal-400 '>Sell Price: <span>{resellPrice}</span></p>
                    <p>Seller Name: {sellerName}</p>
                    <p>Location: {location} </p>
                    <p>Phone: {phone} </p>
                    <p>It has been posted: {todaysDate} </p>
                    <p><span className='text-xl font-bold'>About Product: </span>{description}</p>
                    <div className="mt-8">
                        <label onClick={()=>{setSingleProduct(product)}} htmlFor="bookModal" className='btn text-white py-4 rounded-xl px-6 bg-primary font-bold'>Book Now</label>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;