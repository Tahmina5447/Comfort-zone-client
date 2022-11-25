import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import SingleProducts from './SingleProducts';


const Products = () => {
    
    const data=useLoaderData();
    const[singleProduct,setSingleProduct]=useState(null);
    // console.log(data)

    const {data:products=[],refetch}=useQuery({
        queryKey:['products'],
        queryFn:()=>fetch(`http://localhost:5000/products?categories=${data.categoryName}`)
        .then(res=>res.json())
    })
    return (
        <div className='my-16'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
            {
                products.map(product=><SingleProducts
                    product={product}
                    setSingleProduct={setSingleProduct}

                ></SingleProducts>)
            }
            </div>
           
{
    singleProduct && <Modal
    refetch={refetch}
    singleProduct={singleProduct}
    >

    </Modal>
}

        </div>
    );
};

export default Products;