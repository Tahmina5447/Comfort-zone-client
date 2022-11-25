import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Modal = ({ refetch, singleProduct }) => {
    // const {productName,resellPrice}=singleProduct;
    // console.log(singleProduct)
    const { user } = useContext(AuthContext)
    const categoryName=singleProduct.categories    
    const productname=singleProduct.productName    
    const email=user?.email    
    const name=user?.displayName    
    const price=singleProduct.resellPrice
    const productImg=singleProduct.productImage  

    
    const handlebooking = event => {
        event.preventDefault()
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const bookingInfo = {
            price,
            location,
            name,
            email,
            productname,
            phone,
            categoryName,
            productImg
        }
// console.log(bookingInfo)
        fetch('https://comfort-zone-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking Confirm')
                    refetch()
                } else {
                    toast.error(data.message)
                }

            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <input type="checkbox" id="bookModal" className="modal-toggle" />


            <div className='modal'>
                <div className="modal-box">
                    <label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p>Product: {productname}</p>
                    <p>Name: {name}</p>
                    <p>Category: {categoryName}</p>
                    <p>Price:{price}</p>
                    <p>Email:{email}</p>
                    <form onSubmit={handlebooking}>
                        <input type="text" name='phone' placeholder='Phone' className='mt-3 rounded border-2 w-full' />
                        <input type="text" name='location' placeholder='location' className='mt-3 rounded border-2 w-full' />
                        <div className="modal-action">
                            <button type='submit'><label htmlFor="bookModal" className="btn">Submit</label></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Modal;