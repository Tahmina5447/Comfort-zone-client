import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const addProduct=(data)=>{
        const productInfo={
            productName:data.name,
            sellerName:data.email
        }
        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
                
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            
        })
    }
   
    return (
        <div className="hero min-h-screen ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <h1 className="text-5xl font-bold text-center mt-4">Sign Up  now!</h1>
            {/* {errorMessage && <p className='text-bold text-error m-4'>{errorMessage}</p>} */}
            <form onSubmit={handleSubmit(addProduct)} className="card-body">
                <div className="form-control">
                    
                    <input
                    {...register('name', { required: 'Name is required.' })}
                     type="text" name='name' placeholder="Name" className="input input-bordered" />
                      {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control">
                   
                    <input
                        {...register('email', { required: 'Email is required.' })}
                        type="text" placeholder="Email" className="input input-bordered" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            <p className='text-center'>Already have an account? <Link className='btn btn-link' to='/login'>Login</Link></p>

        </div>
    </div>
    );
};

export default AddProduct;