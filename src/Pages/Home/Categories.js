import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const {data:categories=[]}=useQuery({
        queryKey:['categories'],
        queryFn:()=>fetch(`https://comfort-zone-server.vercel.app/categories`)
        .then(res=>res.json())
    })
    return (
        <div className='my-16'>
            <div>
                <h1 className='text-center text-primary text-2xl font-bold'>Categories</h1>
            </div>
            <div className='w-2/5 mx-auto my-6'>
                {categories.map(category=><div>
                    
                        <div className='border bg-secondary py-3 rounded-xl text-white '><Link  to={`/categories/${category._id}`}><h3 className='text-center' >{category.categoryName}</h3></Link></div>
                    
                    
                    
                </div>)}
            </div>
            
        </div>
    );
};

export default Categories;