import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/4o4.jpg'
const ErrorPage = () => {
    return (
        <div className='my-16'>
            <div>
                <img className=' mx-auto w-44 h-44'  src={errorImg} alt="errorImg" />
            </div>
            <p className='text-center mt-4'><Link to='/' className='btn-link'>Go to home page</Link>/Log out and then come back.</p>
        </div>
    );
};

export default ErrorPage;