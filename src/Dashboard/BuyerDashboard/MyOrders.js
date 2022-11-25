import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const {data:orders=[],refetch}=useQuery({
        queryKey:['orders'],
        queryFn:()=>fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res=>res.json())
    })
    console.log(orders)
    return (
        <div className='my-16'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                orders.map(order=><div className="card bg-base-100  shadow-xl border-2">
                <figure>< img className='h-48 w-full' src={order.productImg} alt="bed" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl">{order.productname}</h2>
                    <p className='font-bold text-teal-400 '>Price: <span>{order.price}</span></p>
                    
                    <div className="mt-8">
                        <button className='btn btn-sm'>Pay</button>
                       
                    </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default MyOrders;