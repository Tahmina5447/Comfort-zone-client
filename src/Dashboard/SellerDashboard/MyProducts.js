import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Component/Loader';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const [loading,setLoading]=useState(true)
    
    const {data:myProducts=[],refetch}=useQuery({
        queryKey:['myProducts'],
        queryFn:()=>fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
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

    const handleDelete = id =>{
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    
                    refetch();
                }
            })
            .catch(err => console.error(err))
        toast.success('Product deleted successfully')
    }

    return (
        <div className='my-16'>
            <div>
                <h1 className='text-2xl font-bold text-center my-10'>My Products</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                myProducts.map(product=><div className="card bg-base-100  shadow-xl border-2">
                <figure>< img className='h-48 w-full' src={product.productImage} alt="bed" /></figure>
                <div className="card-body">
                    <p className='font-bold text-teal-400 '>Price: <span>{product.resellPrice}</span></p>
                    
                    <div className="mt-8">
                        <button onClick={()=>{handleDelete(product._id)}} className='btn btn-sm'>Delete</button>
                       
                    </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default MyProducts;