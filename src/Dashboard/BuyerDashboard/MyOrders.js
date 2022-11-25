import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Component/Loader';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const [loading,setLoading]=useState(true)
    const {data:orders=[]}=useQuery({
        queryKey:['orders'],
        queryFn:()=>fetch(`https://comfort-zone-server.vercel.app/orders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            return data;
            // console.log(data)
            
        })
    })
    if(loading){
        return <Loader></Loader>
    }
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
                        <button className='btn btn-sm'><Link to='/dashboard/payment'>Pay</Link></button>
                        
                    </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default MyOrders;