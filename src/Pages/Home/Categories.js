import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
// import bed from '../../images/bed2.jpg'

const Categories = () => {
    const {data:categories=[]}=useQuery({
        queryKey:['categories'],
        queryFn:()=>fetch(`http://localhost:5000/categories`)
        .then(res=>res.json())
    })
    return (
        <div className='my-16'>
            <div>
                <h1 className='text-center text-primary text-2xl font-bold'>Categories</h1>
            </div>
            <div className='mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {categories.map(category=><div>
                    <Link className='btn' to={`/products/${category._id}`}>{category.categoryName}</Link>
                </div>)}
            </div>
            
        </div>
    );
};

export default Categories;