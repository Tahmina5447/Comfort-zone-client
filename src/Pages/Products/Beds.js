import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const Beds = () => {

    
    const {data:beds=[]}=useQuery({
        queryKey:['beds'],
        queryFn:()=>fetch(`http://localhost:5000/products?categories`)
        .then(res=>res.json())
    })
    return (
        <div className='my-16'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                beds.map(bed=><div className="card bg-base-100  shadow-xl border-2">
                <figure>< img className='h-48 w-full' src={bed.productImage} alt="bed" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl">{bed.productName}</h2>
                    <p className='font-bold text-teal-400 '>Price: <span>{bed.resellPrice}</span></p>
                    <p>{(bed.description).slice(0,100)}...</p>
                    <div className="mt-8">
                        <Link className='text-white py-4 rounded-xl px-6 bg-primary font-bold' to=''>SEE DETAILS</Link>
                        {/* {`/details/${item._id}`} */}
                    </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default Beds;