import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Addvertise = () => {
    const { data: adds = [] } = useQuery({
        queryKey: ['adds'],
        queryFn: () => fetch(`https://comfort-zone-server.vercel.app/add`)
            .then(res => res.json())
    })
    return (
        <div>
            {
                adds?.length && <div className='bg-red-200 py-16 px-4 '>
                <h1 className='mb-6 text-center text-2xl font-bold text-primary'>Advertise</h1>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        adds.map(add => <div className='shadow-xl rounded-xl'>
                            <img className='w-full max-h-48' src={add.img} alt="" />
                        </div>)
                    }
                </div>
            </div>
            }
        </div>
    );
};

export default Addvertise;