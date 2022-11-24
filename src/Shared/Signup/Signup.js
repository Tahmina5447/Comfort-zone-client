import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const {createUser,updateUser}=useContext(AuthContext);
    const { register, handleSubmit,formState: { errors } } = useForm();

    const handleSignup = (data) =>{
        // console.log(data)
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
                    // saveUser(data.name, data.email);
                })
                .catch(err => console.log(err));
           
        })
        .catch(error => {
            console.log(error)
            // setErrorMessage(error.message)
        });
    };
    return (
        <div className="hero min-h-screen ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <h1 className="text-5xl font-bold text-center mt-4">Sign Up  now!</h1>
            {/* {errorMessage && <p className='text-bold text-error m-4'>{errorMessage}</p>} */}
            <form onSubmit={handleSubmit(handleSignup)} className="card-body">
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
                        type="text" placeholder="Email" className="input input-bordered" />
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
            <p className='text-center'>Already have an account? <Link className='btn btn-link' to='/login'>Login</Link></p>

        </div>
    </div>
    );
};

export default Signup;