import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
    })

    const addProduct = (data) => {
        const productInfo = {
            productImage: data.productImage,
            productName: data.productName,
            location: data.location,
            resellPrice: data.resellPrice,
            originalPrice: data.originalPrice,
            usesYears: data.usesYears,
            todaysDate: data.todaysDate,
            sellerName: data.sellerName,
            phone: data.phone,
            description: data.description,
            categories: data.categories,
            productCondition: data.productCondition
        }
        
        console.log(productInfo)
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(result => {
                console.log(result);
                
        })
    }

    return (
        <div className="my-16">
            <div className="card w-2/3 mx-auto shadow-2xl ">
                <h1 className="text-2xl font-bold text-center mt-4">Fill this form and add your product</h1>
                {/* {errorMessage && <p className='text-bold text-error m-4'>{errorMessage}</p>} */}
                <form onSubmit={handleSubmit(addProduct)} className="card-body ">
                    <div className='grid grid-cols-2'>
                        <div className="form-control">
                            <input
                                {...register('productImage', { required: 'Product Image URL is required.' })}
                                type="text" placeholder="Image URL" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('productImage', { required: 'Email is required.' })}
                                type="email" placeholder="Email" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('productName', { required: 'Product Name is required.' })}
                                type="text" placeholder="Product Name" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('location', { required: 'Location is required.' })}
                                type="text" placeholder="Location" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('resellPrice', { required: 'Sell price is required.' })}
                                type="text" placeholder="Sell price" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('originalPrice', { required: 'Original price is required.' })}
                                type="text" placeholder="Original price" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('usesYears', { required: 'Years of use is required.' })}
                                type="text" placeholder="Years of use" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('todaysDate', { required: 'Todays date is required.' })}
                                type="text" placeholder="Todays date" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('sellerName', { required: 'Seller Name is required.' })}
                                type="text" placeholder="Seller Name" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('phone', { required: 'Mobile Number is required.' })}
                                type="text" placeholder="Mobile Number" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <input
                                {...register('description', { required: 'Description is required.' })}
                                type="text" placeholder="Description" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <select
                                {...register('categories',{ required: 'Category is required.' })}
                                className="select input input-bordered ">
                                <option disabled selected>Select Your category</option>
                                {
                                    categories.map(category => <option
                                        key={category._id}
                                        value={category.categoryName}
                                    >{category.categoryName}</option>)
                                }


                            </select>
                        </div>
                        <div className='form-control'>
                            <select
                                {...register('productCondition',{ required: 'Condition is required.' })}
                                className="select input input-bordered">
                                <option disabled selected>Select Product Condition</option>
                                <option>Good</option>
                                <option>Better</option>
                                <option>Best</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control mt-6 w-3/5 mx-auto">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddProduct;