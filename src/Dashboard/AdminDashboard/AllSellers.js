import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: () => fetch(`https://comfort-zone-server.vercel.app/users?candidate=Seller`)
            .then(res => res.json())
    })


    const handleDelete = id => {
        fetch(`https://comfort-zone-server.vercel.app/user/${id}`, {
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
        toast.success('Seller deleted successfully')
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map(seller => <tr>

                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => { handleDelete(seller._id) }} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSellers;