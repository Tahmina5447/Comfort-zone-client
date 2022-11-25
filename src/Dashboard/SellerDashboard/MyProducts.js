import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const {data:myProducts=[],refetch}=useQuery({
        queryKey:['myProducts'],
        queryFn:()=>fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
        .then(res=>res.json())
    })
    return (
        <div className='my-16'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                myProducts.map(product=><div className="card bg-base-100  shadow-xl border-2">
                <figure>< img className='h-48 w-full' src={product.productImage} alt="bed" /></figure>
                <div className="card-body">
                    <p className='font-bold text-teal-400 '>Price: <span>{product.resellPrice}</span></p>
                    
                    <div className="mt-8">
                        <button className='btn btn-sm'>Delete</button>
                       
                    </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default MyProducts;