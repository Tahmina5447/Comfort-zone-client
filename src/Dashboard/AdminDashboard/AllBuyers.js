import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const {data:allBuyers=[],refetch}=useQuery({
        queryKey:['allBuyers'],
        queryFn:()=>fetch(`https://comfort-zone-server.vercel.app/users?candidate=Buyer`)
        .then(res=>res.json())
    })

    const handleDelete = id =>{
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
        toast.success('Buyer deleted successfully')
    }
    
    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                  <th>Verify</th>
                </tr>
              </thead>
              <tbody>
                {
                allBuyers.map(buyer=><tr>
                  
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td><button onClick={()=>{handleDelete(buyer._id)}} className='btn btn-xs btn-error'>Delete</button></td>
                    <td><button className='btn btn-xs '>Verify</button></td>
                  </tr>)
                }
                
              </tbody>
            </table>
          </div>
        
        </div>
    );
};

export default AllBuyers;