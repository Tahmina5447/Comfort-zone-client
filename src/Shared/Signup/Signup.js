import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import googleLogo from '../../images/googleLogo.png'

const Signup = () => {
    const { createUser, updateUser, loginWithProvider } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {errorMessage,setErrormessage}=useState('')
    const location =useLocation()
    const navigate=useNavigate();
    const from=location?.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();

    const handlegoogleSignup = () => {
        loginWithProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error));

    }

    const handleSignup = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name

                }
                console.log(userInfo);
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,data.candidate);
                    })
                    .catch(err => console.log(err));
                toast.success('Successfully Create a User')
                navigate(from, {replace: true})

            })
            .catch(error => {
                console.log(error)
                setErrormessage(error.message)
            });
    };


    const saveUser = (name, email,candidate) =>{
        const user ={name, email,candidate};
        // console.log(user)
        fetch('https://comfort-zone-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            // setCreatedUserEmail(email);
            navigate(from, {replace: true})
            console.log(data);
        })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <h1 className="text-5xl font-bold text-center mt-4">Sign Up  now!</h1>
                {errorMessage && <p className='text-bold text-error m-4'>{errorMessage}</p>}
                <form onSubmit={handleSubmit(handleSignup)} className="card-body">
                <div className='form-control'>
                            <select
                                {...register('candidate',{ required: 'This option is required.' })}
                                className="select input input-bordered">
                                <option  selected>Buyer</option>
                                <option>Seller</option>
                                
                            </select>
                            {errors.candidate && <p className='text-red-500'>{errors.candidate.message}</p>}
                        </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register('name', { required: 'Name is required.' })}
                            type="text" name='name' placeholder="Name" className="input input-bordered" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register('email', { required: 'Email is required.' })}
                            type="email" placeholder="Email" className="input input-bordered" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register('password', {
                                required: 'Password is required.',
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            type="password" placeholder="Password" className="input input-bordered" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <div className='flex mx-auto'>
                    <h3 className='font-bold mr-1'>Sign Up With</h3>
                    <button onClick={handlegoogleSignup}><img className='w-5 h-5' src={googleLogo} alt="" /></button>
                </div>
                <p className='text-center'>Already have an account? <Link className='btn btn-link' to='/login'>Login</Link></p>

            </div>
        </div>
    );
};

export default Signup;