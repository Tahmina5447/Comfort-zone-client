import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Component/Loader';
import Modal from './Modal';
import SingleProducts from './SingleProducts';


const Products = () => {
    
    const data=useLoaderData();
    const[singleProduct,setSingleProduct]=useState(null);
    // const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    // console.log(data)

    const {data:products=[],refetch}=useQuery({
        queryKey:['products'],
        queryFn:()=>fetch(`https://comfort-zone-server.vercel.app/products?categories=${data.categoryName}`)
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