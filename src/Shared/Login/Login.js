import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleLogin = (data) => {
        console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setLoginUserEmail(data.email);
                toast.success('Successfully Login')
                
                
            })
            .catch(error => {
                console.log(error.message)
                // setErrorMessage(error.message)
            });


    };
    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                <h1 className="text-5xl font-bold text-center mt-4">Login now!</h1>
                {/* <p className='text-bold text-error m-4'>{errorMessage}</p> */}
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
                            {...register('password', { required: 'Password is required.' })}
                            type="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {/* <form onSubmit={resetPass}>
                    <button type='submit'>Forget Password?</button>
                    <input type="email" name='email' placeholder="Send Your Email" className="input input-bordered" />
                </form> */}
                <p className='text-center'>Create a new account.<Link className='btn btn-link' to='/signup'>Sign Up</Link></p>

            </div>

        </div>
    );
};

export default Login;